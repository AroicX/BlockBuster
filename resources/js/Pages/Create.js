import React, { Component } from "react";
import axios from "axios";
import Select from 'react-select';

const options = [
  { value: 'Action', label: 'Action' },
  { value: 'Thriller', label: 'Thriller' },
  { value: 'Comdey', label: 'Comdey' },
  { value: 'Ficition', label: 'Ficition' },
  { value: 'Sci-fi', label: 'Sci-fi' },
];

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      error: null,
      selectedOption: null,
    };

    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleOnchange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleChange(selectedOption){
    this.setState({ selectedOption });
  }

  render() {
    const { selectedOption } = this.state;


    const create = e => {
     
      e.preventDefault();

      const sort = [];

      this.state.selectedOption.map(item => {
        sort.push(item.value)
      })

      const data = {
        name: this.state.name,
        description: this.state.description,
        release_date: this.state.release,
        rating: this.state.rating,
        ticket_price: this.state.ticket,
        country: this.state.country,
        genre: sort,
        photo: this.state.photo
      };

     

      axios
        .post(`/api/films/create`, data)
        .then(res => {
          console.log(res);
          console.log(res.data.status);
          if (res.data.status === 200) {
            window.location.replace("/films");
          }
        })
        .catch(err => {
         
          console.error(err);
        });
    };

    return (
      <div className="register">
        <div className="main-content">
          <div className="container mt--8 pb-5 push-down">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-7">
                <div className="card">
                  <div className="card-body px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4"></div>
                    <form onSubmit={create}>
                      <h5 className="text-center my-5"> Add Film </h5>

                      {this.state.error != null ? (
                        <div className="alert alert-danger" role="alert">
                          {this.state.error}
                        </div>
                      ) : (
                        ""
                      )}

                      <div className="form-group">
                        <label >Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          onChange={this.handleOnchange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label >Description</label>
                        <textarea
                          className="form-control"
                          type="text"
                          name="description"
                          onChange={this.handleOnchange}
                          required
                        ></textarea>
                      </div>


                      <div className="form-group">
                        <label >Release Date</label>
                        <input
                          className="form-control"
                          type="date"
                          name="release"
                          onChange={this.handleOnchange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label >Rating </label>
                        <input
                          className="form-control"
                          type="number"
                          name="rating"
                          maxLength="5"
                          onChange={this.handleOnchange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label >Ticket Price</label>
                        <input
                          className="form-control"
                          type="number"
                          name="ticket"
                          onChange={this.handleOnchange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label >Country </label>
                        <input
                          className="form-control"
                          type="text"
                          name="country"
                          onChange={this.handleOnchange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label >Genre </label>
                       

                      <Select
                      isMulti
                              value={selectedOption}
                              onChange={this.handleChange}
                              options={options}
                            />
                      </div>

                      <div className="form-group">
                        <label >Photo </label>
                        <input
                          className="form-control"
                          type="link"
                          name="photo"
                          onChange={this.handleOnchange}
                          required
                        />
                      </div>



                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
