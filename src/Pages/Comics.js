import React, { useEffect } from "react";


export default function Comics(){

    useEffect(() => {
        document.title = 'Comics'
    },[]);
    

    return(
        <>   
            <h1> Comics </h1> 
        </>
    );
}