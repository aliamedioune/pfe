import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

import { Redirect } from 'react-router-dom';
import { Button, FormGroup, FormControl} from "react-bootstrap";
import "./sign in.css";
import axios from 'axios';
import Swal from 'sweetalert2';



class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      fields: [],
      redirect: false
    };

  }
 
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  /*
    validateForm() {
  
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your Email .";
      }
  
      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your Password .";
      }
    }*/

  handleSubmit = event => {
    event.preventDefault();
    axios.post("/web/api/Etudiants/login.php", [this.state.email, this.state.password])
      .then(res => {
        if (res.data[0].succed) {
          if (res.data[0].loggedin) {
            Swal.fire({
              title: 'Bien! Vous avez cliquez sur le bouton avec succés',
              width: 600,
              padding: '3em',
              background: '#fff url(/images/trees.png)',
              backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                center left
                no-repeat
              `
            })
           
          
            window.location.href = "//localhost:3000/Home";
            <button type="button" onClick="window.location='/secure/edit.aspx?id=671'">Edit</button>
          }
          else {
            alert("Username or password aren't correct");
            this.setState({
              password: ""
            })
          }
        }
        else {
          alert("Something went wrong");
        }
      })
      .catch(err => console.log(err))
  }


  // redirection code
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='www.google.com' />
    }
  }
  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            Email
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            Password
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={this.setRedirect}
          >

            Login
          </Button>

        </form>
      </div>
    );
  }
}


export default About;



