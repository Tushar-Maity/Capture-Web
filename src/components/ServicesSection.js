import React from 'react';

import { About, Description, Image, Hide } from '../styles';
import styled from 'styled-components';
//Importing icons and images
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
    
const ServicesSection = () => {
    return (
        <Services>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt=""/>
                            <h3>Efficient</h3>
                        </div>
                        <p>lorem dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt=""/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>lorem dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt=""/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>lorem dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt=""/>
                            <h3>Affordable</h3>
                        </div>
                        <p>lorem dolor sit amet.</p>
                    </div>
                </div>
            </Description>
            <Image> 
                <img src={home2} alt=""/>
            </Image>
        </Services>
    )
}

const Services = styled(About)`

`;

export default ServicesSection
