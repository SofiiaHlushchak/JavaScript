 var login;
 var password;
login = "Sonia";
 password = "The Master";
window.console.log("Who's there?")
        
        if(login == "Admin"){
            console.log(password)
            if(password == "The Master"){
               console.log("Welcome")
               }else if (password != "The Master"){
                   console.log("Other")
               }else{
                   console.log("Cancel")
               }
           } else if (login != "Admin"){
               console.log("I don't know")
           } else{
               console.log("Cancel")
           }