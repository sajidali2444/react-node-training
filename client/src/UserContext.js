/*
import React from 'react';
const UserContext = React.createContext();
export { UserContext };
*/

import React from 'react';
export const UserContext = React.createContext();
const CustomProvider = ({ children }) => {
  const [userDetail, setUserDetail] = React.useState({});
  React.useEffect(() => {
    setUserDetail({
      firstName: 'Sajid',
      lastName: 'ali',
      email: 'sajid@gmail.com',
      name: 'Sajid Ali',
    });
  }, []);
  return (
    <UserContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserContext.Provider>
  );
};
export { CustomProvider };
//export { UserContext, UserProvider };
