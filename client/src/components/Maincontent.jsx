import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { UserContext } from "../UserContext";
import Customers from "./Customers";
import EditCustomer from "./EditCustomer";
const Maincontent = () => {
  const history = useHistory();
  const {
    userDetail: { name },
    setUserDetail,
  } = React.useContext(UserContext);

  return (
    <div>
      <h1>Name: {name}</h1>
      <button
        onClick={() => {
          setUserDetail({});
          history.push("/");
        }}
      >
        Logout
      </button>
      <Switch>
        <Route path="/" exact>
          <h1>Page 1</h1>
        </Route>
        {
          /*Object.keys(userDetail).length !== 0*/ name && (
            <>
              <Route path="/customer" exact>
                <h1>page 2</h1>
              </Route>
              <Route path="/customers" exact component={Customers} />
              <Route path="/customers/:id" exact component={EditCustomer} />
            </>
          )
        }
      </Switch>
    </div>
  );
};

export default Maincontent;
