import { FunctionComponent, useState } from "react";
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navbar from "./Navbar";
import GameGrid from "./GameGrid";
import GenreList from "./GenreList";
import { Genre } from "../types/GenreTypes";
import PlatFormSelector from "./PlatformSelector";
import { Platform } from "../types/PlatformTypes";
import { GameQueryParams } from "../types/GameTypes";
import SortSelector from "./SortSelector";

interface LayoutProps {
    
}
 
const Layout: FunctionComponent<LayoutProps> = () => {

    const [gameQueryParams, setGameQueryParams] = useState<GameQueryParams>({} as GameQueryParams)

    return (  
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "sidebar main"`
          }}
            gap={1}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr"
            }}
        >
            <GridItem area={'nav'}>
                <Navbar />
            </GridItem>
            <Show above="lg">
                <GridItem area={'sidebar'}>
                    <GenreList 
                        onSelectGenre={(genre: Genre) => setGameQueryParams({...gameQueryParams, genre})}
                        selectedGenre={gameQueryParams?.genre}
                    />
                </GridItem>
            </Show>
            <GridItem area={'main'}>
                <HStack spacing={5}>
                    <PlatFormSelector 
                        onSelectPlatform={(platform: Platform) => setGameQueryParams({...gameQueryParams, platform})} 
                        selectedPlatform={gameQueryParams?.platform}
                    />
                    <SortSelector 
                        onSelectSort={(sort: String) => setGameQueryParams({...gameQueryParams, sort: sort})}
                        selectedSort={gameQueryParams?.sort}
                    />
                </HStack>
                <GameGrid 
                   gameQueryParams={gameQueryParams}
                />
            </GridItem>
        </Grid>
    );
}
 
export default Layout;