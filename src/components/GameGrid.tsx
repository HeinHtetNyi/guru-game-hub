import { FunctionComponent } from "react";
import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../types/GenreTypes";
import { Platform } from "../types/PlatformTypes";

interface GameGridProps {
    selectedGenre: Genre | null,
    selectedPlatform: Platform | null
}
 
const GameGrid: FunctionComponent<GameGridProps> = ({
    selectedGenre,
    selectedPlatform,
}) => {
    const {games, error, isLoading} = useGames(selectedGenre, selectedPlatform, [selectedGenre?.id, selectedPlatform?.id])
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    return (  
        <div>
            {error && <Text color={"red"} fontSize={"xl"}>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10} padding={10}>
                {
                    isLoading && skeletons.map(skeleton => (
                        <GameCardSkeleton key={skeleton} />
                    ))
                }

                {
                    (games.length > 0) ? games.map(game => <GameCard key={game.id} game={game} />): <Text>No Games Found</Text>
                }
            </SimpleGrid>
        </div>
    );
}
 
export default GameGrid;