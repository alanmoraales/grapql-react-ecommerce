import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import artistsService from "./services/artists";

function App() {
  const fetchPopularArtists = async () => {
    const popularArtists = await artistsService.getPopularArtists();
    console.log({ popularArtists });
    const artist = popularArtists[0];
    const artistSlug = artist.artworks[0].slug;
    console.log(artistSlug);
  };

  useEffect(() => {
    fetchPopularArtists();
  }, []);

  return (
    <div>
      <header>
        <Button colorScheme="purple">Hola</Button>
      </header>
    </div>
  );
}

export default App;
