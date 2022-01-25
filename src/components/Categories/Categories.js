import React from 'react';
import { Accordion } from 'react-bootstrap';
import { groups } from '../../constants/data';
import Category from './Category/Category';
import classes from './Categories.module.css';
const Categories = () => {
  return (
    <div>
      <Accordion defaultActiveKey='-1'>
        {groups.map((item, index) => (
          <Accordion.Item key={item.group} eventKey={`${index}`}>
            <Accordion.Header>{item.group}:</Accordion.Header>
            <Accordion.Body>
              <div className={classes.menu_box}>
                <Category categories={item.categories} />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Categories;
