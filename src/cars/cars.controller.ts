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
} from 'src/entityRespons/responController.interface';
import { CarDTO, RegisterCarDTO, UpdateCarDTO } from './dto';
import { UUIDTypes } from 'uuid';

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
    successRespons.data = this.carsService.findAll();
    return successRespons;
  }

  // con estos decoreadors se define el tipo de metodo que se espera para ejecutar el motodo interno del controlador
  @Get(':id')
  GetCarById(@Param('id', ParseUUIDPipe) id: string): IRespons {
    const dataResult: CarDTO = this.carsService.findById(id);
    successRespons.data = dataResult;
    return successRespons;
  }

  @Post('/register-car')
  registerCar(@Body() newCar: RegisterCarDTO) {
    const result: CarDTO = this.carsService.insertOne(newCar);
    successRespons.data = result;
    return successRespons;
  }

  @Patch('/update-car/:id')
  updateCar(@Param('id', ParseUUIDPipe) id: UUIDTypes, @Body() updatedCar: UpdateCarDTO) {
    const result: CarDTO = this.carsService.updatedOne( id, updatedCar );
    successRespons.data = result;
    return successRespons;    
  }

  @Delete('/delete-car/:id')
  deleteCar(@Param('id', ParseUUIDPipe) id: UUIDTypes) {
    this.carsService.deleteOne(id);
    return successRespons;
  }
}
