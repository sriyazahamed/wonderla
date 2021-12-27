import React, { Component } from 'react'

export default class Location extends Component {
    render() {
        return (
            <div>
                <div className='container my-5'>
                    <div className='row justify-content-center'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1341359743174!2d77.39882851473885!3d12.834607590945836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae47c7ffab735b%3A0x5e52a4e8d0a84438!2sWonderla%20Amusement%20Park%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1640604495378!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                
            </div>
        )
    }
}
