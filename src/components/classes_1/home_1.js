import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { Redirect } from 'react-router-dom';
import {  FormGroup, FormControl, ControlLabel  } from "react-bootstrap";
import "../Home.css";
import { Grid, Cell  } from 'react-mdl';
class home_1 extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="container">
                    <Button variant="primary" size="lg" block type="button" onClick="">
                        Computer Engineering
                    
                      </Button >
                    <Button variant="success" size="lg" block>
                    Renawable Enery
                    </Button>
                    <Button variant="info" size="lg" block>
                        Management Technique
                    </Button>
                    <Button variant="danger" size="lg" block>
                        Management of Organizations and Tourist Destinations 
                    </Button>
                    
                </div>


            )
        }

    }
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
            <div>
                <p>{}</p>
               kjsqdjknqdjkn
                <Grid>
                    <Cell col={12}>
                        <div className="wrapper">{this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}


export default home_1;
