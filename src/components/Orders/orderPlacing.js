import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import styled from '@emotion/styled';


export default function PlaceOrder() {
    const {Cart}=React.useContext(AuthContext)
    const navigate=useNavigate()
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [Name,setName]=React.useState("")
    const [Phone,setPhone]=React.useState("")
    const [Pincode,setPincode]=React.useState("")
    const [Locality,setLocality]=React.useState("")
    const [Address,setAddress]=React.useState("")
    const [City,setCity]=React.useState("")
    const [State,setState]=React.useState("")
    const [Landmark,setLandmark]=React.useState("")
    const [Alternate,setAlternate]=React.useState("")
    const [AddressType,setAddressType]=React.useState("Home")


    return (
        <div>
            < div style={{ height:"75vh",width:"50vw" ,backgroundColor:"white" ,margin:"auto",marginTop:"2vh"}}>
            <CssBaseline />
            <Container maxWidth="sm">
            <header>
                <div style={{backgroundColor:"#047BD5" , height:"8vh" ,width:"85%" ,display:"flex" }}>
                    <h3 style={{color:"white" ,textAlign:"justify" ,marginLeft:"2vw"}}>Delivery Address</h3>
                </div>
            </header>
            <Box sx={{  height: '100vh' }} >


            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <div style={{display:"flex" ,justifyContent:"space-between"}} >
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        onChange={(e)=>setCity(e.target.value)}
                        label="City/District/Town"
                            
                        />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">10 digit phone number</InputLabel>

                        <OutlinedInput
                            id="outlined-adornment-weight"
                            onChange={(e)=>setPhone(e.target.value)}
                            label="10 digit mobile number"
                            
                        />
                        </FormControl>
                    </div>


                    <div style={{display:"flex"}} >
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Pincode</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            onChange={(e)=>setPincode(e.target.value)}
                            label="Pincode"
                            
                        />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Locality</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            onChange={(e)=>setLocality(e.target.value)}
                            label="Locality"
                            
                        />
                        </FormControl>
                    </div>

                <TextField
                    id="outlined-multiline-flexible"
                    label="Address"
                    multiline
                    maxRows={3}
                    minRows={3}
                    style={{width:"96.5%",marginLeft:"2%"}}
                    onChange={(e)=>setAddress(e.target.value)}
                />


                <div style={{display:"flex"}} >
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">City/District/Town</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-weight"
                    onChange={(e)=>setCity(e.target.value)}
                    label="City/District/Town"
                        
                    />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">State</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        onChange={(e)=>setState(e.target.value)}
                        label="State"
                    />
                    </FormControl>
                </div>
                
                <div style={{display:"flex"}} >
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Landmark (Optional)</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        label="Landmark (Optional)"
                        onChange={(e)=>setLandmark(e.target.value)}
                    />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Alternate Phone (Optional)</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        label="Alternate Phone (Optional)"
                        onChange={(e)=>setAlternate(e.target.value)}
                        
                    />
                    </FormControl>


                    </div>
                    <div style={{margin:"4% 0 0 2%"}} >
                        <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Address Type</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Homme" style={{fontSize:"0.2rem"}} control={<Radio />} onClick={(e)=>setAddress("Home")} label="Home(all day delivery )" />
                                    <FormControlLabel value="Work" control={<Radio />} label="Work( 10AM - 5PM )" onClick={(e)=>setAddress("Office")} />
                                </RadioGroup>
                        </FormControl>     
                    </div>      
                    <div style={{display:"flex" ,margin:"4% 0 0 2%"}}>
                        <Button  className="mybutton" variant='contained' style={{backgroundColor:ButtonColor ,width:"45%",height:"10%"}} onClick={handlebuttonclick} > {Buttontext}</Button>
                        <Button variant='text' style={{width:"50%",height:"10%"}}> Cancel</Button>
                    </div>
                </div>
                <div>

                </div>

            

            </Box>
            </Box>
            </Container>
            </div>
                <Payment/>
        </div>
        
    );
    }