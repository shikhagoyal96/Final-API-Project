
        var lat = "";//variable to store latitude value retrieved from the first api
        var lon = "";//variable to store longitude value retrieved from the first api
        
        function loadDoc() {
            var city = document.getElementById("cityname").value;;
            console.log(city);
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {

                if (this.readyState == 4 && this.status == 200) 
                {
                    myFunction(this);
                }
                //else     myFunction(this);
                //     alert("error");
            };
            //FIRST API TO GET THE WEATHER DESCRIPTION OF THE CITY ENTERED
            xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=YOUR_API_KEY", true);
            xhttp.send();
        }
        function myFunction(json) {
 
          var jsonDoc = json.responseText;
          var myObj = JSON.parse(jsonDoc);
          
          lat = myObj.coord["lat"];//storing the latitude value
          lon = myObj.coord["lon"];//storing the longitude value
          console.log(lat);
          
            //RETRIEVEING THE VALUE FROM THE JSON FILE OF THE FIRST API
                document.getElementById("demo").innerHTML =  "<h6>"+ "Max-Temp(&#8457;):"+ "</h6>"+ myObj.main["temp_max"] 
                                               + "<h6>"+ "Min-Temp(&#8457;):" + "</h6>"+ myObj.main["temp_min"] 
                                               + "<h6>"+ "Weather Description :" + "</h6>"+ myObj.weather[0]["description"];
            
        }

        $(document).ready(function(){
        //var city = "Toronto";    
        //var city = "";
        
            //SECOND API TO GET THE CURRENT TIME-ZONE OF THE CITY ENTERED BY USING THE LATITUDE AND LONGITUDE VALUES RETRIEVED FROM THE FIRST API
            $("#zonebt").click(function(){
                //adding the values of "lat" and "lon" variables to the api to make it customised based on user inout
                var a = "http://api.timezonedb.com/v2.1/get-time-zone?key=YOUR_API_KEY&format=json&by=position&lat="+lat+"&lng="+lon;
               
                console.log(lat);
                $.getJSON("http://api.timezonedb.com/v2.1/get-time-zone?key=YOUR_API_KEY=json&by=position&lat="+lat+"&lng="+lon, function(json)
                {
                    console.log(json);
                    //GETTING THE TIMESTAMP VALUE FROM THE API JSON FILE
                    var time=json.timestamp;
                    console.log(time);
                    //CONVERTING TIMESTAMP INTO TO THE CURRENT TIME-ZONE
                    var newtime = new Date(time*1000).toUTCString();
                    console.log(newtime);
                    //DISPLAYING THE NEWTIME IN THE DIV
                     $("#timezone").html(newtime);
                });
            });
        });
          
