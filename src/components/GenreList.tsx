import { FunctionComponent } from "react";
import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import { getCroppedImageUrl } from "../services/image-urls";
import useGenres from "../hooks/useGenres";
import { Genre } from "../types/GenreTypes";

interface Props {
    onSelectGenre: (genre: Genre) => void
}

const GenreList: FunctionComponent<Props> = ({
    onSelectGenre
}) => {
    const {genres, error, isLoading} = useGenres();

    if (isLoading) return <Spinner />

    return (  
        <List paddingX="10px">
            {
                genres.map((genre: Genre) => (
                    <ListItem paddingY={"10px"} key={genre.id}>
                        <HStack>
                            <Image 
                                boxSize="32px"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button 
                                onClick={() => onSelectGenre(genre)} 
                                fontSize={"md"}
                                textAlign="left"
                                whiteSpace="normal"
                                variant="link"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))
            }
        </List>
    );
}
 
export default GenreList;