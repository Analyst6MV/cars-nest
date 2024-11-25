import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { UUIDTypes } from "uuid";

export class UpdateCarDTO {

    @IsOptional()
    @IsUUID()
    public readonly id?: UUIDTypes;
    
    @IsOptional()
    @IsString()
    public readonly model: string;
    
    @IsOptional()
    @IsString()
    public readonly brand: string;
    
    @IsOptional()
    @IsNumber()
    public readonly price: number;
}