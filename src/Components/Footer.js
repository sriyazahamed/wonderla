import React, { Component } from 'react';
import "../Styles/Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer mt-5 mb-0" >
                <div className="container fluid mb-0" >
                    <div className='row justify-content-center my-1 '>
                        <div className=' cd mt-2' style={{fontWeight:'bold'}}> Contact Details</div>
                    </div>
                    <div className='row justify-content-center my-1 '>
                        <div className=' cd mt-2'><i class="bi bi-geo-alt"></i> 28th k.m., Mysore Road, Bangalore - 562109</div>
                    </div>
                    <div className='row justify-content-center my-1'>
                        <div className='cd'> <i class="bi bi-envelope"></i>  mail.blr@wonderla.com</div>
                    </div>
                    <div className='row justify-content-center my-1 '>
                        <div className='cd '><i class="bi bi-telephone"></i>  +91 80 37230333 | +91 80 3507 3966</div>
                    </div>
                </div>
            </div>
        )
    }
}
