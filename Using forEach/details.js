
/* C)Print the following details name, capital, flag, using forEach function */

const URL = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest(); 

xhr.open("GET",URL);

xhr.send();

xhr.onload = () => {
    let dataOfcountries = JSON.parse(xhr.response);
dataOfcountries.forEach((element)=>{
    console.log(Array.of(element.name,element.capital,element.flag))
})
}
