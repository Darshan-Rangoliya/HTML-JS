const validateData = () => {
    // debugger
    var parentNode, errrNode;
    let name = document.querySelector('.form-table tr:first-child td:last-child input')
    let email = document.querySelector('.form-table tr:nth-child(2) td:last-child input')
    let gen_male = document.querySelector('.form-table tr:nth-child(3) td:last-child input:nth-child(2)')
    let gen_female = document.querySelector('.form-table tr:nth-child(3) td:last-child input:nth-last-child(2)')
    let hobbies = document.querySelectorAll('input[name="hobby"]')
    let age = document.querySelector('.form-table tr:nth-child(5) td:last-child input:last-child')
    let country = document.querySelector('.form-table tr:nth-child(6) td:last-child select:last-child')
    let state = document.querySelector('.form-table tr:nth-child(7) td:last-child select:last-child')
    let city = document.querySelector('.form-table tr:nth-child(8) td:last-child select:last-child')


    function addValidationMessage(errorName, errorTag) {
        errorTag.parentNode.firstElementChild.innerHTML = `Please enter ${errorName}`

    }
    function removeValidationMessage(errorTag) {
        errorTag.parentNode.firstElementChild.innerHTML = ""
    }
    if (name.value == "") {
        addValidationMessage('name', name)
    } else {
        removeValidationMessage(name)
    }
    if (email.value == "") {
        addValidationMessage('email', email)
    } else {
        removeValidationMessage(email)
    }
    if (gen_male.checked == false && gen_female.checked == false) {
        // console.log(gen_male.parentNode.firstElementChild);
        addValidationMessage('gender', gen_male)
    } else {
        removeValidationMessage(gen_male)
    }
    let hobby_arr = []
    hobbies.forEach(e => {
        if (e.checked)
            hobby_arr.push(e.value)
    })
    let hobby_error_tag = document.querySelector('.form-table tr:nth-child(4) td:last-child p:first-child')
    if (hobby_arr.length == 0) {
        addValidationMessage('hobby', hobby_error_tag)
    } else {
        removeValidationMessage(hobby_error_tag)
    }
    if (age.value == "") {
        addValidationMessage('age', age)
    } else {
        removeValidationMessage(age)
    }
    if (country.value == "") {
        addValidationMessage('country', country)
    } else {
        removeValidationMessage(country)
    }
    if (state.value == "") {
        addValidationMessage('state', state)
    } else {
        removeValidationMessage(state)
    }
    if (city.value == "") {
        addValidationMessage('city', city)
    } else {
        removeValidationMessage(city)
    }
    event.preventDefault()
}