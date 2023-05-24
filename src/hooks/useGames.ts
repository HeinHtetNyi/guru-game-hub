import { useState, useEffect } from 'react';
import { Game } from '../types/GameTypes';
import GameServices from '../services/game-services';

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState<String>("")

    useEffect(() => {
        GameServices.getGamesData()
        .then(res => setGames(res.data.results))
        .catch(error => setError(error.message))
    }, [])

    return {games, error}
}
 
export default useGames;