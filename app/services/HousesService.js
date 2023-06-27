import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"

class HousesService {
    getHouses() {
        return api.get('api/houses')
            .then(res => AppState.houses = res.data.map(houseData => new House(houseData)))
    }

    createHouse(houseData) {
        return api.post('api/houses', houseData)
            .then(res => AppState.houses = [...AppState.houses, new House(res.data)])
    }

    deleteHouse(houseId) {
        return api.delete(`api/houses/${houseId}`)
            .then(() => AppState.houses = AppState.houses.filter(house => house.id != houseId))
    }
}

export const housesService = new HousesService()