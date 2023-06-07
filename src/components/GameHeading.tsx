import { Heading } from "@chakra-ui/react";
import {FunctionComponent} from "react"
import { GameQueryParams } from "../types/GameTypes";

interface GameHeadingProps {
    gameQueryParams: GameQueryParams
}
 
const GameHeading: FunctionComponent<GameHeadingProps> = ({
    gameQueryParams
}) => {
    const heading = `${gameQueryParams.platform?.name || ""} ${gameQueryParams.genre?.name || ""} Games`
    return (  
        <Heading marginY={10} fontSize={20}>
            {heading}
        </Heading>
    );
}
 
export default GameHeading;