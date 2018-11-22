import React from 'react';
import { List, Button, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './GetStarted.scss';

import logo from '../resources/img/hemios-logo.svg';
import video from '../resources/img/video-placeholder.png';

const GetStarted = () => {
  return (
    <>
      <div className="GetStarted">
        <div className="heading">
          <h2>How to get started with</h2>
          <Image src={logo} />
        </div>
        <div className="steps-n-video">
          <List className="stps">
            <div className="step">
              <span className="circle">1</span>
              <p>
                Choose an industry you find promising and select companies
                within this industry.
              </p>
            </div>
            <div className="step">
              <span className="circle">2</span>
              <p>
                Select financial indicators, so-called KPIs, that you find most
                important or explore our recommended indicators, learn what they
                mean
              </p>
            </div>
            <div className="step">
              <span className="circle">3</span>
              <p>
                Easily compare companies based on their indicators Learn how to
                interpret the data and find undervalued companies
              </p>
            </div>
          </List>
          <div className="video">
            <img src={video} size="large" />
            <div className="cta">
              <NavLink to="/dashboard">
                <Button className="primary huge">Try it out!</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
