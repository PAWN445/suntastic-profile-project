import bgcal from '../assets/bg-cal.jpg'
import image4 from '../assets/image4.jpg'
import image7 from '../assets/image7.jpg'
import { Link } from 'react-router-dom'
import logo from "../assets/facebook-bg-png.png";


function About(){
    return(
        <>
        <div className="relative bg-black w-full h-100 overflow-hidden text-white">
            <img className='absolute h-full w-full object-cover' src={bgcal} alt="bgcal" />
            <div className="absolute inset-0 bg-black/60"/>
            <div className='relative flex flex-col h-full z-10 justify-center items-center text-white m-4 p-4 gap-2'>
                <h1 className=' font-bold text-2xl'>ABOUT SUNTASTIC SOLAR CORP</h1>
                <p className='text-base text-center'>
                    A better future where every household in the Philippines runs on solar power which is<br/> 
                    sustainable, less expensive and clean.</p>
                    <button className='bg-green-700 m-4 px-6 py-3 rounded-xl'>Contact Us</button>
            </div>
        </div>
        <div className='flex flex-row justify-center m-20'>
            <div className='flex flex-col m-4 gap-2 justify-center'>
                <h3 className='font-bold'>YOUR MOST RELIABLE SOLAR PARTNER</h3>
                <h6 className='font-extrabold text-3xl'>SUNTASTIC SOLAR CORP</h6>
                <p className='text-balance'>From one of the biggest distributors of solar products in 2018, we expanded<br/> 
                    our market as a solar energy provider offering a full-service of solar<br/> 
                    projects for residential, commercial and industrial sectors. With a team of<br/> 
                    licensed engineers and professionals who are expert in the field of solar, we<br/> 
                    can provide a high quality installation, seamless service, and satisfy our<br/> 
                    clients even after installation with our after-sales. By treating the People,<br/> 
                    the Planet and Profit as equally important in our operation, we are<br/> 
                    committed to advocate a brighter future for economical and<br/> 
                    environmental growth and to be true to our vision – “Solar to Every Filipino”.</p>
            </div>

            <div className='flex flex-col m-4 gap-2'>
                <img className='rounded-xl w-150 h-full shadow' src={image4} alt="imagehere" />
            </div>
        </div>
        <div className='flex flex-row justify-center m-20 text-center text-balance'>
            <div className='flex flex-col m-4 gap-2 justify-center'>
                <h1 className='font-bold text-green-700 text-3xl'>Our Mission</h1>
                <p className='text-balance'>To advocate solar power and accelerate the Philippines’ <br/>
                     transition to a renewable energy center in the world.</p>
            </div>

            <div className='flex flex-col m-4 gap-2'>
                <h1 className='font-bold text-green-700 text-3xl'>Our Vision</h1>
                <p className='text-balance'>A better future where the Philippines uses solar energy <br/>
                which is sustainable, less expensive, and clean.</p>
            </div>
        </div>
        <div className='items-center text-3xl font-bold text-center p-4'>
            <h1 className='font-bold text-green-700 text-3xl mb-12'>Core Values</h1>
        </div>
        
        <div className='flex flex-row  gap-4 justify-center items-stretch max-w-6xl mx-auto'>
            <div className='text-center items-center'>
                <h2 className='font-semibold mb-2'>S – Sustainable</h2>
                <p className="text-sm text-gray-600">We believe that by 
                providing solar to every 
                Filipino, we can help the 
                environment, the 
                community, and the country 
                while remaining profitable.</p>
            </div>
            <div className="w-px bg-gray-300 self-stretch" />
           <div className='text-center h-50'>
                <h2 className='font-semibold mb-2'>O – One Team</h2>
                <p className="text-sm text-gray-600">We are committed, guided by our values and vision, to bring the best experience, engineering, installation, and after-sales service to our customers.</p>
            </div>
            <div className="w-px bg-gray-300 self-stretch" />
            <div className='text-center h-50'>
                <h2 className='font-semibold mb-2'>L – Leadership</h2>
                <p className="text-sm text-gray-600">We empower our team to make important decisions and improvements to drive our company as the leader in the industry.</p>
            </div>
            <div className="w-px bg-gray-300 self-stretch" />
            <div className='flex flex-col text-center text-balance'>
                <h2 className='font-semibold mb-2'>A – Above and Beyond</h2>
                <p className="text-sm text-gray-600">We strive to exceed every 
                    expectation and provide  
                    unmatched customer  
                    satisfaction.</p>
            </div>
            <div className="w-px bg-gray-300 self-stretch" />
            <div className='text-center'>
                <h2 className='font-semibold m-2 mb-2'>R – Reliability</h2>
                <p className="text-sm text-gray-600">We partner with proven brands and hire the best engineers in the industry, making sure our customers can reap the benefits of solar for decades.</p>
            </div>
        </div>
        <div className='flex flex-row gap-4 relative overflow-hidden items-center h-100 w-full'>
                <img className='absolute inset-0 h-100 w-full object-cover' src={image7} alt="image7 ito" />
            <div className="absolute inset-0 bg-black/70" />
            <div className='relative flex flex-col z-10 justify-around gap-4 px-24 w-1/2'>
                <h1 className='text-2xl font-bold text-white'>The Reasons That You Should go for<br/> 
                <span className='text-green-500'>Suntastic Solar Corp</span></h1>
                <p className='text-white text-balance'>
                    Our team has extensive experience in the solar industry and is well-equipped <br/> 
                    to handle projects of all sizes and complexities. We use only the highest quality<br/> 
                    solar panels, inverters, and other equipment, ensuring that our systems are reliable and long-lasting.
                </p>
                <button className='bg-green-700 py-2 text-white m-0 w-32 px-4'>Learn More</button>
            </div>
            
            <div className='relative flex flex-col z-10 justify-around gap-6 px-12 w-1/2'>

            <div className='flex flex-row items-start gap-6'>
                <h1 className='text-4xl font-bold text-amber-500 w-40 shrink-0'>3 Month</h1>
                <div className='flex flex-col'>
                <h2 className='text-xl font-bold text-amber-500'>Industry Experience</h2>
                <p className='text-white text-sm text-balance'>
                    We are a experienced company who provides reliable solar solutions and excellent customer service.
                </p>
                </div>
            </div>

            <div className='flex flex-row items-start gap-6'>
                <h1 className='text-4xl font-bold text-green-500 w-40 shrink-0'>1</h1>
                <div className='flex flex-col'>
                <h2 className='text-xl font-bold text-green-500'>Solar Installations</h2>
                <p className='text-white text-sm text-balance'>
                    We have installed a total of 6kilo Watts of solar power set up from Caloocan.
                </p>
                </div>
            </div>

            <div className='flex flex-row items-start gap-6'>
                <h1 className='text-4xl font-bold text-white w-40 shrink-0'>1</h1>
                <div className='flex flex-col'>
                <h2 className='text-xl font-bold text-white'>Successful Installations</h2>
                <p className='text-white text-sm text-balance'>
                    We pride ourselves on providing excellent, fast and reliable customer service to our happy and satisfied clients.
                </p>
                </div>
            </div>

            </div>
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
                    1053 Zabarte rd,<br/>
                    Caloocan City, Philippines <br/>
                    near at wadfow ammena construction supplies trading <br/>
                </h6>
                <p>suntasticsolarcorporation@gmail.com</p>
            </div>
        
            <div className="flex flex-col gap-4">
                <h6>CONNECT WITH US!</h6>
                <div className="flex flex-row">
                </div>
                <p>
                    Tel No.: (02) 8641 6976 | 0969 018 6025 <br/>
                </p>
            </div>
        </div>
      </div>
        </>
    );
}

export default About