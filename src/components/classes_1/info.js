import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './tableRow1';

export default class info extends Component {

  constructor(props) {
    super(props);
    this.state = { absence: [] };
  }
  componentDidMount() {

    axios.get("/web/api/Etudiants/abs_read.php", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => {
        this.setState({ absence: response.data.data });
      }, console.log(this.state.absence))
      .catch(function (error) {
        console.log(error);
      })
  }
 
  
  tabRow() {
    return this.state.absence.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <h3 align="center">Liste des absences</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
          <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>CNE</th>
              <th>Filliere</th>
              <th>Justification</th>
              <th colSpan="2">Action</th>
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
