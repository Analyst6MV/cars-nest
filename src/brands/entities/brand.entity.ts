import { UUIDTypes } from "uuid";

export class Brand {
    public id: UUIDTypes;
    public name: string;
    
    public createdAt: Date;
    public updatedAt?: Date;

}
