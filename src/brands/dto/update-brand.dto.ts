import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDTO } from './create-brand.dto';
import { UUIDTypes } from 'uuid';
import { IsOptional, IsUUID } from 'class-validator';

export class UpdateBrandDTO extends PartialType(CreateBrandDTO) {
    
    @IsOptional()
    @IsUUID()
    public readonly id?: UUIDTypes;
}
