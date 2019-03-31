
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
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
          {this.props.obj.id}
        </td>
        <td>
          {this.props.obj.prenom}
        </td>
        <td>
          {this.props.obj.nom}
        </td>
       

        <td>
          {this.props.obj.cne}
        </td>

        <td>
          {this.props.obj.filliere}
        </td>
       
        <td>
        <p class="onoff1"><input type="checkbox" value="1" id="checkboxID"/><label for="checkboxID"></label></p>
         
        </td>
        <td>
        <p class="onoff2"><input type="checkbox" value="2" id="checkboxID1"/><label for="checkboxID1"></label></p>
        </td>
        
        {/* 
         <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td> */}
      </tr>
    );
  }
}

export default TableRow;