export const filterTime = (time) => {
    var date = new Date(time)
    var year = date.getFullYear()
    var month = (date.getMonth() + 1 + "").padStart(2, '0')
    var day = (date.getDate() + "").padStart(2, '0')
    var hours =(date.getHours()+"").padStart(2,"0")
    var second=(date.getSeconds()+"").padStart(2,"0")
    return `${month}-${day}   ${hours}:${second}`
}