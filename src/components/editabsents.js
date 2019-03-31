import React, { Component } from 'react';
import axios from 'axios'
class EditAbsent extends Component {
    constructor(props) {
        super(props);
        this.state = { date: "2019-03-13", fili: 'GI2', etudiants: [], ondate: [] };
        this.fetchData = this.fetchData.bind(this)
        this.readOnDate = this.readOnDate.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }
    componentDidMount() {
        this.fetchData()
        this.readOnDate()
    }

    handleSelect(e) {

    }
    fetchData() {
        axios.post("/web/api/Etudiants/edtudiantAbsentList.php",
            { "id": "GI2" }, //SET ID PROPS
        )
            .then(response => {
                this.setState({ etudiants: response.data.data });

            }, console.log(this.state.etudiants))
            .catch(function (error) {
                console.log(error);
            })
    }
    readOnDate() {
        axios.post("/web/api/Etudiants/onDate.php",
            { "id": this.state.date },
        )
            .then(response => {
                let d = date(new Date());
                let data = response.data.data
                this.setState({ ondate: [d] });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <h3 align="center">Liste Des Etudiants</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <select onChange={this.handleSelect(this)} className="form-control">
                                    {this.state.ondate.map(e =>
                                        <option key={e.id} >{e}</option>
                                    )}
                                </select>
                            </div>
                            <div>
                                <table className="table">
                                    <thead>
                                        <th>#</th>
                                        <th>Nom et Prénom</th>
                                        <th>CNE</th>
                                        <th>8-12</th>
                                        <th>2-6</th>
                                    </thead>
                                    <tbody>
                                        {this.state.etudiants.map(e => {
                                            return (
                                                <Table atd={this.state.date} key={e.id} e={e} />
                                            )
                                        })}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function Table(props) {
    function checkAbsent(id_etud, abs, ondate, timestate, justifier) {
        axios.post("/web/api/Etudiants/saveAbsent.php",
            { 'id_etud': id_etud, abs, ondate, timestate, justifier }, //SET ID PROPS
        )
            .then(response => {
                alert(response)

            })
            .catch(function (error) {
                console.log(error);
            })
    }
    if (props.e.id % 2 == 1)
        return (
            <tr>
                <td>{props.e.id}</td>
                <td>{props.e.nom} {props.e.prenom}</td>
                <td>{props.e.cne}</td>
                {props.e.absent == 1 && props.e.timestate == 0 ?
                    <td onClick={() => checkAbsent(props.e.id, 1, props.atd, 1, 0)}  className="text-left"><input className="checkbox" type="checkbox" name="" value=""></input></td>
                    :
                    <td onClick={() => checkAbsent(props.e.id, 0, props.atd, 1, 0)} checked className="text-left"><input className="checkbox" type="checkbox" name="" value=""></input></td>}

                <td onClick={() => checkAbsent(props.e.id, 1, props.atd, 2, 0)} className="text-left"><input className="checkbox" type="checkbox" name="" value=""></input></td>
            </tr>
        )
    else {
        return ""
    }
}
function date(d) {
    let mon = d.getMonth() + 1;
    let f = d.getFullYear() + "-" + mon + "-" + d.getDate();
    return f;
}
export default EditAbsent;