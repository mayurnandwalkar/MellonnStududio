import React from 'react'
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { MenuItem, } from '@mui/material';
const ContactUsComponent = () => {
    const theme = createTheme({
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiInput-underline:before': {
                            borderBottomColor: 'black', // Normal state
                        },
                        '& .MuiInput-underline:after': {
                            borderBottomColor: 'black', // Focus state
                        },
                    },
                },
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        '&.Mui-focused': {
                            color: 'black', // Label color on focus
                        },
                    },
                },
            },
        },
    });
    return (
        <>
            <ThemeProvider theme={theme}>
                <section className='contact-us-section'>
                    <div className='container'>
                        <div className="text-center mt-5">
                            <h1>Hey there!</h1>
                            <p>We’re more than happy to have a conversation.</p>
                        </div>
                        {/* <div className='row mt-5 p-4'> */}
                        <div className="row mt-5 p-lg-5 p-4 p-sm-2">
                            <div className='col-sm-6 col-12 mb-4'>
                                <div className='mx-4'>
                                    <TextField id="standard-basic" label="First Name" variant="standard" fullWidth />
                                </div>
                            </div>
                            <div className='col-sm-6 col-12 mb-4'>
                                <div className='mx-4'>
                                    <TextField id="standard-basic" label="Last Name" variant="standard" fullWidth />
                                </div>
                            </div>
                            <div className='col-sm-6 col-12 mb-4'>
                                <div className='mx-4'>
                                    <TextField id="standard-basic" label="Email ID" variant="standard" fullWidth />
                                </div>
                            </div>
                            <div className='col-sm-6 col-12 mb-4'>
                                <div className='mx-4'>
                                    <TextField id="standard-basic" label="Phone Number" variant="standard" fullWidth />
                                </div>
                            </div>
                            <div className='col-sm-6 col-12 mb-4'>
                                <div className='mx-4'>
                                    <TextField id="standard-basic" label="Company Name" variant="standard" fullWidth />
                                </div>
                            </div>
                            <div className='col-sm-6 col-12 mb-4'>
                                <div className='mx-4'>
                                    <TextField
                                        id="standard-select-department"
                                        select
                                        label="Your Department"
                                        variant="standard"
                                        fullWidth
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </TextField>
                                </div>
                            </div>
                            <div className='col-12 mb-4'>
                                <div className='mx-4'>
                                    <TextField
                                        id="standard-select-source"
                                        select
                                        label="Where Did You Hear About Us"
                                        variant="standard"
                                        fullWidth
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </TextField>
                                </div>
                            </div>
                            <div className='col-12 mb-4'>
                                <div className='mx-4'>
                                    <TextField id="standard-basic" label="Message" variant="standard" fullWidth />
                                </div>
                            </div>
                        </div>
                        <div className='text-center mb-4'>
                            <button className='cst-get-in-tout-btn btn-outline text-uppercase'>Submit</button>
                        </div>
                    </div>
                </section>
            </ThemeProvider>
        </>
    )
}

export default ContactUsComponent