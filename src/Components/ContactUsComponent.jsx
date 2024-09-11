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
                            borderBottomColor: '#CDCDCD', // Normal state
                        },
                        '& .MuiInput-underline:after': {
                            borderBottomColor: '#CDCDCD', // Focus state
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
                        <div className="row mt-5 p-lg-5 p-4 p-sm-2">
                            <div className='col-sm-6 col-12 mb-4'>
                                <div class="mx-2 mx-md-5">
                                    <TextField id="standard-basic" label="first name" variant="standard" fullWidth />
                                </div>
                            </div>
                            <div className='col-sm-6 col-12 mb-4'>
                                <div class="mx-2 mx-md-5">
                                    <TextField id="standard-basic" label="last name" variant="standard" fullWidth />
                                </div>
                            </div>
                            <div className='col-sm-6 col-12 mb-4'>
                                <div class="mx-2 mx-md-5">
                                    <TextField id="standard-basic" label="email id" variant="standard" fullWidth />
                                </div>
                            </div>
                            <div className='col-sm-6 col-12 mb-4'>
                                <div class="mx-2 mx-md-5">
                                    <TextField id="standard-basic" label="phone number" variant="standard" fullWidth />
                                </div>
                            </div>
                            <div className='col-sm-6 col-12 mb-4'>
                                <div class="mx-2 mx-md-5">
                                    <TextField id="standard-basic" label="company name" variant="standard" fullWidth />
                                </div>
                            </div>
                            <div className='col-sm-6 col-12 mb-4'>
                                <div class="mx-2 mx-md-5">
                                    <TextField
                                        id="standard-select-department"
                                        select
                                        label="your department"
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
                                <div class="mx-2 mx-md-5">
                                    <TextField
                                        id="standard-select-source"
                                        select
                                        label="Where did you hear about us"
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
                                <div class="mx-2 mx-md-5">
                                    <TextField id="standard-basic" label="message" variant="standard" fullWidth />
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