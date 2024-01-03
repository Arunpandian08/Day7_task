
/* B) Get all the countries with a population of less than 2 lakhs using Filter function */


const URL = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest(); 

xhr.open("GET",URL);

xhr.send();

xhr.onload = () => {
    let dataOfcountries = JSON.parse(xhr.response);
    let population = dataOfcountries.filter((arr)=>{
        return arr.population<200000
    })
    console.log(population)
}
