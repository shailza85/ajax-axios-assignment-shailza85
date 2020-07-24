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

axios.get("https://api.abalin.net/today?country=us&timezone=America%2FLos_Angeles") //type of request id GET
//Handle reponse...
 .then(response=> {
     //Test if we are getting data
    // console.log(response);
     
     const nDate= response.data.data; // Object contatining id and name properties.
     //console.log(nDate);
    /**
     * <DL>
     *  <DT>Title of item(s)</DT>
     *  <DD>Item Contents</DD>
     * <DT>Title of item(s)</DT>
     *  <DD>Item Contents</DD>
     * <DD>Item Contents</DD>
     * </DL>
     */
    const namedAPI= document.createElement("h2");
    namedAPI.textContent="International Nameday API:";
    const nDateDL = document.createElement( "DL" );
    const nDateDT = document.createElement( "DT" );
    nDateDT.textContent = "Date Today:";
    const nDateDD = document.createElement( "DD" );
    nDateDD.textContent = `Day: ${nDate.dates.day} Month: ${nDate.dates.month}`; // Get the value from our id property (see response.)
    const nDayDT = document.createElement( "DT" );
    nDayDT.textContent = "Name Days of Country-US:";
    const nDayDD = document.createElement( "DD" );
    nDayDD.textContent = nDate.namedays.us; // Get the value from our name property (see response.)

     //Append all the things to <DL>

     nDateDL.appendChild( nDateDT );
     nDateDL.appendChild( nDateDD );
     nDateDL.appendChild( nDayDT );
     nDateDL.appendChild( nDayDD );
    // Put this into the page (<body>)!
    document.body.appendChild( namedAPI );
    document.body.appendChild( nDateDL );

 });


 axios.get("https://dog.ceo/api/breeds/list/all") //type of request id GET
//Handle reponse...
 .then(response=> {
     //Test if we are getting data
    // console.log(response);
     
     const cbreed1= response.data.message; // Object contatining id and name properties.
     //console.log(cbreed1);
    /**
     * <DL>
     *  <DT>Title of item(s)</DT>
     *  <DD>Item Contents</DD>
     * <DT>Title of item(s)</DT>
     *  <DD>Item Contents</DD>
     * <DD>Item Contents</DD>
     * </DL>
     */
    const cHeading = document.createElement("h2");
    cHeading.textContent ="Dog Breeds List";
    const cbreed1DL = document.createElement( "DL" );
    const cbreed1DT = document.createElement( "DT" );
    cbreed1DT.textContent = "Breed";
    const cBreed1DD = document.createElement( "DD" );
    cBreed1DD.textContent = cbreed1.australian; // Get the value from our id property (see response.)
    const cNameDT = document.createElement( "DT" );
    cNameDT.textContent = "Sub:Breed";
    const cNameDD = document.createElement( "DD" );
    cNameDD.textContent = cbreed1.bulldog; // Get the value from our name property (see response.)

     //Append all the things to <DL>
     cbreed1DL.appendChild( cbreed1DT );
     cbreed1DL.appendChild( cBreed1DD );
     cbreed1DL.appendChild( cNameDT );
     cbreed1DL.appendChild( cNameDD );
    // Put this into the page (<body>)!
    document.body.appendChild( cHeading );
    document.body.appendChild( cbreed1DL );

 });

 