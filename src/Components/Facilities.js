import React, { Component } from 'react';
import '../Styles/Facilities.css';
import axios from 'axios';

const API_URL = require('../constants').API_URL;

export default class Facilities extends Component {
    constructor() {
        super();
        this.state = {
            facilities: []
        }
    }
    componentDidMount() {
        axios.get(`${API_URL}/getFacilities`)
            .then(resp => {
                this.setState({
                    facilities: resp.data.facilities
                })
            }).catch(err => {
                console.log(err);
            }
            );
    }

    render() {
        const { facilities } = this.state;
        return (
            <div>
                <div className='head container-fluid'>
                    <div className='head row justify-content-center'>
                        <div className='my-3'  style={{width:"fit-content",color:"white"}}>Facilities Available at the Park</div>
                    </div>
                </div>
                <div className='container my-4'>
                    <div className='row justify-content-center'>
                        {
                            facilities.map(
                                (item, index) => {
                                    return (
                                        <div className='col-lg-3 col-md-4  mx-3 my-3'>
                                            <div className='row mb-2'><img src={item.image} /></div>
                                            <div className='facility'>
                                                <div className='col-12 my-2 facility-heading ps-4 py-3'>{item.name}</div>
                                                <div className='col-12 my-2   px-2  pb-2'>{item.description}</div>
                                            </div>
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
