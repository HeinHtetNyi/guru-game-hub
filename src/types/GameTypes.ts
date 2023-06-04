import { Genre } from "./GenreTypes"
import { Platform } from "./PlatformTypes"

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: {platform: Platform}[]
    metacritic: number
}

export interface GameQueryParams {
    genre: Genre | null,
    platform: Platform | null
}