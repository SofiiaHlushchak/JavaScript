var login;
        var password;
        login = "Sonia";
        password = "The Master";
        console.log("Who's there?")
        
        switch(login){
                case"Admin":{
                   if(password == "The Master"){
               console.log("Welcome")
               }else if (password != "The Master"){
                   console.log("Other");
               }else{
                   console.log("Cancel");
               } 
                    break;
                }  case"Cancel":{
                    console.log("Canceles");
                    break;
                } 
            default:{console.log("I don't know");
                    break;
                    }
        }