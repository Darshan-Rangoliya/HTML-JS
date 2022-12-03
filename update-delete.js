const updateRecord = (index) => {
    document.querySelector('form').reset()
    // insering the values into respective fields
    document.querySelector('.form-table tr:first-child td:last-child input').value = arr[index].name
    document.querySelector('.form-table tr:nth-child(2) td:last-child input').value = arr[index].email
    if (arr[index].gender == "Male")
        document.querySelector('.form-table tr:nth-child(3) td:last-child input:nth-child(2)').checked = true
    else
    document.querySelector('.form-table tr:nth-child(3) td:last-child input:nth-last-child(2)').checked = true
    arr[index].hobbies.forEach(e => {
        if(e == 'Reading')
        document.querySelector('.form-table tr:nth-child(4) td:last-child input:nth-child(2)').checked = true
        else if(e == 'Travelling')
        document.querySelector('.form-table tr:nth-child(4) td:last-child input:nth-child(4)').checked = true
        else
        document.querySelector('.form-table tr:nth-child(4) td:last-child input:nth-child(6)').checked = true
    })
    document.querySelector('.form-table tr:nth-child(5) td:last-child input:last-child').value = arr[index].age
    document.querySelector('.form-table tr:nth-child(6) td:last-child select:last-child').value = arr[index].country
    affectState(arr[index].country)
    document.querySelector('.form-table tr:nth-child(7) td:last-child select:last-child').value = arr[index].state
    affectCity(arr[index].state)
    document.querySelector('.form-table tr:nth-child(8) td:last-child select:last-child').value= arr[index].city

    // creation of cancle and update button
    let btn_area = document.querySelector('.form-table tr:last-child td:last-child')
    btn_area.innerHTML = ""
    let edit_btn = document.createElement('button')
    edit_btn.value = 'Update'
    edit_btn.innerHTML = "Update"
    edit_btn.addEventListener('click', updateData)
    // edit_btn.addEventListener('click', validateData)
    let cancel_btn = document.createElement('button')
    cancel_btn.addEventListener('click', clearData)
    cancel_btn.innerText = "Cancle"
    btn_area.appendChild(edit_btn)
    btn_area.appendChild(cancel_btn)
    function updateData() {
        validateData()
        let name = document.querySelector('.form-table tr:first-child td:last-child input').value
        let email = document.querySelector('.form-table tr:nth-child(2) td:last-child input').value
        let gender = document.querySelector('input[name="gender"]:checked').value
        let age = document.querySelector('.form-table tr:nth-child(5) td:last-child input:last-child').value
        let country = document.querySelector('.form-table tr:nth-child(6) td:last-child select:last-child').value
        let state = document.querySelector('.form-table tr:nth-child(7) td:last-child select:last-child').value
        let city = document.querySelector('.form-table tr:nth-child(8) td:last-child select:last-child').value
        let hobby_array = []
        let hobbies = document.querySelectorAll('input[name="hobby"]')
        hobbies.forEach(e => {
            if (e.checked)
                hobby_array.push(e.value)
        })
        if (name && email && gender && hobby_array.length !== 0 && age && country && state && city) {
            arr[index].name = name
            arr[index].email = email
            arr[index].gender = gender
            arr[index].hobbies = hobby_array
            arr[index].age = age
            arr[index].country = country
            arr[index].state = state
            arr[index].city = city
            displayTableData("")
            clearData()
            event.preventDefault()
        }
    }
    function clearData() {
        // to clear the form
        document.querySelector('form').reset()
        btn_area.innerHTML = ""
        let submit_btn = document.createElement('button')
        submit_btn.addEventListener('click', validateData)
        submit_btn.addEventListener('click', dataInsert)
        submit_btn.innerHTML = "Submit"
        submit_btn.value = "submit"
        btn_area.appendChild(submit_btn)
        event.preventDefault()
    }
}

const deleteRecord = (index) => {
    arr.splice(index, 1)
    document.querySelector('form').reset()
    displayTableData("")
}