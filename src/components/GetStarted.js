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
          <h1>How to get started with</h1>
          <Image src={logo} />
        </div>
        <div className="steps-n-video">
          <List>
            <List.Item class="step">
              <span className="circle">1</span>
              <p>
                Choose an industry you find promising and select companies
                within this industry.
              </p>
            </List.Item>
            <List.Item class="step">
              <span className="circle">2</span>
              Select financial indicators, so-called KPIs, that you find most
              important or explore our recommended indicators, learn what they
              mean
            </List.Item>
            <List.Item class="step">
              <span className="circle">3</span>
              Easily compare companies based on their indicators Learn how to
              interpret the data and find undervalued companies
            </List.Item>
          </List>
          <div>
            <Image src={video} size="large" />
            <NavLink to="/dashboard">
              <Button className="primary large">Try it out!</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
