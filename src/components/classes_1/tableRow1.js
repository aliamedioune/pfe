
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow1 extends Component {
  constructor(props) {
    super(props);
    //this.delete = this.delete.bind(this);
  }
  /*
  delete() {
    axios.get('http://localhost/api/laureat/delete.php?id=' + this.props.obj.id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err));
    window.location.reload();
  }
  */

  render() {
    return (

      <tr>
        <td>
          {this.props.obj.id_absence}
        </td>
        <td>
          {this.props.obj.nom_abs}
        </td>
        <td>
          {this.props.obj.prenom_abs}
        </td>
       

        <td>
          {this.props.obj.cne_abs}
        </td>

        <td>
          {this.props.obj.filliere_abs}
        </td>
        <td>
          {this.props.obj.justification}
        </td>
        
      <td>
          <Link to={"/etudiant/edit/" + this.props.obj.id} className="btn btn-primary">Edit</Link>
        </td>
           {/*
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td> */}
      </tr>
    );
  }
}

export default TableRow1;