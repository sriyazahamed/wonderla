import React, { Component } from 'react'
import "../Styles/Home.css";
import { withRouter } from 'react-router-dom';

class Home extends Component {
    goToRidesPage=(path)=>{
        this.props.history.push(path);
    }
    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner carous">
                        <div class="carousel-item active " data-bs-interval="3000">
                            <img src={require("../Assets/Carous1.jpg")} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item"  data-bs-interval="3000">
                            <img src={require("../Assets/Carous2.jpg")} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item"  data-bs-interval="3000">
                            <img src={require("../Assets/Carous3.jpg")} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div className='container homeWidgets my-4'>
                    <div className='row'>
                        <div className='mx-2 mx-md-0 col-md-4 col-12'>
                            <div className='row my-3 WidgetHead'>The Rides of Change</div>
                            <div className='row my-3'>Looking for fun things to do in Bengaluru today? There’s no better place to experience something new together than Wonderla Bengaluru! Make sure you check out our water rides, land rides and our most thrilling attractions in Bengaluru.</div>
                            <div className='row my-3'>Keep a keen eye out for timings of various other fun programs across the park – be it the next wave at the Wave Pool, or the next dance at the Rain Disco, or the next show at the Adventures of Chikku. Your visit should be a non-stop fun ride.</div>
                        </div>
                        <div className=' col-md-8 col-12'>
                            <div className='row'><img src={require("../Assets/rollar.jpg")} style={{cursor:"pointer"}} onClick={()=>{this.goToRidesPage("\Rides?type=thrill")}} /></div>
                        </div>
                    </div>
                </div>

                <div className='container homeWidgets my-4'>
                    <div className='row'>
                        <div className=' col-md-8 col-12'>
                            <div className='row'><img src={require("../Assets/carous1_big.jpg")} style={{cursor:"pointer"}} onClick={()=>{this.goToRidesPage("\Rides?type=thrill")}} /></div>
                        </div>
                        <div className='mx-2 mx-md-0 col-md-4 col-12'>
                            <div className='row my-3 WidgetHead'>The Unmissables</div>
                            <div className='row my-3'>We're sure you'll love all our rides, but there are some that HAVE to experience. Make sure that experience thrill at it's peak with these rides, only at our water park in Bengaluru!</div>
                            <div className='row my-3'> RECOIL -  Experience a new dimension of thrill, defy gravity at 80 kmph.</div>
                            <div className='row my-3'>KORNETO - A thrilling water slide in Bengaluru like you’ve never seen before.</div>
                            <div className='row my-3'>Also experience thrill on rides like Insanity, Maverick, Y-scream, Boomerang, Harakiri and Twisters.</div>
                        </div>
                    </div>
                </div>

                <div className='container homeWidgets my-4'>
                    <div className='row'>
                        <div className='mx-2 mx-md-0 col-md-4 col-12'>
                            <div className='row my-3 WidgetHead'>Ride Down the Memory Lane</div>
                            <div className='row my-3'>When you make memories together, it is only fair you get to take them home. Shop for souvenirs, toys and more, at from our stores inside the park.</div>
                            <div className='row my-3'>Get your moments of rush clicked and framed for life, on rides like Recoil, Wondersplash, Dungeon Ride and more!</div>
                            <div className='row my-3'>Capture your moment every time you make a splash at any water ride, with Digiphoto! </div>
                        </div>
                        <div className=' col-md-8 col-12'>
                            <div className='row'><img src={require("../Assets/jumpingFrog.jpg")} style={{cursor:"pointer"}} onClick={()=>{this.goToRidesPage("\Rides?type=kids")}}/></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default withRouter(Home);