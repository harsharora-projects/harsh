auth= function(){
                var xhttp = new XMLHttpRequest();
                data={name:document.getElementById("username").value,password:document.getElementById("password").value}
                xhttp.onreadystatechange = function() {
                    if (xhttp.readyState==4 && xhttp.status==200) {
                        var response = JSON.parse(xhttp.responseText);
                        document.getElementById("token-display").innerHTML = response.token;
                    }
                    if(xhttp.readyState==4 && xhttp.status==403){
                      document.getElementById("token-display").innerHTML=JSON.parse(xhttp.responseText).message;
                    }
                };
                xhttp.open("POST", "http://localhost:3000/login", true);
                xhttp.setRequestHeader("Content-type", 'application/json; charset=UTF-8');
                xhttp.send(JSON.stringify(data));
            }
            getlist= function(){
                var xhttp = new XMLHttpRequest();
               data={token:document.getElementById("token").value}
                xhttp.onreadystatechange = function() {
                    if (xhttp.readyState==4 && xhttp.status==200) {
                        var response = JSON.parse(xhttp.responseText);
                        var ul=document.createElement("ul");
                        for(var i=0;i<response.users.length;i++){
                            var li=document.createElement("li");
                            li.appendChild(document.createTextNode(response.users[i].name));
                            ul.appendChild(li);
                        }
                        document.getElementById("list").appendChild(ul);
                    }
                    if(xhttp.readyState==4 && xhttp.status==403){
                      document.getElementById("list").innerHTML=JSON.parse(xhttp.responseText).message;
                    }
                };
                xhttp.open("POST", "http://localhost:3000/getusers", true);
                xhttp.setRequestHeader("Content-type", 'application/json; charset=UTF-8');
                xhttp.send(JSON.stringify(data));
            }