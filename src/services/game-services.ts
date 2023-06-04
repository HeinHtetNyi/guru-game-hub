import { Genre } from "../types/GenreTypes";
import { Platform } from "../types/PlatformTypes";
import apiClient from "./api-client";

export default class GameServices {
    public static getGamesData(selectedGenre: Genre | null, selectedPlatform: Platform | null) {
        return apiClient.get("/games", 
            {params: {
                genres: selectedGenre?.id,
                platforms: selectedPlatform?.id,
            }}
        )
    }
}