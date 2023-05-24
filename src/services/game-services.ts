import apiClient from "./api-client";

export default class GameServices {
    public static getGamesData() {
        return apiClient.get("/games")
    }
}