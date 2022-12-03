const dataInsert = () =>{
    event.preventDefault()
    let name = document.querySelector('.form-table tr:first-child td:last-child input').value
    let email = document.querySelector('.form-table tr:nth-child(2) td:last-child input').value
    let gender = document.querySelector('input[name="gender"]:checked')
    let hobby = document.querySelectorAll('input[name="hobby"]')
    let hobby_array = []
    for(let i = 0;i < hobby.length ; i++){
        if( hobby[i].checked ){
            hobby_array.push(hobby[i].value)
        }
    }
    console.log(gender);
    let age = document.querySelector('.form-table tr:nth-child(5) td:last-child input:last-child').value
    let country = document.querySelector('.form-table tr:nth-child(6) td:last-child select:last-child').value
    let state = document.querySelector('.form-table tr:nth-child(7) td:last-child select:last-child').value
    let city = document.querySelector('.form-table tr:nth-child(8) td:last-child select:last-child').value
    if( name && email && gender && hobby_array.length !==0 && age && country && state && city ){
        arr.push({name:name,email:email,gender:gender.value,hobbies:hobby_array,age:age,country:country,state:state,city:city,time:new Date()})
        displayTableData("")
        document.querySelector('form').reset()
        event.preventDefault()
    }
    
}   