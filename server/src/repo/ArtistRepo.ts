import { QueryArrayResult } from "./QueryArrayResult";
import { Artist } from "./Artist";

export const getArtists = async (): Promise<QueryArrayResult<Artist>> => {
  const artists = await
    Artist.createQueryBuilder("artist").getMany();
  if (!artists) {
    return {
      messages: ["No artists found."],
    };
  }
  console.log('artists');
  return {
    entities: artists,
  };
};