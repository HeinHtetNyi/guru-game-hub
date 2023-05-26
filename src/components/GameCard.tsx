import { FunctionComponent } from "react";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../types/GameTypes";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

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
                <HStack justifyContent='space-between' marginY={1}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
}
 
export default GameCard;