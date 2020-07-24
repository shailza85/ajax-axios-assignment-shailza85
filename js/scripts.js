/*fetch("https://api.thecatapi.com/v1/images/search?breed_id=beng") //Sends the request to fetch data
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
*/

axios.get("https://api.thecatapi.com/v1/images/search?breed_id=beng") //type of request id GET
//Handle reponse...
 .then(response=> {
     //Test if we are getting data
     console.log(response);
     
     const cbreed1= response.data.breeds; // Object contatining id and name properties.
    /**
     * <DL>
     *  <DT>Title of item(s)</DT>
     *  <DD>Item Contents</DD>
     * <DT>Title of item(s)</DT>
     *  <DD>Item Contents</DD>
     * <DD>Item Contents</DD>
     * </DL>
     */
    const cbreed1DL = document.createElement( "DL" );
    const cbreed1DT = document.createElement( "DT" );
    cbreed1DT.textContent = "ID";
    const cBreed1DD = document.createElement( "DD" );
    cBreed1DD.textContent = cbreed1.id; // Get the value from our id property (see response.)
    const cNameDT = document.createElement( "DT" );
    cNameDT.textContent = "Name";
    const cNameDD = document.createElement( "DD" );
    cNameDD.textContent = cbreed1.name; // Get the value from our name property (see response.)

     //Append all the things to <DL>
     cbreed1DL.appendChild( cbreed1DT );
     cbreed1DL.appendChild( cBreed1DD );
     cbreed1DL.appendChild( cNameDT );
     cbreed1DL.appendChild( cNameDD );
    // Put this into the page (<body>)!
    document.body.appendChild( cbreed1DL );


 });



