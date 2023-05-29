import { useState, useEffect } from 'react';
import { Game } from '../types/GameTypes';
import GameServices from '../services/game-services';

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState<String>("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        GameServices.getGamesData()
        .then(res => {
            setGames(res.data.results)
            setIsLoading(false)
        })
        .catch(error => setError(error.message))
    }, [])

    return {games, error, isLoading}
}
 
export default useGames;