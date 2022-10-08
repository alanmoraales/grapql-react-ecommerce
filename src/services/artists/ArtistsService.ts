import artsyGraphQLApi from "../graphQL/artsyGraphQLApi";
import { IArtist } from "@declarations/artist";
import Artists, { IArtistWithConnections } from "../../shared/models/Artists";

const ArtistsService = () => {
  const getPopularArtists = async () => {
    const queryText = `
      {
        highlights {
          popularArtists {
            slug
            internalID
            name
            years
            birthday
            nationality
            blurb
            image {
              url
            }
            formattedArtworksCount
            artworksConnection(first: 5) {
                edges {
                    node {
                        date
                        title
                        slug
                        id
                    }
                }
            }
          }
        }
      }
    `;
    const queryResponse = await artsyGraphQLApi.fetchQuery<any>(queryText);
    const popularArtists = queryResponse.data.highlights
      .popularArtists as IArtist[];
    const popularArtistsWithConnections = popularArtists.reduce(
      (artistsWithConnections, artists) => {
        artistsWithConnections.push(Artists(artists));
        return artistsWithConnections;
      },
      [] as IArtistWithConnections[]
    );
    return popularArtistsWithConnections;
  };

  return {
    getPopularArtists,
  };
};

const artworkService = ArtistsService();

export default artworkService;
