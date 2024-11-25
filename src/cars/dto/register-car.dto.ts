import { IsNumber, IsString, MinLength } from "class-validator";

export class RegisterCarDTO {
    @IsString()
    @MinLength(3)
    public readonly model: string;
    @IsString()
    @MinLength(3)
    public readonly brand: string;
    @IsNumber()
    public readonly price: number;
}