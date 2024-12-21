import React, { useState } from 'react'
import './../App.css'
const Formvalidate = () => {

        const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
        });
    
        const [errors, setErrors] = useState({});
        const [submitted, setSubmitted] = useState(false);
    
        const validate = () => {
            const newErrors = {};
            if (!formData.name.trim()) {
                newErrors.name = 'Name is required';
            }
    
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!emailRegex.test(formData.email)) {
                newErrors.email = 'Invalid email address';
            }
    
            if (!formData.password.trim()) {
                newErrors.password = 'Password is required';
            } else if (formData.password.length < 6) {
                newErrors.password = 'Password must be at least 6 characters';
            }
    
            return newErrors;
        };
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const validationErrors = validate();
            setErrors(validationErrors);
    
            if (Object.keys(validationErrors).length === 0) {
                setSubmitted(true);
                console.log('Form Data:', formData);
            }
        };
    
        return (
            <>
            <div className="form-container">
                {submitted && <p className="success-message">Form submitted successfully!</p>}
                <form onSubmit={handleSubmit} noValidate>
                    {/* Name */}
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className={errors.name ? 'error-input' : ''}
                        />
                        {errors.name && <p className="error-text">{errors.name}</p>}
                    </div>
    
                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className={errors.email ? 'error-input' : ''}
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>
    
                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className={errors.password ? 'error-input' : ''}
                        />
                        {errors.password && <p className="error-text">{errors.password}</p>}
                    </div>
    
                    {/* Submit */}
                    <button type="submit" className="form-button">Submit</button>
                </form>
               
            </div>
            <div class="form-display">
                <p><span class="label">Name:</span> {formData.name}</p>
                <p><span class="label">Email:</span> {formData.email}</p>
                <p><span class="label">Password:</span> {formData.password}</p>
            </div>
         </>
        );
    };
    
export default Formvalidate