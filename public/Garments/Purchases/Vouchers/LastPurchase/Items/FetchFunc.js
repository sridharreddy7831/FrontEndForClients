let StartFunc = async ({ inProjectName }) => {

    try {
        let jVarLocalFetchUrl = `/bin/Items/DataOnly`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();
        
        return await data;
       
    } catch (error) {
        console.log("error:", error);
    };

};



export { StartFunc };