# ***IN THIS REPOSITORY:***
---
# Each and every problems stored in a separate folder
---
* ***Solving problems using array functions on rest countries data and click here for data*** _**=>**_ [`restcountries.com`](https://restcountries.com/v3.1/all).
---
  1. **Get all the countries from Asia continent /region using Filter function**
  
       
     * start a code with XMLHttp request,

``````
const URL = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest(); 

xhr.open("GET",URL);

xhr.send();

xhr.onload = () => {
    
        }

``````
 and here i'm using `filter` function ( [`reference link here`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter))to get name and print in web.
 ``````
 filter(callbackFn, thisArg)  
 ``````
 

 ---
 ---
  2. **Get all the countries with a population of less than 2 lakhs using Filter function**

     * The above similar process for requesting ***XMLHttp request***.
     * Same `filter` function used and print in web 
``````
forEach(callbackFn, thisArg)
``````
  --- 
  ---
  3. **Print the following details name, capital, flag, using forEach function**
  
     * The above similar process for requesting ***XMLHttp request***.
     *  Here using `forEach` function ([`Reference link`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)) for each countries name, capital, flags to get, and get output through web.
``````
forEach(callbackFn, thisArg)
``````

---
---
  4. **Print the total population of countries using reduce function**

       * The above similar process for requesting ***XMLHttp request***.
       * Here using `reduce` function ([`Reference link`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)) to calculate total population for all countries.

  ``````
reduce(callbackFn, initialValue)
  ``````     
  ---
  ---
  5. **Print the country that uses US dollars as currency**.

     * The above similar process for requesting ***XMLHttp request***.
     * Here i'm using `filter` function to solve this problem.
     * This filter function tell us, which are the countries are using there currency as US dollar.

