import { TConnection } from "@declarations/graphql";

interface IArtwork {
  id: string;
  slug: string;
  title: string;
  date: string;
}

interface IArtist {
  internalID: string;
  blurb: string;
  name: string;
  slug: string;
  artworksConnection: TConnection<IArtwork>;
}

export type { IArtist, IArtwork };
