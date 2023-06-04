import { FunctionComponent, useState } from "react";
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from "./Navbar";
import GameGrid from "./GameGrid";
import GenreList from "./GenreList";
import { Genre } from "../types/GenreTypes";
import PlatFormSelector from "./PlatformSelector";
import { Platform } from "../types/PlatformTypes";

interface LayoutProps {
    
}
 
const Layout: FunctionComponent<LayoutProps> = () => {

    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

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
                        onSelectGenre={setSelectedGenre}
                        selectedGenre={selectedGenre}
                    />
                </GridItem>
            </Show>
            <GridItem area={'main'}>
                <PlatFormSelector 
                    onSelectPlatform={setSelectedPlatform} 
                    selectedPlatform={selectedPlatform}
                />
                <GameGrid 
                    selectedGenre={selectedGenre}
                    selectedPlatform={selectedPlatform}
                />
            </GridItem>
        </Grid>
    );
}
 
export default Layout;