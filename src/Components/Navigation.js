import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import "../Styles/Navigation.css";
import axios from 'axios';
const API_URL = require('../constants').API_URL;

const customStyle = {
    content: {
        marginTop: '150px',
        maxWidth: '532px',
        background: 'white',
        zIndex: '10000000',
        padding: '28px',
        boxShadow: "5px 6px 7px #888888",
        transition: "0.3s",
        backgroundColor: "rgb(169 173 209)",
    }
}

Modal.setAppElement('#root')

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            name:'' ,
            phNo: "",
            mailId: "",
            query: ""
        }
    }

    goToPage = (path) => {
        this.props.history.push(path);
    }

    openModal = () => {
        this.setState({
            isModalOpen: true
        });
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false
        });
    }

    handleChange = (e, field) => {
        const val = e.target.value;
        this.setState({
            [field]: val,
        })
    }

    sendHandler = () => {
        
        const { name, phNo, mailId, query } = this.state;
        console.log(this.state);
        const req = {
            name,
            phNo,
            mailId,
            query
        }
        axios({
            method: 'POST',
            url: `${API_URL}/sendQuery`,
            headers: { 'Content-Type': 'application/json' },
            data: req
        }).then(result => {
            this.setState({
                name:"",
                phNo:"",
                mailId:"",
                query:""
            })
            alert("Query Sent Successfully")
            this.setState({
                isModalOpen: false
            });
        }).catch(err => {
            alert("Query Not Sent!!!\n Enter All the fields")
            console.log(err);
        });
    }

    render() {
        const { isModalOpen, name, phNo, mailId, query } = this.state;
        return (
            <div class="wholeNav">
                <Modal isOpen={isModalOpen} style={customStyle} className=" container">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-10' style={{ fontFamily: "emoji", fontStyle: "inherit", fontWeight: "bold", fontSize: "x-large" }}>Send us your Query</div>
                            <div style={{ color: "white", fontWeight: "bold" }} onClick={this.closeModal} className='col-2 btn btn-danger'>X</div>
                        </div>
                        <form className='row mt-4'>
                            <div className="row my-2">
                                <div className='col-5 mod-title'>Name</div>
                                <div className='col-6'><input required value={name} onChange={(e) => this.handleChange(e, 'name')} /></div>
                            </div>
                            <div className="row my-2">
                                <div className='col-5 mod-title'>Contact No.</div>
                                <div className='col-6' type="text"><input required value={phNo} onChange={(e) => this.handleChange(e, 'phNo')} /></div>
                            </div>
                            <div className="row my-2">
                                <div className='col-5 mod-title'>Email Id</div>
                                <div className='col-6' type="email"><input required value={mailId} onChange={(e) => this.handleChange(e, 'mailId')} /></div>
                            </div>
                            <div className="row my-2">
                                <div className='col mod-title' >Enter your Query below</div>
                            </div>
                            <div className='row'>
                                <textarea rows="4" cols="50" name="comment" form="usrform" required value={query} onChange={(e) => this.handleChange(e, 'query')}>
                                </textarea>
                            </div>
                            <div className='row justify-content-end'>
                                <div className='btn col-4 mt-3 btn-secondary' onClick={this.sendHandler}>Send</div>
                            </div>
                        </form>

                    </div>
                </Modal>
                <nav class=" navbar navbar-expand-md navbar-light bg- navigation">
                    <div class="container ">
                        <a class="navbar-brand me-5 " href='' onClick={() => { this.goToPage("/Home") }}><img class="logo" src={require("../Assets/logo.png")} /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                <li class="nav-item dropdown me-3">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Rides
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href='' onClick={() => { this.goToPage("/Rides?type=land") }}>Land Rides</a></li>
                                        <li><a class="dropdown-item" href='' onClick={() => { this.goToPage("/Rides?type=water") }}>Water Rides</a></li>
                                        <li><a class="dropdown-item" href='' onClick={() => { this.goToPage("/Rides?type=thrill") }}>High Thrill Rides</a></li>
                                        <li><a class="dropdown-item" href='' onClick={() => { this.goToPage("/Rides?type=kids") }}>Kids Rides</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item me-3">
                                    <a class="nav-link" href='' onClick={() => { this.goToPage("/Facilities") }}>Facilities</a>
                                </li>
                                <li class="nav-item me-3">
                                    <a class="nav-link ticket" href='' onClick={() => { this.goToPage("/Ticket") }}>Ticket Prices</a>
                                </li>
                                <li class="nav-item me-3">
                                    <a class="nav-link" href="" onClick={() => { this.goToPage("/Location")}}>Location</a>
                                </li>
                                <li class="nav-item contact">
                                    <a class="btn btn-primary" style={{ cursor: "pointer" }} onClick={this.openModal}>Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="bottom">
                </div>
            </div>
        )
    }
}
export default withRouter(Navigation)
