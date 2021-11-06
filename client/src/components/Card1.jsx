import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@mui/material";
import React from "react";

const Card1 = () => {
  //=============================================
  const dataToBeSend = {
    name: "",
    username: "",
    email: "",
    phone: "",
    id: "",
  };
  //=============================================
  const [data, setData] = React.useState(dataToBeSend);
  //=============================================
  const inputGetter = (item) => {
    setData({ ...data, [item.target.name]: item.target.value });
    console.log(data);
  };
  //=============================================
  const sendData = async (data) => {
    const response = await fetch(`/formdata`, data);
    //use proxy in package.json or intall npm package of http-prosy-middlware
  };
  //=============================================
  return (
    <div
      style={{
        width: "78.vw",
        height: "100%",
        paddingTop: "2rem",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(18px)",
        display: "flex",
        paddingLeft: "2%",
        background: "-webkit-linear-gradient(to right, #00D4FF, #00FFAA)",
        background: "linear-gradient(to right, #00D4FF, #00FFAA)",
      }}
    >
      <FormGroup style={{ width: "40rem" }}>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(item) => inputGetter(item)} name="name"></Input>
        </FormControl>
        <br />
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(item) => inputGetter(item)} name="username"></Input>
        </FormControl>
        <br />
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(item) => inputGetter(item)} name="email"></Input>
        </FormControl>
        <br />
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(item) => inputGetter(item)} name="phone"></Input>
        </FormControl>
        <br />
        <FormControl>
          <InputLabel>ID</InputLabel>
          <Input onChange={(item) => inputGetter(item)} name="id"></Input>
        </FormControl>
        <br />
      </FormGroup>
      <Button
        style={{
          position: "relative",
          top: "267px",
          left: "44px",
          height: "3rem",
          background: "black",
          color: "white",
        }}
        onClick={() => sendData()}
      >
        Click to enter data
      </Button>
    </div>
  );
};

export default Card1;
