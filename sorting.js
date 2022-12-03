const ascending = () =>{
    arr.sort((a,b)=>{
        if(a.name < b.name){
            return -1
        }
        return 0
    })
    displayTableData(arr)
    document.querySelector('.fa-arrow-up-a-z').style.display = "none"
    document.querySelector('.fa-arrow-up-z-a').style.display = "inline-block"
}

const descending=()=>{
    arr.sort((a,b)=>{
        if(a.name > b.name){
            return -1
        }
        return 0
    })
    displayTableData(arr)
    document.querySelector('.fa-arrow-up-a-z').style.display = "inline-block"
    document.querySelector('.fa-arrow-up-z-a').style.display = "none"
}