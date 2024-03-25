import { useState } from 'react'
import './App.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem';
import { MenuList } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios'

function App() {
  const [userFirstName,setUserFirstName] = useState('');
  const [userLastName,setUserLastName] = useState('');
  const [userPrefName,setUserPrefName] = useState('');
  const [userPronoun,setUserPronoun] = useState('');
  const [userEmail,setUserEmail] = useState('');
  const [userPNumber,setUserPNumber] = useState('');
  const [userFaxNumber,setUserFaxNumber] = useState('');
  const [userDepartment,setUserDepartment] = useState('');
  const [address1,setAddress1] = useState('');
  const [address2,setAddress2] = useState('');
  const [city,setCity] = useState('');
  const [province,setProvince] = useState('');
  const [country,setCountry] = useState('');
  const [zip,setZip] = useState('');
  const [managerFirstName,setManagerFirstName] = useState('');
  const [managerLastName,setManagerLastName] = useState('');
  const [managerEmail,setManagerEmail] = useState('');
  const [linkedin,setLinkedin] = useState('');
  const [facebook,setFacebook] = useState('');
  const [other,setOther] = useState('');

  const send = async ()=>{
    try {const response = await axios.post("http://localhost:3000/submit",{
      userFirstName:userFirstName,
      userLastName:userLastName,
      userPrefName:userPrefName,
      userPronoun:userPronoun,
      userEmail:userEmail,
      userPNumber:userPNumber,
      userFaxNumber:userFaxNumber,
      userDepartment:userDepartment,
      address1:address1,
      address2:address2,
      city:city,
      province:province,
      country:country,
      zip:zip,
      managerFirstName:managerFirstName,
      managerLastName:managerLastName,
      managerEmail:managerEmail,
      linkedin:linkedin,
      facebook:facebook,
      other:other
      })
      console.log(response);
  
    }
    catch (error ){
      console.error(error);
    }

  }


  return (
    <>
      <Box mb={5} > 
          User Input
            <div style={{display:'flex' , gap : '20px'}}>
              <TextField id="outlined-basic" label="First Name" variant="outlined" value = {userFirstName} onChange={(event) => setUserFirstName(event.target.value)}/>
              <TextField id="outlined-basic" label="Last Name" variant="outlined" value = {userLastName} onChange={(event) => setUserLastName(event.target.value)}/>
              <TextField id="outlined-basic" label="Preffered Name" variant="outlined" value = {userPrefName} onChange={(event) => setUserPrefName(event.target.value)}/>
              <TextField
                  id="Pronouns"
                  select
                  label="Pronouns"
                  style={{width : "250px"}}
                  value = {userPronoun}
                  onChange={(event) => setUserPronoun(event.target.value)}
                >
                  
                    <MenuItem value = 'He/Him'>He/Him</MenuItem>
                    <MenuItem value = 'She/Her'>She/Her</MenuItem>
                    <MenuItem value = 'They/Them'>They/Them</MenuItem>
                    <MenuItem value = 'Ze/Hir'>Ze/Hir</MenuItem>
                    <MenuItem value = 'He/They'>He/They</MenuItem>
                    <MenuItem value = 'She/They'>She/They</MenuItem>
                    <MenuItem value = 'Prefer not to say'>Prefer not to say</MenuItem>
                    <MenuItem value = 'Other'>Other</MenuItem>
                
                </TextField>
              <br></br>
              <TextField id="outlined-basic" label="Email" variant="outlined" value = {userEmail} onChange={(event) => setUserEmail(event.target.value)}/>
              <TextField id="outlined-basic" label="Phone Number" variant="outlined" value = {userPNumber} onChange={(event) => setUserPNumber(event.target.value)}/>
              <TextField id="outlined-basic" label="Fax Number" variant="outlined" value = {userFaxNumber} onChange={(event) => setUserFaxNumber(event.target.value)}/>
              <br></br>
              <TextField
                  id="Department"
                  select
                  label="Department"
                  style={{width : "250px"}}
                  value ={userDepartment}
                  onChange={(event) => setUserDepartment(event.target.value)}
                >
                  
                    <MenuItem value = 'Engineering/Development'>Engineering/Development</MenuItem>
                    <MenuItem value = 'Product Management'>Product Management</MenuItem>
                    <MenuItem value = 'Sales and Marketing'>Sales and Marketing</MenuItem>
                    <MenuItem value = 'Customer Support/Service'>Customer Support/Service</MenuItem>
                    <MenuItem value = 'Human Resources'>Human Resources</MenuItem>
                    <MenuItem value = 'Finance and Accounting'>Finance and Accounting</MenuItem>
                    <MenuItem value = 'Information & Technology'>Information & Technology</MenuItem>
                    <MenuItem value = 'Research & Development'>Research & Development</MenuItem>
                    <MenuItem value = 'Operations'>Operations</MenuItem>
                    <MenuItem value = 'Data Science/Analytics'>Data Science/Analytics</MenuItem>
                 
                </TextField>
          </div>
          </Box> 
          <Box mb = {5}>
          Work Address
          <div style={{display:'flex' , gap : '20px'}}>
            <TextField id="outlined-basic" label="Address Line 1" variant="outlined" value = {address1} onChange={(event) => setAddress1(event.target.value)}/>
            <TextField id="outlined-basic" label="Address Line 2" variant="outlined" value = {address2} onChange={(event) => setAddress2(event.target.value)}/>
            <TextField id="outlined-basic" label="City" variant="outlined" value = {city} onChange={(event) => setCity(event.target.value)}/>
            <br></br>
            <TextField id="outlined-basic" label="Province" variant="outlined" value = {province} onChange={(event) => setProvince(event.target.value)}/>
            <TextField id="outlined-basic" label="Country" variant="outlined" value = {country} onChange={(event) => setCountry(event.target.value)}/>
            <TextField id="outlined-basic" label="Zip Code" variant="outlined" value = {zip} onChange={(event) => setZip(event.target.value)}/>
          </div>
          </Box>
          <Box mb = {5}>
          My Manager
          <div style={{display:'flex' , gap : '20px'}}>
          <TextField id="outlined-basic" label="First Name" variant="outlined" value = {managerFirstName} onChange={(event) => setManagerFirstName(event.target.value)}/>
          <TextField id="outlined-basic" label="Last Name" variant="outlined" value = {managerLastName} onChange={(event) => setManagerLastName(event.target.value)}/>
          <TextField id="outlined-basic" label="Email Address" variant="outlined" value = {managerEmail} onChange={(event) => setManagerEmail(event.target.value)}/>
          </div>
          </Box>
          <Box mb = {5}>
          Social Profile
          <div style={{display:'flex' , gap : '20px'}}>
          <TextField id="outlined-basic" label="Linkdin" variant="outlined" value = {linkedin} onChange={(event) => setLinkedin(event.target.value)}/>
          <TextField id="outlined-basic" label="Facebook" variant="outlined" value = {facebook} onChange={(event) => setFacebook(event.target.value)}/>
          <TextField id="outlined-basic" label="Other" variant="outlined" value = {other} onChange={(event) => setOther(event.target.value)}/>
          </div>  
          </Box>
          <Button variant="contained" onClick = {send}>Submit</Button>
    </>
  )
}

export default App
