
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { Redirect } from 'react-router-dom';
import {  FormGroup, FormControl, ControlLabel  } from "react-bootstrap";
import "./Home.css";
import { Grid, Cell  } from 'react-mdl';
import { Link } from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    handleClick1 = () => {
        window.location.assign("./Ajoute_etu");
      }
      handleClick2 = () => {
        window.location.assign("./addabsence");
      }
    
    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="container">
                <p> </p>

                    <Button onClick={this.handleClick1} class="btn btn-primary" variant="primary" size="lg"   block>
                      Ajouter Un Etudiant  
                   
                      </Button>
                      <p> </p>
                    <Button onClick={this.handleClick2} variant="success" size="lg" block>
                      Ajouter Absence 
                    </Button>
                    <p> </p>
                    <Button variant="info" size="lg" block>
                       Liste Des Absence  
                    </Button>
      
}
                </div>


            )
        }

    }


    render() {
        return (
            <div>
                <p>{}</p>
               
                <Grid>
                    <Cell col={12}>
                        <div className="wrapper">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}


export default Home;

