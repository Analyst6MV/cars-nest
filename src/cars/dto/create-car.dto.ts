import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCarDTO {
  @IsString()
  @MinLength(2)
  @MaxLength(220)
  public readonly model: string;

  @IsString()
  @MinLength(2)
  @MaxLength(220)
  public readonly brand: string;

  @IsNumber()
  public readonly price: number;

  //   constructor(model: string, brand: string, price: number) {
  //     this.model = model.toLocaleUpperCase();
  //     this.brand = brand.toLocaleUpperCase();
  //     this.price = price;
  //   }
}
