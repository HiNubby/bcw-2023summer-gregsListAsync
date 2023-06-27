import { AppState } from "../AppState.js"

export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description ? data.description : ''
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
    }


    get HTMLTemplate() {
        return `
        <div class="col-10 m-auto mb-3">
            <section class="row bg-light elevation-5">
                <div class="col-12 col-md-4 p-0">
                    <img class="img-fluid listing-img"
                    src="${this.imgUrl}"
                    alt="${this.description}">
                </div>
                <div id=${this.id} class="col-12 col-md-8 p-3">
                    <h2>${this.year}</h2>
                    <h2>$${this.price}</h2>
                    <h3>${this.bedrooms} Bedroom ${this.bathrooms} Bathrooms</h2>
                    <p>${this.description}</p>
                    <h5>${this.createdAt.toLocaleString()}</h5>
                    <div class='d-flex align-items-center'>
                        <img src='${this.creator.picture}' class='creator-picture' alt='${this.creator.name}'>
                        <p class='mx-3 my-0 fs-2'>${this.creator.name}</p>
                        ${this.ComputedDeleteButton}
                        ${this.ComputedEditButton}
                    </div>
                </div>
            </section>
        </div>
        `
    }

    get ComputedEditForm() {
        return `
        <div class="col-12 col-md-8 p-3">
            <form class='w-100'>
                <label for="houseYear" class="form-label d-inline">Year Built</label>
                <input required type="number" class="form-control" id="houseYear" min='1800' max='2030' name='year' value='${this.year}'>
                <label for="housePrice" class="form-label d-inline">Asking Price</label>
                <input required type="number" class="form-control" id="housePrice" min='1' max='1000000000' name='price' value='${this.price}'>
                <div class='d-flex'>
                    <label for="houseBedroom" class="form-label d-inline">Bedroom Count</label>
                    <input required type="number" class="form-control" id="houseBedroom" min='0' max='40' name='bedrooms' value='${this.bedrooms}'>
                    <label for="houseBathroom" class="form-label d-inline">Bathroom Count</label>
                    <input required type="number" class="form-control" id="houseBathroom" min='0' max='40' name='bathrooms' value='${this.bathrooms}'>
                </div>
            </form>
        </div>
        `
    }

    get ComputedDeleteButton() {
        if (!AppState.account || AppState.account.id != this.creatorId)
            return ''
        return `<button onclick="app.HousesController.deleteHouse('${this.id}')" class="btn btn-danger mt-2">Delete Listing</button>`
    }

    get ComputedEditButton() {
        if (!AppState.account || AppState.account.id != this.creatorId)
            return ''
        return `<button onclick="app.HousesController.drawEditForm('${this.id}')" class="btn btn-info mt-2 ms-3">Edit Listing</button>`
    }
}

// <button onclick="app.HousesController.deleteHouse('${this.id}')" class="btn btn-danger mt-2">Delete Listing</button>
// const test = `
// {
// 	"0": {
// 		"_id": "645d60f381faf24223ae886b",
// 		"bedrooms": 3,
// 		"bathrooms": 2,
// 		"levels": 2,
// 		"imgUrl": "https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg",
// 		"year": 2003,
// 		"price": 230000,
// 		"description": "Super sick house",
// 		"creatorId": "63f7d6202d1cf882287f12e2",
// 		"createdAt": "2023-05-11T21:41:07.979Z",
// 		"updatedAt": "2023-05-11T21:41:07.979Z",
// 		"__v": 0,
// 		"creator": {
// 			"_id": "63f7d6202d1cf882287f12e2",
// 			"name": "Charles Francis Xavier",
// 			"picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
// 			"id": "63f7d6202d1cf882287f12e2"
// 		},
// 		"id": "645d60f381faf24223ae886b"
// 	}
// }
//`