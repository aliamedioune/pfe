import React, { Component } from 'react';
import { Grid, Cell, } from 'react-mdl';
import settings from '../settings'
import axios from 'axios'
import  './Addab.css';







class addabsence extends Component {
    handleClick = () => {
        window.location.assign("./etudiant");

      }
      handleClick_GI2 = () => {
        window.location.assign("./GI2");
        
      }
      
  render() {
    return (
     <div>
     <div className="dropdown">
        <button class="dropbtn">Première année</button>
        <div className="dropdown-content">
          <a href="#" onClick={this.handleClick}>GI1</a>
          <a href="#">ER1</a>
          <a href="#">GODT1</a>
          <a href="#">TM1</a>
        </div>
      </div>
       <div className="dropdown1">
       <button class="dropbtn1">licence</button>
       <div className="dropdown-content1">
       <a href="#">ISIL</a>
       <a href="#">ERD</a>
       <a href="#">MBF</a>
       <a href="#">TOURISME</a>
       </div>
     </div>
     <div className="dropdown2">
     <button class="dropbtn2">Deuxième année</button>
     <div className="dropdown-content2">
     <a href="#" onClick={this.handleClick_GI2}>GI2</a>
         <a href="#">ER2</a>
         <a href="#">GODT2</a>
         <a href="#">TM2</a>
       
     </div>
   </div>
   
   </div>
    )
  }
}
export default addabsence ;
