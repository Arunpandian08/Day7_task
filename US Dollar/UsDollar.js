
/* E) Print the country that uses US dollars as currency. */

const URL = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest(); 

xhr.open("GET",URL);

xhr.send();

xhr.onload = () => {
    let dataOfcountries = JSON.parse(xhr.response);
    let usDollars = dataOfcountries.filter((arr)=>{
        if(arr.currencies = 'us dollar')
        return arr.name
    }) 
    console.log(usDollars)
}