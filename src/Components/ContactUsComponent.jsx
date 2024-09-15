import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MenuItem } from '@mui/material';

const ContactUsComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
        phoneNumber: '',
        companyName: '',
        department: '',
        source: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.firstName = formData.firstName ? "" : "First name is required";
        tempErrors.lastName = formData.lastName ? "" : "Last name is required";
        tempErrors.emailId = /\S+@\S+\.\S+/.test(formData.emailId) ? "" : "Email is invalid";
        tempErrors.phoneNumber = formData.phoneNumber.length === 10 ? "" : "Phone number must be 10 digits";
        tempErrors.message = formData.message ? "" : "Message is required";

        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbxBJfTvFGREY9skMZaXogIYUDlQfcjdtRCJtspsz__45otwbkuZNDnWZXeguuMI5vIlHA/exec', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                });
                const result = await response.json();
                if (result.result === 'success') {
                    alert('Form submitted successfully');
                    setFormData({
                        firstName: '',
                        lastName: '',
                        emailId: '',
                        phoneNumber: '',
                        companyName: '',
                        department: '',
                        source: '',
                        message: ''
                    });
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <section className='contact-us-section' data-aos="zoom-in-up">
                <div className='container'>
                    <div className="text-center mt-5">
                        <h1>Hey there!</h1>
                        <p className='para'>We’re more than happy to have a conversation.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row mt-5 p-lg-5 p-4 p-sm-2">
                            <div className='col-sm-6 col-12 mb-4'>
                                <div className="mx-2 mx-md-5">
                                    <TextField
                                        label="First name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        error={!!errors.firstName}
                                        helperText={errors.firstName}
                                        variant="standard"
                                        fullWidth
                                    />
                                </div>
                            </div>
                            <div className='col-sm-6 col-12 mb-4'>
                                <div className="mx-2 mx-md-5">
                                    <TextField
                                        label="Last name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        error={!!errors.lastName}
                                        helperText={errors.lastName}
                                        variant="standard"
                                        fullWidth
                                    />
                                </div>
                            </div>
                            <div className='col-sm-6 col-12 mb-4'>
                                <div className="mx-2 mx-md-5">
                                    <TextField
                                        label="Email ID"
                                        name="emailId"
                                        value={formData.emailId}
                                        onChange={handleChange}
                                        error={!!errors.emailId}
                                        helperText={errors.emailId}
                                        variant="standard"
                                        fullWidth
                                    />
                                </div>
                            </div>
                            <div className='col-sm-6 col-12 mb-4'>
                                <div className="mx-2 mx-md-5">
                                    <TextField
                                        label="Phone number"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        error={!!errors.phoneNumber}
                                        helperText={errors.phoneNumber}
                                        variant="standard"
                                        fullWidth
                                    />
                                </div>
                            </div>
                            <div className='col-sm-6 col-12 mb-4'>
                                <div className="mx-2 mx-md-5">
                                    <TextField
                                        label="Company name"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        variant="standard"
                                        fullWidth
                                    />
                                </div>
                            </div>
                            <div className='col-sm-6 col-12 mb-4'>
                                <div className="mx-2 mx-md-5">
                                    <TextField
                                        select
                                        label="Your department"
                                        name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        variant="standard"
                                        fullWidth
                                    >
                                        <MenuItem value="Marketing">Marketing</MenuItem>
                                        <MenuItem value="Sales">Sales</MenuItem>
                                        <MenuItem value="Support">Support</MenuItem>
                                    </TextField>
                                </div>
                            </div>
                            <div className='col-12 mb-4'>
                                <div className="mx-2 mx-md-5">
                                    <TextField
                                        select
                                        label="Where did you hear about us"
                                        name="source"
                                        value={formData.source}
                                        onChange={handleChange}
                                        variant="standard"
                                        fullWidth
                                    >
                                        <MenuItem value="Google">Google</MenuItem>
                                        <MenuItem value="Facebook">Facebook</MenuItem>
                                        <MenuItem value="Referral">Referral</MenuItem>
                                    </TextField>
                                </div>
                            </div>
                            <div className='col-12 mb-4'>
                                <div className="mx-2 mx-md-5">
                                    <TextField
                                        label="Message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        error={!!errors.message}
                                        helperText={errors.message}
                                        variant="standard"
                                        fullWidth
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='text-center mb-4'>
                            <button type='submit' className='cst-get-in-tout-btn btn-outline text-uppercase'>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </ThemeProvider>
    );
}

export default ContactUsComponent;
