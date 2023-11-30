let userlist = []
for(let a=0; a<5; a++){
    let username = prompt("create a username")

    if (username!="admin"  && username!="Admin"  && username!="ADMIN" ){
        if (userlist.includes(username))
        {
            alert("User name not available")
        }
        else
        {
            if (username.length>=5 && username.length<=20){
                userlist.push(username)
                alert("Username created")
            }
            else{
                alert("Invalid user name length error")
            }
        }
    }
    else{
        alert("Invalid username admin")
    }
}    
console.log(userlist)
