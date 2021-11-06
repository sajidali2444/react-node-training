import React from 'react';
import Card from './Card';
import { Route, Switch, NavLink } from 'react-router-dom';
import Card1 from './Card1';
import Card2 from './Card2';

const Maincontent = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Card} />
        <Route path="/add-user" exact component={Card1} />
        <Route path="/all-users" exact component={Card2} />
      </Switch>
    </div>
  );
};

export default Maincontent;
