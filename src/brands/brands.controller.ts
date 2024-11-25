import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDTO, UpdateBrandDTO } from './dto';
import { UUIDTypes } from 'uuid';

@Controller('api/brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDTO) {
    return this.brandsService.create(createBrandDto);
  }

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUIDTypes) {
    return this.brandsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: UUIDTypes, @Body() updateBrandDto: UpdateBrandDTO) {
    return this.brandsService.update(id, updateBrandDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: UUIDTypes) {
    return this.brandsService.remove(id);
  }
}
