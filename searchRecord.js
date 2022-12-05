const searchRecord = () =>{
    let searchValue = document.querySelector('table:last-child thead th input:first-child').value
    if( searchValue !== "" ){
        let res = arr.filter(e=>{
            if( e.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 )
            return e
        })
        displayTableData(res)
        document.querySelector('table:last-child thead th button:last-child').style.display = "inline-block"
    }
}
const clearSearchData = ()=>{
    document.querySelector('table:last-child thead th input:first-child').value = ""
    document.querySelector('table:last-child thead th button:last-child').style.display = "none"
    displayTableData()
}