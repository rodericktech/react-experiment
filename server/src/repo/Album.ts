import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Auditable } from "../Auditable";
import { Length } from 'class-validator';
import { Artist } from './Artist';

@Entity({ name: "Albums" })
export class Album extends Auditable {
  @PrimaryGeneratedColumn({
    name: "id", type: "bigint"
  })
  id: string;
  @Column("varchar", {
    name: "name",
    length: 180,
    unique: true,
    nullable: false,
  })
  name: string;

  @ManyToOne(() => Artist, (artist:Artist) => artist.albums)
  artist: Artist;
}
