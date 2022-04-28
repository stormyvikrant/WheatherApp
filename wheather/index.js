
let key = "874b657a7294ecfd6ebbb1c288b087d5";
// let key = '33b5eee1153d43cf50d548c7e0140c7a'
// let key = "e4c70ce6a6821649a416cb9521d5f4f8";

let iframe=document.getElementById("gmap_canvas");



async function getWeatherData(){
   

    let city =document.getElementById("city").value; //accepting data
    try{
        let res =await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${7}&appid=${key}&units=metric`)
        
        // let res =await fetch(`http://api.openweathermap.org/data/2.5/find?lat=57&q=${city}&appid=874b657a7294ecfd6ebbb1c288b087d5&units=metric`) 

        //for data is coming form above API

        let data = await res.json();
        // console.log("data:",data.list)
        // console.log(data)
        showWeather(data)

        // i get the data append/show

    }
     catch(err){
         console.log("err:",err)
     }

    }
    getWeatherData()

     //show the data we invoke the function 

     function showWeather(d){
        // document.getElementById("contanier").textContent=''
        document.querySelector("#container").innerHTML="";
      
            document.getElementById("days").innerHTML=""

         console.log("d:",d)
         let city = document.createElement("p");
        //  city.setAttribute("id",'city')
         city.innerText=`City:${d.city.name}`;
    
        
        let humidity = document.createElement("p");
            humidity.innerText=`Humidity:${d.list[0].main.humidity}`;
            
   
           let temp_max=document.createElement("p");
           temp_max.innerText=`Temp_max:${d.list[0].main.temp_max}`
   
           let temp_min=document.createElement("p");
           temp_min.innerText=`Temp_max:${d.list[0].main.temp_min}`
   
            let pressure =document.createElement("p");
            pressure.innerText=`Pressure:${d.list[0].main.pressure}`;

            document.querySelector("#container").append(city,temp_max,temp_min,pressure,humidity);

           

         d.list.forEach(function (ele){
            // document.querySelector("#days").innerHTML=null
        
             let child =document.createElement("div")
             child.setAttribute("id","child")
             
        
            
            let temp = document.createElement("p");
            temp.innerText=`Tempture:${ele.main.temp}°`;
        

            let main = document.createElement("P")
            main.innerText=`main:${ele.weather[0].main}` 

            let description = document.createElement("P")
            description.innerText=` description:${ele.weather[0]. description}`
           
        //   id: 801, main: 'Clouds', description: 'few clouds', icon: '02 
            
           let speed=document.createElement("p");
           speed.innerText=`speed:${ele.wind.speed}`



           var icon1=document.createElement("img");
           photos.forEach((ele,index)=>{

            let child1 =document.createElement("div")
            child.setAttribute("id","child")
          
            
            icon1.src=ele.icon;
    
            child1.append(icon1)
    
        
            child.append(icon1)
        })
        let icon2=document.createElement("img");
        icon2.src="https://img.icons8.com/external-others-aquariid/64/000000/external-climate-weather-others-aquariid-16.png";
         

        let icon3 = document.createElement("img");
        icon3.src="https://img.icons8.com/external-filled-outline-icons-pause-08/64/000000/external-cloud-autumn-filled-outline-icons-pause-08.png";
      
 
         child.append(temp,icon2,icon3,icon1,main,description,speed,)
    

           
            // child.append(temp,main,icon,speed,icon1)

            document.getElementById("days").append(child)



            iframe.src=`https://maps.google.com/maps?q=${d.city.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
            
         })
                   
       
     }

     

     
var photos = [
    {icon:"https://img.icons8.com/external-filled-outline-icons-pause-08/64/000000/external-cloud-autumn-filled-outline-icons-pause-08.png"},
    {icon:"https://img.icons8.com/external-others-aquariid/64/000000/external-climate-weather-others-aquariid-16.png"},
    {icon:"https://img.icons8.com/external-others-aquariid/64/000000/external-climate-weather-others-aquariid-81.png"},
    {icon:"https://img.icons8.com/doodle/48/000000/cloud-lighting.png"},
    {icon:"https://img.icons8.com/ios/50/000000/rain--v2.png"},
    {icon:"https://img.icons8.com/doodle/48/000000/windsock.png"},
    {icon:"https://img.icons8.com/color/48/000000/partly-cloudy-night.png"}

]

let photo= JSON.parse(localStorage.getItem("photo"));


localStorage.setItem("photo",JSON.stringify(photos))

