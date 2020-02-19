import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Films() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    setIsLoading(true);


    let cache = localStorage.staleState;
    if (cache && typeof JSON.parse(cache) === 'object') {
      setAuth(true);
      let userData = JSON.parse(cache)
      setUser(userData.user); 


    }

    axios
      .get("/api/films")
      .then(res => {
        let result = res.data.data;
        setFilms(result.data);
      })
      .catch(err => console.error);



  }, []);

  const ShowFilms = films.map((index, key) => {
    let genre = JSON.parse(index.genre);


    return (
      <div className="col-md-3 my-2" key={key}>
        <div className="movie-item">
          <div className="mv-img">
            <Link to={`/films/${index.id}`}>
              <img className="img-fuild" src={index.photo} height="100" />
            </Link>
          </div>
          <div className="title-in">
            <div className="cate">
              {genre.length > 0
                ? genre.map((item,key) => {
                  
                  return(
                    <span key={key} className="blue" style={{margin: 2}}>
                    <Link to={`/films/${index.id}`}>{item}</Link>
                  </span>
                  )
                  })
                : 
                <span className="blue">
                <Link to={`/films/${index.id}`}>Sci</Link>
              </span>
              }
            </div>
            <h6>
              <Link to={`/films/${index.id}`}>{index.name}</Link>
            </h6>
            <p>
              <i className="ion-android-star"></i>
              <span>{index.rating}</span> /5
            </p>
          </div>
        </div>
      </div>
    );
  });

  {
    isLoading ? "Loading Films" : null;
  }

  return (
    <div className="Films">
      <div className="slider movie-items">
        <div className="container">
          <div className="row">
            <div className="social-link">
              {
                !auth ? 
                <Link to="/login" className="btn btn-danger btn-lg">Login</Link>
                :
                <button onClick={() =>{ 
                  localStorage.removeItem('staleState')
                  window.location.replace('/login')
                }} className="btn btn-danger btn-lg">Logout</button>
              }
             <br/>
         
              <p> 
                {
                  auth ?
                  `Welcome back ${user.name}`
                  :
                  'Follow us:'
                }

              </p>
              <a href="#">
                <i className="ion-social-facebook"></i>
              </a>
              <a href="#">
                <i className="ion-social-twitter"></i>
              </a>
              <a href="#">
                <i className="ion-social-googleplus"></i>
              </a>
              <a href="#">
                <i className="ion-social-youtube"></i>
              </a>
            </div>

           
            <Link to="/films/create" className="btn btn-info btn-lg pull-right">Add Film</Link>
            <div className="slick-multiItemSlider">
              <div className="row">{ShowFilms}</div>
            </div>
          </div>
        </div>
      </div>
</div>
  );
}
