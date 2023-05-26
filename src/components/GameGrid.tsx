import { FunctionComponent } from "react";
import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

interface GameGridProps {
    
}
 
const GameGrid: FunctionComponent<GameGridProps> = () => {
    const {games, error} = useGames()

    console.log(games)

    return (  
        <div>
            {error && <Text color={"red"} fontSize={"xl"}>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10} padding={10}>
                {
                    games && games.map(game => <GameCard key={game.id} game={game} />)
                }
            </SimpleGrid>
        </div>
    );
}
 
export default GameGrid;