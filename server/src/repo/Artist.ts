import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Auditable } from "../Auditable";
import { Length } from 'class-validator';
import { Album } from './Album';
import { Song } from './Song';

@Entity({ name: "Artists" })
export class Artist extends Auditable {
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

  @OneToMany(() => Song, (song) => song.artist)
  songs: Song[];

  @OneToMany(() => Album, (album) => album.artist)
  albums: Album[];
}
