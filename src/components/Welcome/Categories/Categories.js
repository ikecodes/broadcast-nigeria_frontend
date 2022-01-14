import React from 'react';
import { Accordion } from 'react-bootstrap';
import classes from './Categories.module.css';
const Categories = () => {
  return (
    <div>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>TRANSMISSION:</Accordion.Header>
          <Accordion.Body>
            <div className={classes.menu_box}>
              <ul>
                <li>Drive-In Cinema FM Transmitter Sets</li>
                <li>FM Transmitters</li>
                <li>Digital Radio DAB/DAB+</li>
                <li>TV Transmitters + Accessories</li>
                <li>AM / SW Transmitters</li>
                <li>RDS & Stereo Encoder</li>
                <li>Satellite Equipment</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>RADIO EQUIPMENT:</Accordion.Header>
          <Accordion.Body>
            <div className={classes.menu_box}>
              <ul>
                <li>Drive-In Cinema FM Transmitter Sets</li>
                <li>FM Transmitters</li>
                <li>Digital Radio DAB/DAB+</li>
                <li>TV Transmitters + Accessories</li>
                <li>AM / SW Transmitters</li>
                <li>RDS & Stereo Encoder</li>
                <li>Satellite Equipment</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>TV EQUIPMENT:</Accordion.Header>
          <Accordion.Body>
            <div className={classes.menu_box}>
              <ul>
                <li>Drive-In Cinema FM Transmitter Sets</li>
                <li>FM Transmitters</li>
                <li>Digital Radio DAB/DAB+</li>
                <li>TV Transmitters + Accessories</li>
                <li>AM / SW Transmitters</li>
                <li>RDS & Stereo Encoder</li>
                <li>Satellite Equipment</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header>MISCELLANEOUS:</Accordion.Header>
          <Accordion.Body>
            <div className={classes.menu_box}>
              <ul>
                <li>Drive-In Cinema FM Transmitter Sets</li>
                <li>FM Transmitters</li>
                <li>Digital Radio DAB/DAB+</li>
                <li>TV Transmitters + Accessories</li>
                <li>AM / SW Transmitters</li>
                <li>RDS & Stereo Encoder</li>
                <li>Satellite Equipment</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Categories;
