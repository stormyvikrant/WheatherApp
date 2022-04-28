let key ="af904b2e32d451efd1898c45f334a78d";

let iframe=document.getElementById("googlemap");

    async function getWeatherData(){
       try{
        let cityname=document.getElementById("cityinput").value;
        let res=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&cnt=${7}&appid=${key}`)
        let data= await res.json()
        // console.log(data)
        appenddata(data)

       } catch(err){
           console.log("error")
       }
    }
     getWeatherData()



    
    function appenddata(data){
        //adding city and clearing afternext city
        document.querySelector("#container").innerHTML="";
        document.querySelector("#days").innerHTML="";
       

        let city = document.createElement("p");
         city.innerText=`City:${data.city.name}`;
    
        
        let humidity = document.createElement("p");
            humidity.innerText=`Humidity:${data.list[0].main.humidity}`;
            
   
           let temp_max=document.createElement("p");
           temp_max.innerText=`Temp_max:${data.list[0].main.temp_max}`
   
           let temp_min=document.createElement("p");
           temp_min.innerText=`Temp_max:${data.list[0].main.temp_min}`
   
            let pressure =document.createElement("p");
            pressure.innerText=`Pressure:${data.list[0].main.pressure}`;


            document.querySelector("#container").append(city,temp_max,temp_min,pressure,humidity);

        //  showingselecting data  from the list in dom
            data.list.forEach(function (ele){
    

             let datadiv =document.createElement("div")
             datadiv.setAttribute("id","insider")
             
            let temp = document.createElement("p");
            temp.innerText=`Tempture:${ele.main.temp}°`;
                let icondiv=document.createElement("div")
            let img=document.createElement("img")
            img.src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            let img1=document.createElement("img")
           img1.src="https://ssl.gstatic.com/onebox/weather/64/fog.png"
           let img2=document.createElement("img")
           img2.src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"

            let main = document.createElement("P")
            main.innerText=`main:${ele.weather[0].main}` 

            let description = document.createElement("P")
            description.innerText=` description:${ele.weather[0]. description}`
           
     
            
           let speed=document.createElement("p");
           speed.innerText=`speed:${ele.wind.speed}`

     
  
         datadiv.append(temp,img,img1,img2,main,description,speed,)
     days.append(datadiv)
            
            })
// google map  call

            iframe.src=`https://maps.google.com/maps?q=${data.city.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    
    }

    