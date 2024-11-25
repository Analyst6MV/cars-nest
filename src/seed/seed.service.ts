import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from '../brands/brands.service';
import { BRANS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';


@Injectable()
export class SeedService {
 
    private readonly carsService: CarsService;
    private readonly brandsService: BrandsService; 
    constructor( carsService: CarsService, brandsService: BrandsService ) {
        this.brandsService = brandsService;
        this.carsService = carsService;
    }

    populateDB(): void {
        this.brandsService.fillBrandsWithSeedData(BRANS_SEED);
        this.carsService.fillCarsWithSeedData(CARS_SEED);
    }
}
