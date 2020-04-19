var lat = "";
        var lon = "";
        var city=document.getElementById("cityname");
        $(document).ready(function(){
        //var city = "";
        
            $("#zonebt").click(function(){
            var a = "http://api.timezonedb.com/v2.1/get-time-zone?key=&format=json&by=position&lat="+lat+"&lng="+lon;
           
                 console.log(lat);
                $.getJSON("http://api.timezonedb.com/v2.1/get-time-zone?key=&format=json&by=position&lat="+lat+"&lng="+lon, function(json)
                {
                
                    console.log(json);
                    var time=json.timestamp;
                    console.log(time);
                    var newtime = new Date(time*1000).toUTCString();
                    console.log(newtime);
                    

                    $("#timezone").html(newtime);
                });
            });
       
                    
            });
          
        
            function loadDoc() {

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) 
    {
      myFunction(this);
    }
      //else     myFunction(this);
        //     alert("error");
  };
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=", true);
  xhttp.send();
}
function myFunction(json) {
 
  var jsonDoc = json.responseText;
  var myObj = JSON.parse(jsonDoc);
  lat = myObj.coord["lat"];
  lon = myObj.coord["lon"];
  console.log(lat);

  
  document.getElementById("maxtemp").innerHTML = myObj.main["temp_max"]; 
  document.getElementById("mintemp").innerHTML = myObj.main["temp_min"]; 
  document.getElementById("description").innerHTML = myObj.weather[0]["description"]; 
                                              
}
