import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryColumn,PrimaryGeneratedColumn} from "typeorm";



@Entity()
export class User {
    @PrimaryColumn({ type: `varchar`, length: 2 })
    type: `op` | `ad` ;

    @PrimaryGeneratedColumn({ type: `int` })
    id: number;

    @Column({ type: `varchar`, length: 255 })
    name: string;
    @Column({ type: `varchar`, length: 255 })
    email: string;

    @Exclude()
    @Column({ type: 'varchar', length: 255 })
    password: string; // must be encrypted

    @Column({ type: `int` ,  nullable: true })
    idBoss: number | null ;
}