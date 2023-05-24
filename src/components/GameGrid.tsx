import { FunctionComponent } from "react";
import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";

interface GameGridProps {
    
}
 
const GameGrid: FunctionComponent<GameGridProps> = () => {
    const {games, error} = useGames()

    return (  
        <div>
            {error && <Text color={"red"} fontSize={"xl"}>{error}</Text>}
            <ul>
                {
                    games && games.map(game => <li key={game.id}>{game.name}</li>)
                }
            </ul>
        </div>
    );
}
 
export default GameGrid;