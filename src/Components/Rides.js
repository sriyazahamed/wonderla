import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "../Styles/Rides.css";
import queryString from 'query-string';
import axios from 'axios';
const API_URL = require('../constants').API_URL;

class Rides extends Component {
    constructor() {
        super();
        this.state = {
            rides: []
        }
    }

    componentDidMount() {
        const params = queryString.parse(this.props.location.search);
        const { type } = params;
        axios.get(`${API_URL}/getRidesForType/${type}`)
            .then(resp => {
                const rides = resp.data.Rides;
                this.setState({
                    rides
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        const { rides } = this.state;
        
        return (
            <div>
                <div className='head container-fluid'>
                    <div className='head row justify-content-center'>
                        {
                            rides[0] 
                            ? 
                            <> 
                                <div className='my-3' style={{ width: "fit-content", color: "white" }}>{rides[0].type[0].toUpperCase()+rides[0].type.slice(1)} Rides  </div>
                            </> 
                            :
                            <>
                                <div>Loading...</div>
                            </>
                        }
                    </div>
                </div>
                <div className='container my-4'>
                    <div className='row justify-content-center'>
                        {
                            rides.map(
                                (item, index) => {
                                    return (
                                        <div className='col-lg-3 col-md-4  mx-3 my-3'>
                                            <div className='row '><img src={item.image} /></div>
                                            <div className='col-12 my-2 ride rideName ps-4 py-3'>{item.name}</div>
                                            <div className='col-12 my-2 ride px-2  pb-2'>{item.description}</div>
                                        </div>
                                    );
                                }
                            )
                        }



                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Rides);