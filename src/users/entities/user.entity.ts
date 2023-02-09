import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn({ type: `varchar`, length: 2 })
    type: `op` | `ad` ;
    @PrimaryColumn({ type: `int`, unique: true })
    id: number;
    @Column({ type: `varchar`, length: 255 })
    Name: string;
    @Column({ type: `int` ,  nullable: true })
    idBoss: number | null ;
}