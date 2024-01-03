
/* a) Get all the countries from Asia continent /region using Filter function*/


const URL = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest(); 

xhr.open("GET",URL);

xhr.send();

xhr.onload = () => {
    let dataOfcountries = JSON.parse(xhr.response);
    let continent = dataOfcountries.filter((arr)=>{
        if(arr.region === 'Asia'){
            return arr.name;
        }
    })
    console.log(continent)
}
