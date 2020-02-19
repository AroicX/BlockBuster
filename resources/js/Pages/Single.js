import React, { Component } from "react";
import axios from "axios";

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      film: null,
      msg: null,
      disabled: false,
    };

    this.handleOnchange = this.handleOnchange.bind(this);
  }

  UNSAFE_componentWillMount() {
    let id = this.props.match.params.id;
    console.log(id);

    axios
      .get(`/api/films/find/${id}`)
      .then(res => {
        let result = res.data.data;
        this.setState({
          film: result
        });
      })
      .catch(err => console.error);
  }

  handleOnchange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const createComment = e => {
        e.preventDefault();

        let cache = localStorage.staleState;
        if (cache && typeof JSON.parse(cache) === 'object') {
            this.setState({loading: true})
        }else{
            return(
               window.location.replace('/guest')
            )
        }


      const data = { film_id: this.state.film.id, name: this.state.name, comment: this.state.comment };
        let storage = JSON.parse(localStorage.getItem('staleState'));
        let token = storage.token;
        console.log(storage);
        console.log(token);

      axios
        .post(`/api/comments/create`, data,{headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${token}`
        }})
        .then(res => {

          console.log(res.data);

          this.state.film.comments.push(res.data.data);
          this.setState({
            msg: 'Comment has been added successfully',
            disabled: true
          })
        })
        .catch(err => console.error(err));
    };

    const { film } = this.state;
    if (film) {
      return (
        <div>
          <div className="hero sr-single-hero sr-single">
            <div className="container">
              <div className="row">
                <div className="col-md-12"></div>
              </div>
            </div>
          </div>
          <div className="page-single movie-single movie_single">
            <div className="container">
              <div className="row ipad-width2">
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className="movie-img sticky-sb">
                    <img src={film.photo} alt="" />
                    <div className="movie-btn">
                      <div className="btn-transform transform-vertical">
                        <div>
                          <a href="#" className="item item-1 yellowbtn">
                            {" "}
                            <i className="ion-card"></i>{" "}
                            {`₦ ${film.ticket_price}`}
                          </a>
                        </div>
                        <div>
                          <a href="#" className="item item-2 yellowbtn">
                            <i className="ion-card"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-sm-12 col-xs-12">
                  <div className="movie-single-ct main-content">
                    <h1 className="bd-hd">
                      {film.name} <br /> <span> {film.release_date}</span>
                    </h1>
                    <div className="social-btn">
                      <a href="#" className="parent-btn">
                        <i className="ion-heart"></i> Add to Favorite
                      </a>
                      <div className="hover-bnt">
                        <a href="#" className="parent-btn">
                          <i className="ion-android-share-alt"></i>share
                        </a>
                        <div className="hvr-item">
                          <a href="#" className="hvr-grow">
                            <i className="ion-social-facebook"></i>
                          </a>
                          <a href="#" className="hvr-grow">
                            <i className="ion-social-twitter"></i>
                          </a>
                          <a href="#" className="hvr-grow">
                            <i className="ion-social-googleplus"></i>
                          </a>
                          <a href="#" className="hvr-grow">
                            <i className="ion-social-youtube"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="movie-rate">
                      <div className="rate">
                        <i className="ion-android-star"></i>
                        <p>
                          <span>{film.rating}</span> /5
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="movie-tabs">
                      <div className="tabs">
                        <ul className="tab-links tabs-mv tabs-series">
                          <li className="active">
                            <a href="#overview">Overview</a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div id="overview" className="tab active">
                            <div className="row">
                              <div className="col-md-8 col-sm-12 col-xs-12">
                                <p>{film.description}</p>

                                <div className="title-hd-sm">
                                  <h4>Comments</h4>
                                  <a href="#" className="time">
                                    {`Count ${film.comments.length}`}
                                    <i className="ion-ios-arrow-right"></i>
                                  </a>
                                </div>

                                <div className="mv-user-review-item">
                                  {film.comments.length > 0
                                    ? film.comments.map((index, key) => {
                                        return (
                                          <div key={key}>
                                            <h3>{index.name}</h3>

                                            <p className="time">
                                              {index.created_at}
                                              <a href="#"> {index.name}</a>
                                            </p>
                                            <p>{index.comment}</p>
                                          </div>
                                        );
                                      })
                                    : "No Comments"}
                                </div>
                              </div>
                              <div className="col-md-4 col-xs-12 col-sm-12">
                                <h5 className="text-white">New Comment:</h5>
                                <br />
                                {
                                  this.state.msg != null ? 
                                  <div className="alert alert-success" role="alert">
                                  {this.state.msg}
                                </div>
                                :
                                ''
                                   }
                                <form onSubmit={createComment}>
                                  <div className="form-group">
                                    <label className="text-white">Name</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      name="name"
                                      onChange={this.handleOnchange}
                                      required
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label className="text-white">
                                      Comment
                                    </label>
                                    <textarea
                                      className="form-control"
                                      type="text"
                                      name="comment"
                                      onChange={this.handleOnchange}
                                      required
                                    ></textarea>
                                  </div>
                                  <div className="form-group">
                                    <button className="btn btn-info btn-lg" disabled={this.state.disabled}>
                                      Submit
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>

                          <div id="moviesrelated" className="tab"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    console.log(this.state);
    return <div>eg</div>;
  }
}

export default Single;
