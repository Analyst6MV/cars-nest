import { Injectable, NotFoundException, BadRequestException, ValidationError } from '@nestjs/common';
import { badRequestRespons, notFondRespons } from 'src/entityRespons/responController.interface';
import { ICar } from './interfaces/car.interface';
import { UUIDTypes, v4 as uuidV4 } from 'uuid';
import { CarDTO, RegisterCarDTO, UpdateCarDTO } from './dto';

@Injectable()
export class CarsService {
  private cars: CarDTO[] = [ ];

  findAll(): CarDTO[] {
    return this.cars;
  }

  findById(id: UUIDTypes): CarDTO {
    if (!this.cars.find((car) => car.id === id))
      throw new NotFoundException(notFondRespons);
    return this.cars.find((car) => car.id === id);
  }

  findByModel(model: string): CarDTO {
    return this.cars.find((car) => car.model.toLocaleUpperCase() === model.toLocaleUpperCase());
  }

  insertOne( newCar: RegisterCarDTO ): CarDTO {
    const car = new CarDTO( newCar );
    if(this.findByModel(car.model))
      throw new BadRequestException(badRequestRespons);
    
    this.cars.push(car);
    return car;
  }

  updatedOne( id: UUIDTypes, updateCar: UpdateCarDTO ): CarDTO {
    let carDB = this.findById(id);
    if( this.findByModel(updateCar?.model) ) throw new BadRequestException(badRequestRespons);
    
    this.cars = this.cars.map( car => {
        if(car.id === id) {
          carDB = { ...carDB, ...updateCar, id};
          return carDB;
        }
        return car;
    });
    return carDB;
  }

  deleteOne(id: UUIDTypes): void {
    this.findById(id);
    this.cars = this.cars.filter((x) => x.id === id );
  }

  fillCarsWithSeedData(data: CarDTO[]): void {
    this.cars = data;
  }
}
