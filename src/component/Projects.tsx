import promoImage from "../assets/nopromo.png"
import { Link } from 'react-router-dom'
import logo from "../assets/facebook-bg-png.png";

function Projects(){
    return(
        <>
        <div className="flex flex-col items-center justify-center relative overflow-hidden bg-gray-900 w-full h-200">
            <img className="h-64 object-contain" src={promoImage} alt="" />
            <h1 className="text-2xl font-bold text-white mt-4">NO PROMOTIONS YET</h1>
            <p className="text-white text-sm mt-1">Stay-tuned to our latest updates via our social media account</p>
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

export default Projects
