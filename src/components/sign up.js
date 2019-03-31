import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import settings from '../settings'
import axios from 'axios'
class Resume extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    axios.post("/web/api/Etudiants/signup.php", this.state.fields)
      .then(res => res.data[0].msg)
      .catch(err => console.log(err))

    if (this.validateForm()) {
      /**/
      axios.post("/web/api/Etudiants/signup.php", this.state.fields)
        .then(res => {
          if(res.data[0].succed)
          {
            alert("User created succesfuly");
            let fields = {};
            fields["username"] = "";
            fields["emailid"] = "";
            fields["mobileno"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });
          }
          else{
            alert("Something went wrong");
          }
        })
        .catch(err => console.log(err))

    }
    }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter your name.";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["name"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"]){
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

  /*  if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }*/

    this.setState({
      errors: errors
    });
    return formIsValid;


  }



  render() {
    return (
      <div id="register">

        <h3>               Registration page    </h3>
        <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
          <label>Name</label>
          <input type="text" name="name" value={this.state.fields.name} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.name}</div>
          <label>Email ID:</label>
          <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.emailid}</div>
          <label>Mobile No:</label>
          <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.mobileno}</div>
          <label>Password</label>
          <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.password}</div>
          <input type="submit" className="button" value="Register" />
        </form>
      </div>
    )
  }
}

export default Resume;
