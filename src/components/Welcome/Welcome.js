import React from 'react';
import Categories from '../Categories/Categories';
import classes from './Welcome.module.css';
const Welcome = () => {
  return (
    <div className={classes.welcome_container}>
      <div className={classes.box_one}>
        <h1>Categories</h1>
        <Categories />
      </div>
      <div className={classes.box_two}>
        <h1>Welcome to BroadcastHub Nigeria</h1>
        <p>
          BroadcastHub is Nigeria's leading supplier of broadcast products. If
          you are looking for FM broadcast transmitters, TV broadcast
          transmitters, broadcast antennas, audio mixing consoles, cameras,
          videomixers, lights, radio and TV play-out systems or any kind of
          broadcast equipment, you will surely find it here! If not, don't
          hesitate to contact us. We will get it for you!
        </p>
      </div>
    </div>
  );
};

export default Welcome;
