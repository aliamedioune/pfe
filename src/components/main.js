import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './Sign in';
import Contact from './contact';
import Projects from './projects';
import Resume from './sign up';
import Etudiant from './etudiant';
import Home from './Home';
import info from './classes_1/info';
import home_1 from './classes_1/home_1';
import Ajoute_etu from './Ajoute_etu';
import addabsence from './addabsence';
import GI2 from './classes_1/GI2';
import Absent from './editabsents';
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/signin" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/etudiant" component={Etudiant} />
    <Route path="/Home" component={Home} />
    <Route path="/home_1" component={home_1} />
    <Route path="/info" component={info} />
    <Route path="/Ajoute_etu" component={Ajoute_etu} />
    <Route path="/addabsence" component={addabsence} />
    <Route path="/editabs" component={Absent} />
 {/*  <Route path="/classe" component={info} />
   
     <Route path="/etudiant/edit/:id" component={EtudiantEdit} /> */}

  </Switch>
)

export default Main;
