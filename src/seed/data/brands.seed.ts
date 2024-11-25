import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuidV4 } from 'uuid';

export const BRANS_SEED: Brand[] = [
    {
        id: uuidV4(),
        name: "TOYOTA",
        createdAt: new Date()
    },
    {
        id: uuidV4(),
        name: "BMW",
        createdAt: new Date()
    },
    {
        id: uuidV4(),
        name: "NISSAN",
        createdAt: new Date()
    },
    {
        id: uuidV4(),
        name: "FORD",
        createdAt: new Date()
    },
    {
        id: uuidV4(),
        name: "FERRARY",
        createdAt: new Date()
    },
    {
        id: uuidV4(),
        name: "YAMAHA",
        createdAt: new Date()
    }
];