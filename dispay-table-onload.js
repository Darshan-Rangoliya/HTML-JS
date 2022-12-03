let arr = [{
    name: 'Darshan',
    email: 'd@gmail.com',
    gender: 'Male',
    hobbies: ['Sports', 'Reading'],
    age: 21,
    country: 'India',
    state: 'Gujarat',
    city: 'Surat',
    time:new Date()
}, {
    name: 'Ajay',
    email: 'a@gmail.com',
    gender: 'Female',
    hobbies: ['Sports','Travelling'],
    age: 21,
    country: 'India',
    state: 'Gujarat',
    city: 'Ahmedabad',
    time:new Date()
}]

const formatDate=(date)=>{
    let hour = date.getHours(),creation_date = date.getDate() , creation_month = date.getMonth() , creation_year = date.getYear() , sec = date.getSeconds(),minutes = date.getMinutes()
    return `${creation_year}-${creation_month}-${creation_date} | ${hour}:${minutes}:${sec}`
}

const displayTableData = (search) => {
    // let td = document.getElementById('tbody');
    let td = document.querySelector('.display-div table tbody')
    td.innerHTML = "";
    let newData = "";
    if(!search){
        let l = arr.length
        for (let i = 0; i < l; i++) {
            newData += `<tr><td>${arr[i].name}</td><td>${arr[i].email}</td><td>${arr[i].gender}</td><td>${arr[i].hobbies}</td><td>${arr[i].age}</td><td>${arr[i].country}</td><td>${arr[i].state}</td><td>${arr[i].city}</td><td>${ formatDate(arr[i].time) }</td>
                <td><a onclick="return deleteRecord(${i})" title="Delete"><i class="fa-solid fa-trash"></i></a> <a onclick="return updateRecord(${i})" title="Edit"><i class="fa-solid fa-pen-to-square"></i></a> </td></tr>`
        }
        td.innerHTML += newData;
    }else{
        if(search.length == 0){
            td.innerText = "No Record Found!"
        }else{
        let l = search.length
            for (let i = 0; i < l; i++) {
                newData += `<tr><td>${search[i].name}</td><td>${search[i].email}</td><td>${search[i].gender}</td><td>${search[i].hobbies}</td><td>${search[i].age}</td><td>${search[i].country}</td><td>${search[i].state}</td><td>${search[i].city}</td><td>${ formatDate(search[i].time) }</td>
                    <td><a onclick="return deleteRecord(${i})" title="Delete"><i class="fa-solid fa-trash"></i></a> <a onclick="return updateRecord(${i})" title="Edit"><i class="fa-solid fa-pen-to-square"></i></a> </td></tr>`
            }
            td.innerHTML += newData;
        }
    }

    // let country = document.getElementById('country')
    let country = document.querySelector('.form-table tr:nth-child(6) td:last-child select:last-child')
    country.innerHTML = ""
    country.innerHTML = "<option value=''>Select country</option>"
    for (i in add) {
        country.innerHTML += `<option value="${i}">${i}</option>`
    }

    // for(let i of arr){
    //     let tbl = document.getElementById('detail-table')
    //     let tr = tbl.insertRow()
    //     let td = tr.insertCell()
    //     td.appendChild(document.createTextNode(i.name))
    //     td = tr.insertCell()
    //     td.appendChild(document.createTextNode(i.email))
    //     td = tr.insertCell()
    //     td.appendChild(document.createTextNode(i.gender))
    //     td = tr.insertCell()
    //     td.appendChild(document.createTextNode(i.hobbies))
    //     td = tr.insertCell()
    //     td.appendChild(document.createTextNode(i.age))
    //     td = tr.insertCell()
    //     td.appendChild(document.createTextNode(i.state))
    //     td = tr.insertCell()
    //     td.appendChild(document.createTextNode(i.city))
    // }
}   