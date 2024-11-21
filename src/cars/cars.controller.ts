import { Controller, Get, Param } from '@nestjs/common';

interface IRespons {
  success: boolean;
  message: string;
  data: any;
}

@Controller('api/cars')
export class CarsController {
  private readonly cars: string[] = ['Toyota', 'BMW', 'KIA'];
  private responsSuccess: IRespons = {
    success: true,
    message: 'ok',
    data: {},
  };
  private responsError: IRespons = {
    success: false,
    message: 'Element Not Found',
    data: {},
  };

  @Get()
  GetAllCars(): IRespons {
    this.responsSuccess.data = this.cars;
    return this.responsSuccess;
  }
  @Get(':id')
  GetCarById(@Param('id') id: string): IRespons {
    if (this.cars[id] === undefined) {
      return this.responsError;
    }
    this.responsSuccess.data = this.cars[+id];
    return this.responsSuccess;
  }
}
