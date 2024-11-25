import { IsString, MinLength } from "class-validator";

export class CreateBrandDTO {
    @IsString()
    @MinLength(3)
    public readonly name: string;

}
