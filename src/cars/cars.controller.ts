import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import {
  IRespons,
  successRespons,
} from 'src/Interfaces/responController.interface';
import { ICar } from './interfaces/car.interface';

// este decorador se usa para definir la ruta que activara este controlador
// ejemplo en este caso seria: http://localhost:3000/api/cars/
@Controller('api/cars')
export class CarsController {
  private readonly carsService: CarsService;

  constructor(carsService: CarsService) {
    this.carsService = carsService;
  }

  // con estos decoreadors se define el tipo de metodo que se espera para ejecutar el motodo interno del controlador
  @Get()
  GetAllCars(): IRespons {
    successRespons.data = this.carsService.FindAll();
    return successRespons;
  }

  // con estos decoreadors se define el tipo de metodo que se espera para ejecutar el motodo interno del controlador
  @Get(':id')
  GetCarById(@Param('id', ParseUUIDPipe) id: string): IRespons {
    const dataResult = this.carsService.FindById(id);
    successRespons.data = dataResult;
    return successRespons;
  }

  @Post('/register-car')
  registerCar(@Body() newCar: ICar) {
    return (successRespons.data = { newCar });
  }

  @Patch('/update-car/:id')
  updateCar(@Param('id', ParseUUIDPipe) id: number, @Body() updatedCar: ICar) {
    return (successRespons.data = { id, updatedCar });
  }

  @Delete('/delete-car/:id')
  deleteCar(@Param('id', ParseUUIDPipe) id: number) {
    return (successRespons.data = { id });
  }
}
