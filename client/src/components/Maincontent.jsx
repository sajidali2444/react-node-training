import React from 'react';
import Card from './Card';
import { Route, Switch, NavLink } from 'react-router-dom';
import Customer from './Customer';
import Customers from './Customers';
import EditCustomer from './EditCustomer';

const Maincontent = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Card} />
        <Route path="/customer" exact component={Customer} />
        <Route path="/customers" exact component={Customers} />
        <Route path="/customers/:id" exact component={EditCustomer} />
      </Switch>
    </div>
  );
};

export default Maincontent;
