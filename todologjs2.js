 
  
  
  
  
//   function validlogin()

//   {
//       var ln=document.getElementById ("username").value;
//       var lp=document.getElementById ("password").value;
//       var storename="admin";
//       var storepass=12345;

//       if ( (ln==storename) && (lp==storepass))
//       { alert("login successful");
//       return true;
    
//       }

//       else
//       { alert (" invalid username or password");
//          return false;

//       }
      
//     }



    $(function()
    {


        $("#submission").click(function()
        
                        {   


                            function validate(userid,password,func) 
                            {
                                let id = userid;
                                let pwd = password;
                                console.log(id, pwd);
                                
                                if (userid === "admin" && password === 12345) 
                                {
                                    func();
                                }
                               
                            }

                                      function redirect()
                                    {
                                        $("#loginform").submit();
                                    }



                             validate($("#username").val(),$("#password").val(),redirect);         

                        }  ); 



    });






        

      