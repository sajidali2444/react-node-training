import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';

export default function BasicTable() {
  const IOSSwitch = styled(props => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor:
            theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

  //===================================================================================================
  const fetchData = async () => {
    const response = await fetch(`http://localhost:3001/customers`);
    setCustomers(await response.json());
    //console.log(await response.json());

    //use proxy in package.json or intall npm package of http-prosy-middlware
  };
  const [customers, setCustomers] = React.useState([]);
  //--------------------------------------------------------
  React.useEffect(() => {
    fetchData();
  }, []);
  //=======================================================================================================

  console.log('custoemr data => ', customers);
  const setCustomerStatus = async (event, custotermData) => {
    console.log('custotermData => ', custotermData);
    const currentStatus = event.target.checked;
    const result = await fetch(`http://localhost:3001/customers`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        id: custotermData.customer_id,
        status: currentStatus,
      }),
    });

    //`http://localhost:3001/customers/${custotermData.customer_id}/${currentStatus}`,
    if (result && result.ok) {
      const activeCustomers = customers.filter(
        item => item.customer_id !== custotermData.customer_id,
      );
      console.log('final result => ', activeCustomers);
      setCustomers(activeCustomers);
    }
  };

  //========================================================================================================
  return (
    <>
      <h1>Total Records: {customers.length}</h1>

      <TableContainer
        component={Paper}
        style={{
          width: '100%',
          height: '100%',
          paddingTop: '2rem',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(18px)',
          display: 'flex',
          justifyContent: 'center',
          background: '-webkit-linear-gradient(to right, #00D4FF, #00FFAA)',
          background: 'linear-gradient(to right, #00D4FF, #00FFAA)',
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right" style={{ textAlign: 'center' }}>
                First Name
              </TableCell>
              <TableCell align="right" style={{ textAlign: 'center' }}>
                Last Name
              </TableCell>
              <TableCell align="right" style={{ textAlign: 'center' }}>
                Email
              </TableCell>
              <TableCell align="right" style={{ textAlign: 'center' }}>
                Country
              </TableCell>
              <TableCell align="right" style={{ textAlign: 'center' }}>
                City
              </TableCell>
              <TableCell align="right" style={{ textAlign: 'center' }}>
                Is active
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers?.map(cust => (
              <TableRow key={cust.customer_id}>
                <TableCell align="right" style={{ textAlign: 'center' }}>
                  {cust.first_name}
                </TableCell>
                <TableCell align="right" style={{ textAlign: 'center' }}>
                  {cust.last_name}
                </TableCell>
                <TableCell align="right" style={{ textAlign: 'center' }}>
                  {cust.email}
                </TableCell>
                <TableCell align="right" style={{ textAlign: 'center' }}>
                  {cust.country}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ textAlign: 'center' }}
                >
                  {cust.city}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ textAlign: 'center' }}
                >
                  <FormControlLabel
                    control={
                      <IOSSwitch sx={{ m: 1 }} defaultChecked={cust.active} />
                    }
                    onChange={event => setCustomerStatus(event, cust)}
                    label=""
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
