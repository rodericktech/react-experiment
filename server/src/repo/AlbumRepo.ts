import { QueryArrayResult } from "./QueryArrayResult";
import { Album } from "./Album";

export const getAlbums = async (): Promise<QueryArrayResult<Album>> => {
  const albums = await
    Album.createQueryBuilder("album").getMany();
  if (!albums) {
    return {
      messages: ["No albums found."],
    };
  }
  // console.log('albums');
  return {
    entities: albums,
  };
};
