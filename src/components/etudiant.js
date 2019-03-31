import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './tableRow';

export default class Etudiant extends Component {

  constructor(props) {
    super(props);
    this.state = { etudiants: [] };
  }
  componentDidMount() {

    axios.get("/web/api/Etudiants/read.php", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => {
        this.setState({ etudiants: response.data.data });
      }, console.log(this.state.etudiants))
      .catch(function (error) {
        console.log(error);
      })
  }
  
  
  tabRow() {
    return this.state.etudiants.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div class="switch">
        <h3 align="center">Liste Des Etudiants</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>CNE</th>
              <th>Filliere</th>
              <th>8-12</th>
              <th>2-6</th>
           
                
  

            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}
