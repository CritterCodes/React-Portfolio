import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.component.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        client_name: '',
        client_email: '',
        client_phone: '',
        subject: 'Quote Request',
        message: '',
        referenceFile: null,
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'referenceFile' ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');

        const data = new FormData();
        data.append('client_name', formData.client_name);
        data.append('client_email', formData.client_email);
        data.append('client_phone', formData.client_phone);
        data.append('client_message', formData.message);
        if (formData.referenceFile) {
            data.append('referenceFile', formData.referenceFile);
        }

        try {
            const url = process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL : 'http://localhost:3003';
            await axios.post(`${url}/api/v1/contact/email`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setSuccessMessage("Your quote request has been submitted. We'll reach out with a response soon!");
        } catch (error) {
            console.error("Error sending request:", error);
            setErrorMessage("There was an error sending your request. Please try again.");
        }
    };

    return (
        <div className="contact">
            <h2 className="contact-title">Request a Quote</h2>
            <p className="contact-description">Please fill out the form below to request a quote. Include any reference images, project details, and your preferred timeline.</p>

            {/* Success Alert */}
            {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}

            {/* Error Alert */}
            {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="inline-group">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="client_name"
                            value={formData.client_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="referenceFile">Reference File (optional)</label>
                        <input
                            type="file"
                            id="referenceFile"
                            name="referenceFile"
                            onChange={handleChange}
                            accept="image/*, .pdf"
                        />
                    </div>
                </div>
                <div className="inline-group">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="client_email"
                            value={formData.client_email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="client_phone"
                            value={formData.client_phone}
                            onChange={handleChange}
                            placeholder="(123) 456-7890"
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Describe your project, size, style, and any specific details..."
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit Quote Request</button>
            </form>
        </div>
    );
};

export default Contact;
