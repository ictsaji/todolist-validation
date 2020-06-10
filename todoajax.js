 
 
  $(document).ready
  (
      
            function()
        
        {
        
            
            $(".btn").click(function()
                {

                        var sample_data = '';
                        $.getJSON("https://jsonplaceholder.typicode.com/todos", function (data) 
                        {
                                sampledata = data;
                                $.each(data, function (key, value) 
                                        {
                                            console.log(sampledata);
                                        }

                                    );

                            
                            var ul = document.getElementById("todoList");

                            for (var i = 0; i < sampledata.length; i++) {
                                var li = document.createElement('li');
                                var checkbox = document.createElement("input");
                                checkbox.type = "checkbox";
                                li.appendChild(checkbox);
                                li.appendChild(document.createTextNode(sampledata[i].title));
                                ul.appendChild(li);
                        };


                });


            })






            

            $(document).on('change', '[type=checkbox]', function()
                            {

                                let count=$('input[type=checkbox]:checked').length;

                                var promise2 = new Promise(function (resolve, reject)
                                 {
                                    
                                    if (count == 5) 
                                    {
                                        resolve("Congrats! 5 Tasks have been successfully completed!");
                                    }

                                 });
                                 promise2
                                    .then(function (r) {
                                        alert(r);
                                        count = 0;
                                                        });

                            });




        }
  
  );


















  