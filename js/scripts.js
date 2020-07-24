fetch("https://api.thecatapi.com/v1/images/search?breed_id=beng") //Sends the request to fetch data
.then(response=> { 
    if (response.status>=200 && response.status<=299) {  // checks the range of response codes 
        return response.json(); // converts response to JSON and sends to .then
    }
    else {
        throw Error(response.statusText); //displays error if response is unsuccessfull.
    }
})
// checking the response data and output to console.
.then (data=> { 
    console.log(data);


const catsBreed=data.catsBreed; //This is an arrays of cats breed
const catsBreedUL =document.createElement("UL"); //creating UL List

for (const cbreed of catsBreed) //looping through array
{
    const catsBreedLI =document.createElement("LI"); ///creating li 
    //Adding text content using template literal 
    catsBreedLI.textContent=`cat name: ${cbreed.name}. URL: ${cbreed.cfa_url}.`;
    // Append li to ul
    catsBreedUL.appendChild(catsBreedLI);
    
}
//Add ul to the body of webpage
document.body.appendChild(catsBreedUL);
});


