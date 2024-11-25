import { IsUUID, IsString, MinLength, IsNumber } from "class-validator";
import { UUIDTypes, v4 as uuidV4 } from "uuid";
import { RegisterCarDTO } from "./register-car.dto";

export class CarDTO {
    @IsUUID()
    public readonly id: UUIDTypes;
    @IsString()
    @MinLength(3)
    public readonly model: string;
    @IsString()
    @MinLength(3)
    public readonly brand: string;
    @IsNumber()
    public readonly price: number;

    constructor( newCar: RegisterCarDTO ) {
        this.id = uuidV4();
        this.model = newCar.model.toLocaleUpperCase();
        this.brand = newCar.brand.toLocaleUpperCase();
        this.price = newCar.price;
    }
}