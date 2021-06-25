/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect} from "react";
import md5 from "md5";

export default function Request(){
    const publicKey = '017ec7a691388543c7f0eefc3b31f0c6';
    const privateKey = '8e78c167c545499f030b6f8567c5c0a07ae7bf27';
    const timestemp = Date.now();
    const hash = md5(timestemp + privateKey + publicKey);

    useEffect(() => {
        fetch('http://gateway.marvel.com/v1/public/characters?limit=100&offset=0&ts='+timestemp+'&apikey='+publicKey+'&hash='+hash)
        .then(response => response.json())
        .then(data => console.log(data));
    }, []);

    return(
        <>
        </>
    );
}