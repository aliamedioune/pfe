import React, { Component } from 'react';

import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import settings from '../settings'
import axios from 'axios';
import Swal from 'sweetalert2';
class Ajoute_etu extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.Ajoute_etuForm = this.Ajoute_etuForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  Ajoute_etuForm(e) {
    e.preventDefault();
    axios.post("/web/api/Etudiants/Create.php", this.state.fields)
      .then(res => res.data[0].msg)
      .catch(err => console.log(err))

    if (this.validateForm()) {
      /**/
      axios.post("/web/api/Etudiants/Create.php", this.state.fields)
        .then(res => {
          if(res.data[0].succed)
          { 
            Swal.fire(
              'BIEN!',
              'Vous Avez Ajouter Un Nouveau Etudiant Avec Succées !',
              'success'
            )
            
            let fields = {};
            fields["nom"] = "";
            fields["prenom"] = "";
            fields["cne"] = "";
            fields["filliere"] = "";
            
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


    if (!fields["nom"]) {
        formIsValid = false;
        errors["nom"] = "*Please enter your name.";
      }
  
      if (!fields["prenom"]) {
        formIsValid = false;
        errors["prenom"] = "*Please enter your prenom.";
      }
      if (!fields["cne"]) {
        formIsValid = false;
        errors["cne"] = " Please enter your cne";
      }
      
      if(!fields["filliere"]) {
        formIsValid = false;
        errors["filliere"] = "*Please enter your filliere.";
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



  render()  {
    return (
        <div id="register">

        <h3>  Ajouter Un Etudiant </h3>
        <form method="POST" name="userRegistrationForm1" onSubmit={this.Ajoute_etuForm} >
          <label>Nom</label>
          <input type="text" name="nom" value={this.state.fields.name} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.name}</div>
          <label>Prenom:</label>
          <input type="text" name="prenom" value={this.state.fields.prenom} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.prenom}</div>
          <label>Cne:</label>
          <input type="text" name="cne" value={this.state.fields.cne} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.cne}</div>
          <label>Filliere</label>
          <input type="text" name="filliere" value={this.state.fields.filliere} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.filliere}</div>
          <input type="submit" className="button" value="Register" />
        </form>
      </div>
    )
  }
}

export default Ajoute_etu;
