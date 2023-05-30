import { useState, useEffect } from 'react';
import { Game } from '../types/GameTypes';
import GameServices from '../services/game-services';
import { Genre } from '../types/GenreTypes';

const useGames = (
    selectedGenre: Genre | null,
    deps?: any[]
) => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState<String>("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        GameServices.getGamesData(selectedGenre)
        .then(res => {
            setGames(res.data.results)
            setIsLoading(false)
        })
        .catch(error => setError(error.message))
    }, deps ? deps : [])

    return {games, error, isLoading}
}
 
export default useGames;