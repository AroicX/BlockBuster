import React, { Component } from "react";
import axios from 'axios'

class Register extends Component {


    constructor(props){
      super(props);

      this.state = {
        isLoading: false,
        error: null,
      }

      this.handleOnchange = this.handleOnchange.bind(this);
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

    const register = e => {
      console.log('fired...')
      e.preventDefault();


      const data = { name: this.state.name, email: this.state.email, password: this.state.password };

      axios
        .post(`/api/auth/signup`, data)
        .then(res => {
          console.log(res)
          console.log(res.data.status)
          if(res.data.status === 'ok'){
           

          window.location.replace('/films')

          }

        })
        .catch(err => {
          this.setState({
            error: 'Email or Password not vaild'
          })
           console.error(err)
        });

    }

    return (
      <div className="register">
        <div className="main-content">
          
          <div className="container mt--8 pb-5 push-down">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-7">
               <div className="card">
               <div className="card-body px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      
                    </div>
                    <form onSubmit={register}>
                      <h5 className="text-center my-5"> Create Account </h5>


                    {
                      this.state.error != null ? 
                      <div className="alert alert-danger" role="alert">
                      {this.state.error}
                    </div>
                    :
                    ''
                    }

                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-email-83"></i>
                            </span>
                          </div>
                          <input
                            className="form-control"
                            placeholder="Name"
                            type="text"
                            name="name"
                            onChange={this.handleOnchange}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-email-83"></i>
                            </span>
                          </div>
                          <input
                            className="form-control"
                            placeholder="Email"
                            type="email"
                            name="email"
                            onChange={this.handleOnchange}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-lock-circle-open"></i>
                            </span>
                          </div>
                          <input
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            type="password"

                            onChange={this.handleOnchange}
                            required
                          />
                        </div>
                      </div>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor=" customCheckLogin"
                        >
                          <span className="text-muted">Remember me</span>
                        </label>
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary py-3 my-4 btn-lg">
                          Create Account 
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

export default Register;
