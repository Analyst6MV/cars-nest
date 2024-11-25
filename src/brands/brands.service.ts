import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBrandDTO, UpdateBrandDTO } from './dto';
import { Brand } from './entities/brand.entity';
import { UUIDTypes, v4 as uuidV4 } from 'uuid';
import { badRequestRespons } from 'src/entityRespons/responController.interface';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDTO): Brand {
    const newBrand: Brand = {
      id: uuidV4(),
      name: createBrandDto.name.toLocaleUpperCase(),
      createdAt: new Date()
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll(): Brand[] {
    return this.brands;
  }

  findOne(id: UUIDTypes): Brand {
    const brand = this.brands.find((x) => x.id === id);
    if(!brand) {
      badRequestRespons.message = `This action returns a id: "${id}" brand`;
      throw new BadRequestException(badRequestRespons);
    }
    return brand;
  }

  findByName(name: string): Brand {
    const brand: Brand = this.brands.find((x) => x.name === name);
    return brand;
    
  }

  update(id: UUIDTypes, updateBrandDto: UpdateBrandDTO) {
    let brandDB = this.findOne(id);
    if( this.findByName(updateBrandDto?.name) ) throw new BadRequestException(badRequestRespons);
    
    this.brands = this.brands.map( car => {
        if(car.id === id) {
          brandDB.updatedAt = new Date();
          brandDB = { ...brandDB, ...updateBrandDto, id};
          return brandDB;
        }
        return car;
    });
    return brandDB;
  }

  remove(id: UUIDTypes) {
    this.findOne(id);
    this.brands = this.brands.filter((x) => x.id !== id );
  }

  fillBrandsWithSeedData( data: Brand[]): void {
    this.brands = data;
  }
}
