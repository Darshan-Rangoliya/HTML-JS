const affectState = (val) => {
    // let state = document.getElementById('state')
    let state = document.querySelector('.form-table tr:nth-last-child(3) td select:last-child')
    if (val !== "") {
        state.innerHTML = ""
        state.innerHTML = `<option value="">Select State</option>`
        for (i in add[val]) {
            state.innerHTML += `<option value="${i}">${i}</option>`
        }
        affectCity(state.value)
    } else {
        state.innerHTML = `<option value="">Select State</option>`
        affectCity("")
    }
}

const affectCity = (state) => {
    // let city = document.getElementById('city')
    let city  = document.querySelector('.form-table tr:nth-last-child(2) td select:last-child')
    if (state !== "") {
        let country =  document.querySelector('.form-table tr:nth-child(6) td:last-child select').value
        city.innerHTML = ""
        city.innerHTML = `<option value="">Select City</option>`
        add[country][state].forEach(element => {
            city.innerHTML += `<option value="${element}">${element}</option>`
        });
    } else {
        city.innerHTML = `<option value="" >Select City</option>`
    }
}