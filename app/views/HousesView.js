export const HousesView = `
<div class='container-fluid'>
    <section class="row">
        <div class="col-12 p-4 d-flex">
            <h1>Houses</h1>
            <button class="btn btn-primary ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#houseCollapse" aria-expanded="false" aria-controls="collapseExample">
                Create House Listing
            </button>
        </div>
    </section>
    <section class="row mb-4">
        <div class="col-10 m-auto">
            <div div class="collapse" id="houseCollapse">
                <form onsubmit='app.HousesController.createHouse(event)' class='w-100'>
                    <div class="mb-3 d-flex align-items-center">
                        <div class='flex-fill'>
                            <label for="houseLevels" class="form-label d-inline">Stories</label>
                            <input required type="number" class="form-control" id="houseLevels" min='1' max='50' name='levels'>
                        </div>
                        <div class='flex-fill'>
                            <label for="houseYear" class="form-label d-inline">Year Built</label>
                            <input required type="number" class="form-control" id="houseYear" min='1800' max='2030' name='year'>
                        </div>
                        <div class='flex-fill'>
                            <label for="houseBedroom" class="form-label d-inline">Bedroom Count</label>
                            <input required type="number" class="form-control" id="houseBedroom" min='0' max='40' name='bedrooms'>
                        </div>
                        <div class='flex-fill'>
                            <label for="houseBathroom" class="form-label d-inline">Bathroom Count</label>
                            <input required type="number" class="form-control" id="houseBathroom" min='0' max='40' name='bathrooms'>
                        </div>
                    </div>
                    <div class="mb-3 d-flex align-items-center">
                        <div>
                            <label for="housePrice" class="form-label d-inline">Asking Price</label>
                            <input required type="number" class="form-control" id="housePrice" min='1' max='1000000000' name='price'>
                        </div>
                        <div class='flex-fill'>
                            <label for="houseImgUrl" class="form-label d-inline">House Picture URL</label>
                            <input required type="url" class="form-control" id="houseSquareFeet" minlength='10' maxlength='300' name='imgUrl'>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="houseDescription" class="form-label">Listing Description</label>
                        <textarea class="form-control" id="houseDescription" rows="2" name='description'></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </section>
    <section id='houseListings' class='row'>

    </section>
</div>
`