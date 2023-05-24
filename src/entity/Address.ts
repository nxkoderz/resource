import { Entity, PrimaryColumn } from "typeorm"

@Entity('addresses')
export class Address {
    @PrimaryColumn({ unique: true })
    id!: number;
}
