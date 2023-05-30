import { Genre } from "../types/GenreTypes";
import apiClient from "./api-client";

export default class GameServices {
    public static getGamesData(selectedGenre: Genre | null) {
        return apiClient.get("/games", 
            {params: {
                genres: selectedGenre?.id
            }}
        )
    }
}