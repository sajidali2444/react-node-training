import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from '@mui/material';
import React from 'react';
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const Customer = () => {
  //=============================================
  const dataToBeSend = {
    first_name: '',
    last_name: '',
    email: '',
  };
  //=============================================
  // useState function
  //1. it takes initial state
  //2. it will return initial state value in state variable
  //3. it will return state function that will use to update state variable
  //4. when state update then useState will trigger react rendring process.
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  //=============================================

  //=============================================
  const sendData = async data => {
    const formData = { first_name: firstName, last_name: lastName, email };
    console.log(formData);
    const response = await fetch('http://localhost:3001/customers', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    //const response = await fetch(`/formdata`, data);
    //use proxy in package.json or intall npm package of http-prosy-middlware
  };
  //=============================================
  const clearInputFeilds = () => {
    setLastName('');
    setFirstName('');
    setEmail('');
  };
  //=============================================

  return (
    <div
      style={{
        width: '78.vw',
        height: '100%',
        paddingTop: '2rem',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(18px)',
        display: 'flex',
        paddingLeft: '2%',
        background: '-webkit-linear-gradient(to right, #00D4FF, #00FFAA)',
        background: 'linear-gradient(to right, #00D4FF, #00FFAA)',
      }}
    >
      <FormGroup style={{ width: '40rem' }}>
        <FormControl>
          <InputLabel>First Name</InputLabel>
          <Input
            onChange={item => setFirstName(item.target.value)}
            name="first_name"
            value={firstName}
          ></Input>
        </FormControl>
        <FormControl>
          <InputLabel>Last Name</InputLabel>
          <Input
            onChange={item => setLastName(item.target.value)}
            name="last_name"
            value={lastName}
          ></Input>
        </FormControl>
        <br />
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={item => setEmail(item.target.value)}
            name="email"
            value={email}
          ></Input>
        </FormControl>
      </FormGroup>
      <Button
        style={{
          position: 'relative',
          background: 'black',
          color: 'white',
        }}
        onClick={() => {
          if (firstName && lastName && validateEmail(email)) {
            sendData();
            clearInputFeilds();
          }
          if (email == '' || !validateEmail(email)) {
            window.alert('Fill email properly');
          }
          if (lastName == '') {
            window.alert('Fill Last name properly');
          }
          if (firstName == '') {
            window.alert('Fill First Name properly');
          }
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default Customer;
