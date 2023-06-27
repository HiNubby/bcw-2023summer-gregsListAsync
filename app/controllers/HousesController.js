import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

const _drawHouses = () => {
    let template = ''
    AppState.houses.forEach(house => template += house.HTMLTemplate)
    setHTML('houseListings', template)
}

const _serviceDeleteHouse = (houseId) => {
    housesService.deleteHouse(houseId)
        .catch(error => {
            Pop.error(error.message)
            console.error(error)
        })
}

export class HousesController {
    constructor() {
        console.log('house controller loaded');
        this.getHouses()

        AppState.on('houses', _drawHouses)
        AppState.on('account', _drawHouses)
    }

    getHouses() {
        housesService.getHouses()
            .catch(error => {
                Pop.error(error.message)
                console.error(error)
            })
    }

    createHouse(event) {
        event.preventDefault()
        const form = event.target
        const formData = getFormData(form)
        form.reset()
        housesService.createHouse(formData)
            .catch(error => {
                Pop.error(error.message)
                console.error(error)
            })
    }

    deleteHouse(houseId) {
        Pop.confirm('Are you sure you want to delete?')
            .then(() => _serviceDeleteHouse(houseId))
    }

    drawEditForm(houseId) {
        console.log('house Id passed', houseId)
        let foundHouse = AppState.houses.find(house => house.id == houseId)
        console.log(foundHouse, foundHouse.ComputedEditForm)
        setHTML(`${houseId}`, foundHouse.ComputedEditForm)
    }
}