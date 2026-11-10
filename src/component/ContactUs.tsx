import React, { useState, type ChangeEvent } from 'react'
import contactbg from "../assets/contactbg.jpg"
import customerservice from "../assets/customer_service_management.jpg"
import maps from "../assets/gmap.png"
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom'
import logo from "../assets/facebook-bg-png.png";

function ContactUs(){
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        monthlyBill: '',
        address:'',
        subject:'',
        message:'',
        agreeToTerm: false,
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value, type} = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev, [name]: type === 'checkbox' ? checked : value,
        }));
    };
      const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formData.agreeToTerm) {
      alert('Please agree to the terms first.');
      return;
    }
    console.log(formData); // i-send mo dito sa Supabase/API
  };
    return(
        <>
          <div className="relative overflow-hidden w-full h-100">
            <img className='absolute inset-0 object-cover h-full w-full' src={contactbg} alt="contact bg" />
            <div className="absolute inset-0 bg-black/50" />
                        <div className="relative h-full z-10 flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold text-white mb-4">CONTACT <span className='text-green-500'>US</span></h1>
            <p className="text-xl font-regular text-white mb-4">We will be glad to hear from you. Feel free to contact us anytime.
            </p>
            </div>
        </div>
        <div className='bg-white w-full flex flex-row'>
            <div className='flex flex-col gap-4 mx-auto p-6 max-w-xl'>
    <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        className="border border-gray-300 rounded px-4 py-3 w-full"/>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="border border-gray-300 rounded px-4 py-3 w-full"/>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="border border-gray-300 rounded px-4 py-3 w-full"/>
      <input
        type="text"
        name="averageMonthlyBill"
        value={formData.monthlyBill}
        onChange={handleChange}
        placeholder="Average Monthly Bill"
        className="border border-gray-300 rounded px-4 py-3 w-full"/>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className="border border-gray-300 rounded px-4 py-3 w-full"/>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="border border-gray-300 rounded px-4 py-3 w-full"/>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows={5}
        className="border border-gray-300 rounded px-4 py-3 w-full resize-none"/>
      <label className="flex items-start gap-2 text-sm text-gray-600">
        <input
          type="checkbox"
          name="agreedToTerms"
          checked={formData.agreeToTerm}
          onChange={handleChange}
          className="mt-1"/>
        <span>
          By clicking 'I accept' below, you confirm that you have read and understand
          this form and agree to the collection, use, and storage of your personal information...
        </span>
      </label>

      <button onClick={handleSubmit} className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"> Submit </button>
            </div>

            <div className='rounded-xl mx-auto my-auto p-6'>
                <img className='rounded-2xl h-100 w-full shadow-2xl' src={customerservice} alt="contact bg" />
                <p className='m-4 text-balance'>1053 Zabarte rd,<br/>
                    Caloocan City, Philippines</p>
                <div className='flex flex-col gap-2 p-2 m-2'>
                    <div className='flex flex-row gap-2'>
                        <Mail size={30} className="" />
                        <p>suntasticsolarcorporation@gmail.com</p>
                    </div>

                    <div className='flex flex-row gap-2'>
                        <Phone size={30} className=''/>
                        <p>(02) 8641 6976 | 0969 018 6025</p>
                    </div>


                </div>
            </div>
        </div>
            <div className='w-full h-100 bg-green-100 mt-6'>
              <img className='h-full w-full object-cover' src={maps} alt="google map" />
            </div>
                  <div className="bg-green-800 w-full h-100 text-white p-8">
        <div className="flex flex-row justify-around items-center align-center my-auto">
            <div className="flex flex-col">
                <img className="w-auto h-50" src={logo} alt="logo here" />
                <h6 className="text-balance">
                    Suntastic Solar Corp is an Construction company<br/>
                    specializing in solar power technology. Our team of experts <br/>
                    is dedicated to finding the solar solution that's right for <br/>
                    you. Contact us for a free consultation.
                </h6>
            </div>
            <div className="flex flex-col gap-4">
                <h6>Links</h6>
                <ul className="flex flex-col">
                    <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-green-400 transition-colors">About</Link>
                    <Link to="/projects" className="hover:text-green-400 transition-colors">Our Projects</Link>
                    <Link to="/why-solar" className="hover:text-green-400 transition-colors">Why Solar</Link>
                    <Link to="/contact" className="hover:text-green-400 transition-colors">Contact Us</Link>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h6>CONTACT INFORMATION</h6>
                <h6 className="text-balance">
                    Level 24, One Bonifacio High Street<br/> 
                    Bonifacio Global City, Metro Manila, Philippines
                </h6>
                <p>arnoldsuntasticsolarcorp@gmail.com</p>
            </div>
        
            <div className="flex flex-col gap-4">
                <h6>CONNECT WITH US!</h6>
                <div className="flex flex-row">
                </div>
                <p>
                    Phone No : +63991-403-9642 <br/>
                </p>
            </div>
        </div>
      </div>
        </>
    );
}

export default ContactUs
