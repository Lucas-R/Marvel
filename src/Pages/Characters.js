import React, {useEffect, useState} from "react";
import md5 from "md5";
import '../Styles/Characters.css';
import { Navigate, useNavigate, useParams } from "react-router";

export default function App(){
    const publicKey = '017ec7a691388543c7f0eefc3b31f0c6';
    const privateKey = '8e78c167c545499f030b6f8567c5c0a07ae7bf27';
    const timestemp = Date.now();
    const hash = md5(timestemp + privateKey + publicKey);

    const navigate = useNavigate();
    const limit = 100;
    const page = useParams();
    const [total, setTotal] = useState();
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);

    useEffect(async() => {
        const response = await fetch('http://gateway.marvel.com/v1/public/characters?&limit='+limit+'&offset='+offset+'&ts='+timestemp+'&apikey='+publicKey+'&hash='+hash)
        const data = await response.json();
        setData(data.data.results);
        setTotal(Math.round(data.data.total / limit))
    }, [offset]);

    useEffect(() => {
        setOffset(page.page);
    },[page]);

    useEffect(() => {
        for(let i = 0; i < total; i++){
            setPages(pages => [...pages,{
                'id': i + 1,
                'num': i * 100
            }]);
        }
    },[total]);
    
    const ButtonsPags = pages.map(item => { return (<button onClick={handlePage => navigate('/Characters/'+item.num+'/')} className="button-pagination"> {item.id} </button>)});
    document.title = 'Characters';

    return(
        <>   
        <div className="content">   
        {
        data.map(character =>
            <div className="card" key={character.id}>
                <div className="character-box">
                <img className="character-photo" src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name ? character.name : 'Name Default'}/>
                <h1 className="character-name"> {character.name ? character.name : 'Name Default'} </h1>
                <div>
                    <button className="character-button"> Lear More </button>
                    <button className="character-button"> Lear More </button>
                </div>
                </div>
            </div>
        )
        }
            <div className="pagination-box">
            { ButtonsPags }
            </div>
        </div>
        </>
    );
}