import { FunctionComponent } from "react";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../types/GameTypes";

interface GameCardProps {
    game: Game
}
 
const GameCard: FunctionComponent<GameCardProps> = ({
    game,
}) => {
    return (  
        <Card borderRadius={10} overflow={"hidden"}>
            <Image src={game.background_image} />
            <CardBody>
                <Heading size={"md"} >{game.name}</Heading>
            </CardBody>
        </Card>
    );
}
 
export default GameCard;