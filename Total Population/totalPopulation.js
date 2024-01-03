
/* D) Print the total population of countries using reduce function */


const URL = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest(); 

xhr.open("GET",URL);

xhr.send();

xhr.onload = () => {
    let dataOfcountries = JSON.parse(xhr.response);
    for(i = 0 ; i < dataOfcountries.length; i++){
    let initialVal =0
    const totalpopulation= dataOfcountries.reduce((acc,element)=> acc+element.population,initialVal);
    console.log(totalpopulation)
}
}

/* OUTPUT:

7777721563

*/