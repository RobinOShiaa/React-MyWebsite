import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Slider.css';

const Slider = () => {
    return (
     
            <AwesomeSlider className="slider">
                <div className="sliderContent" style={{ backgroundColor: '#618dff' }}>
                    <div className="sliderTitle">DCUGO</div>
                    <div className="sliderText">
                        A Unity based mobile application that directs students around a 3D map interface of DCU campus and will be guided to their next lecture based on the student’s course code, year and timetable
                    </div>
                    <div className="view btn"><a href='https://github.com/mcloue25/CA326'>View Github Repository</a></div>
                </div>

                <div className="sliderContent" style={{ backgroundColor: '#5f00c4' }}>
                    <div className="sliderTitle">Web Scrapers</div>
                    <div className="sliderText">
                        
                        An automated webscraping system. Data is sourced from thirty eight sites which is stored in a SQL database and is monitored through a django web framework, testing is automated with jenkins
                        
                    </div>
                    <div className="view btn"><a href='https://github.com/gillmullen/Datas_V2'>View Github Repository</a></div>
                </div>

                <div className="sliderContent" style={{ backgroundColor: '#ce74bc' }}>
                    <div className="sliderTitle">Mylio</div>
                    <div className="sliderText">
                       
                        Android application that records a user’s grocery produce via image recognition of receipts and aims to prescribe recipes to the user based off the perceived data
                       
                    </div>
                    <div className="view btn"> <a href='https://github.com/RobinOShiaa/2020-ca400-oshear23'>View Github Repository</a></div>
                </div>

                <div className="sliderContent" style={{ backgroundColor: '#ff6c6c' }}>
                    <div className="sliderTitle">Chat Application</div>
                    <div className="sliderText">
                        
                        Web server chat application using web sockets, users can login with their own username and join a room by giving its name from there they can send messages to other users in the room and send their current location
                      
                    </div>
                    <div className="view btn"><a href='https://github.com/RobinOShiaa/Chat-Application'>View Github Repository  </a></div>
                </div>

                <div className="sliderContent" style={{ backgroundColor: '#44cc44' }}>
                    <div className="sliderTitle">Task Manager Application</div>
                    <div className="sliderText">
                        
                        Simple web server for handling http requests and parsing json data received. a visitor to the site can create an account, update their profile picture or account details. all accounts have their own authentication token represented by a json web token their details are stored on a mongodB server
                       
                    </div>
                    <div className="view btn"><a href='https://github.com/RobinOShiaa/Task_Manager_App'>View Github Repository </a></div>
                </div>
            </AwesomeSlider>

    );
}

export default Slider;