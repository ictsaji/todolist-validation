 
  
  
  
  
  function validlogin()

  {
      var ln=document.getElementById ("username").value;
      var lp=document.getElementById ("password").value;
      var storename="admin";
      var storepass=12345;

      if ( (ln==storename) && (lp==storepass))
      { alert("login successful");
      return true;
    
      }

      else
      { alert (" invalid username or password");
         return false;

      }
      
    }
        

      