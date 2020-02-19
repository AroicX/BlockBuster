import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

export default function Films(props){

    const [isLoading,setIsLoading] = useState(false);
    const [films,setFilms] = useState([]);

    useEffect(() => {
        setIsLoading(true);
       
        axios
            .get('/api/films')
            .then((res) =>{
                let result = res.data.data;
                setFilms(result.data);
            })
            .catch(err => console.error);
    },[]);

        const ShowFilms = films.map((index,key) =>{
            return <li key={key}>{index.name}</li>
        });

        {isLoading ? 'Loading Films' : null}
    

    
        return (
            <div className="Films">
            
               {ShowFilms}
            </div>
        );
   
};