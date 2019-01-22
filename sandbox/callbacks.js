let getUser = (id, callback) => {
    let user = {
        id, 
        name: "Vikram"
    }
    setTimeout(()=>{
        callback(user)
    }, 3000)
}

getUser(3, (user) => {
    console.log(user)
})