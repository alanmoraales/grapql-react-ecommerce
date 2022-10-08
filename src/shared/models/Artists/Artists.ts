import { IArtist, IArtwork } from "@declarations/artist";

interface IArtistWithConnections extends Omit<IArtist, "artworksConnection"> {
  artworks: IArtwork[];
}

const Artists = (payload: IArtist): IArtistWithConnections => {
  const artist = payload;
  const artworks = artist.artworksConnection.edges.reduce(
    (artworks, artwork) => {
      artworks.push(artwork.node);
      return artworks;
    },
    [] as any[]
  );

  return {
    ...artist,
    artworks,
  };
};

export type { IArtistWithConnections };
export default Artists;
