/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useState} from "react";
import md5 from "md5";
import './App.css';

export default function App(){
    const publicKey = '017ec7a691388543c7f0eefc3b31f0c6';
    const privateKey = '8e78c167c545499f030b6f8567c5c0a07ae7bf27';
    const timestemp = Date.now();
    const hash = md5(timestemp + privateKey + publicKey);

    const [limit, setLimit] = useState(100);
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState([]);

    useEffect(async() => {
        const response = await fetch('http://gateway.marvel.com/v1/public/characters?limit='+limit+'&offset='+offset+'&ts='+timestemp+'&apikey='+publicKey+'&hash='+hash)
        const data = await response.json();
        setData(data.data.results);
        setPages(Math.round(data.data.total / limit));
    }, [offset, limit]);

    //PAGINAÇÃO
    useEffect(() => { 
        for (let i = 1; i <= pages; i++){
            setPage(page => [...page, i]);
        }
    },[pages]);
    function handlepage(valuePage){
        setOffset(valuePage);
    }

    function handleLimit(e){
      setLimit(e.target.value);
      setPage([]);
    }

    console.log(pages);
    return(
        <>
        <div className="content-limit">
          <select className="select-limit" name="limit" onChange={handleLimit}>
            <option value="50"> 50 Por pagina </option>
            <option value="60"> 60 Por pagina </option>
            <option value="70"> 70 Por pagina </option>
            <option value="80"> 80 Por pagina </option>
            <option value="90"> 90 Por pagina </option>
            <option value="100"> 100 Por pagina </option>
          </select>
        </div>
        <div className="content-characters">
          {
            data.map(character =>
              <div className="card-character" key={character.id}>
                <div className="pic-box">
                  <img className="pic-character" src={character.thumbnail.path + '.' + character.thumbnail.extension} />
                </div>
                <h1> {character.name ? character.name : 'Name Default'} </h1>
                <p> {character.description ? character.description : 'Description Default'} </p>
              </div>
            )
          }
        </div>
        <div className="content-pagination">
          {
            page.map(page =>
              <button className="button-pagination" onClick={() => handlepage(page)} id={page} key={page}> { page } </button>
            )
          }
        </div>
        </>
    );
}