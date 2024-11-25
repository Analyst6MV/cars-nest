import { CarDTO } from "src/cars/dto";
import { v4 as uuidV4 } from 'uuid';


export const CARS_SEED: CarDTO[] = [
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