import React from 'react'
import TextField from '@mui/material/TextField';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
const ContactUsComponent = () => {
    return (
        <>
            <section className='contact-us-section'>
                <div className='container'>
                    <div className="text-center mt-5">
                        <h1>Hey there!</h1>
                        <p>We’re more than happy to have a conversation.</p>
                    </div>
                    <div className='row mt-5 p-4'>
                        <div className='col-sm-6 col-12 mb-4'>
                            <TextField id="standard-basic" label="First Name" variant="standard" fullWidth/>
                        </div>
                        <div className='col-sm-6 col-12 mb-4'>
                            <TextField id="standard-basic" label="Last Name" variant="standard"  fullWidth/>
                        </div>
                        <div className='col-sm-6 col-12 mb-4'>
                            <TextField id="standard-basic" label="Email ID" variant="standard"  fullWidth/>
                        </div>
                        <div className='col-sm-6 col-12 mb-4'>
                            <TextField id="standard-basic" label="Phone Number" variant="standard"  fullWidth/>
                        </div>
                        <div className='col-sm-6 col-12 mb-4'>
                            <TextField id="standard-basic" label="Company Name" variant="standard"  fullWidth/>
                        </div>

                        <div className='col-sm-6 col-12 mb-4'>
                            <TextField
                                id="standard-select-department"
                                select
                                label="Your Department"
                                variant="standard"
                                // value={value}
                                // onChange={handleChange}
                                fullWidth
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </TextField>
                        </div>
                        <div className='col-12 mb-4'>
                            <TextField
                                id="standard-select-source"
                                select
                                label="Where Did You Hear About Us"
                                variant="standard"
                                // value={value}
                                // onChange={handleChange}
                                fullWidth
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </TextField>
                        </div>

                        <div className='col-12 mb-4'>
                            <TextField id="standard-basic" label="Message" variant="standard"  fullWidth />
                        </div>
                    </div>
                    <div className='text-center mb-4'>
                        <button className='cst-get-in-tout-btn btn-outline text-uppercase'>Submit</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUsComponent