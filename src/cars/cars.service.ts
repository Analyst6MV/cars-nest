import { Injectable, NotFoundException } from '@nestjs/common';
import { notFondRespons } from 'src/Interfaces/responController.interface';
import { ICar } from './interfaces/car.interface';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class CarsService {
  private cars: ICar[] = [
    {
      id: uuidV4(),
      brand: 'Nissan',
      model: 'GTR 920',
      price: 500000.0,
    },
    {
      id: uuidV4(),
      brand: 'Porsh',
      model: 'Porsh 900',
      price: 1000000.0,
    },
    {
      id: uuidV4(),
      brand: 'Jeep',
      model: 'Cherokee',
      price: 400000.0,
    },
  ];
  FindAll(): ICar[] {
    return this.cars;
  }

  FindById(id: string): ICar {
    if (!this.cars.find((car) => car.id === id))
      throw new NotFoundException(notFondRespons);
    return this.cars.find((car) => car.id === id);
  }
}
