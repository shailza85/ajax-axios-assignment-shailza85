 axios.get("https://dog.ceo/api/breeds/list/all") //type of request id GET
//Handle reponse...
 .then(response=> {
     //Test if we are getting data
    // console.log(response);
     
     const cbreed1= response.data.message; // Object contatining id and name properties.
    // console.log(cbreed1);
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
    cHeading.textContent ="Dog Breed List";
    const cbreed1DL = document.createElement( "DL" );
    const cbreed1DT = document.createElement( "DT" );
    cbreed1DT.textContent = "Breed";
    const cBreed1DD = document.createElement( "DD" );
    cBreed1DD.textContent = `1. Australian:  ${cbreed1.australian}`; // Get the value from our id property (see response.)
    //const cNameDT = document.createElement( "DT" );
    const cNameD = document.createElement( "DD" );
    cNameD.textContent = `2. Bulldog:  ${cbreed1.bulldog}`; // Get the value from our name property (see response.)

    const cNameDD = document.createElement( "DD" );
    cNameDD.textContent = `3. Hound:  ${cbreed1.hound}`; // Get the value from our name property (see response.)

     //Append all the things to <DL>
     cbreed1DL.appendChild( cbreed1DT );
     cbreed1DL.appendChild( cBreed1DD );
     cbreed1DL.appendChild( cNameD );
     cbreed1DL.appendChild( cNameDD );
    // Put this into the page (<body>)!
    document.body.appendChild( cHeading );
    document.body.appendChild( cbreed1DL );

 });

 //Another API for testing purpose...
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
    namedAPI.textContent="International Name day API:";
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

 