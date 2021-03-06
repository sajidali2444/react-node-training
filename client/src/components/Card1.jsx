import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from '@mui/material';
import React from 'react';

const Card1 = () => {
  //=============================================
  const dataToBeSend = {
    first_name: '',
    last_name: '',
    email: '',
  };
  //=============================================
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
          ></Input>
        </FormControl>
        <FormControl>
          <InputLabel>Last Name</InputLabel>
          <Input
            onChange={item => setLastName(item.target.value)}
            name="last_name"
          ></Input>
        </FormControl>
        <br />
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={item => setEmail(item.target.value)}
            name="email"
          ></Input>
        </FormControl>
      </FormGroup>
      <Button
        style={{
          position: 'relative',
          background: 'black',
          color: 'white',
        }}
        onClick={() => sendData()}
      >
        Save
      </Button>
    </div>
  );
};

export default Card1;
