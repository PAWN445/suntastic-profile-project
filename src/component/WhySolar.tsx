import {useState } from 'react';
import contactbg from "../assets/contactbg.jpg"
import whyvid from "../assets/finalWhy.mp4"
import firstclip from "../assets/1st-clip.mp4"
import secondclip from "../assets/2nd-clip.mp4"
import { Link } from 'react-router-dom'
import logo from "../assets/facebook-bg-png.png";
import bgcal from "../assets/bg-cal.jpg";


function WhySolar(){
    const [bill, setBill] = useState("");
    const [cal, setCal] = useState<number>(0);
    const [totalPanels, setTotalPanels] = useState<number>(0);
    const [totalSave, setTotalSave] = useState<number>(0);
    
    function calculate(){
        let electricBill = parseFloat(bill);
        let rate = 15;
        let monthlyKwh = electricBill / rate;
        let days = 30;
        let peakHours = 4.5;
        let dailyKwh = monthlyKwh / days;
        let systemSize = dailyKwh / peakHours;
        let systemSizeWatts = systemSize * 1000;
    
        let panelWatts = 660;
        let qtyPanels = systemSizeWatts / panelWatts;
    
        let savings = 0.5;
        let monthlySave = electricBill * savings;
    
        const average =  Math.round(systemSize);
        const totalPanels = Math.round(qtyPanels);
        const estimatedMonthlySave = monthlySave;
    
        setCal(average);
        setTotalPanels(totalPanels);
        setTotalSave(estimatedMonthlySave);
    
      
    
    }
    return(
        <>
          <div className="relative overflow-hidden w-full h-150 items-center">
            <img className='absolute inset-0 object-cover h-full w-full' src={contactbg} alt="contact bg" />
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative w-full h-full z-10 flex flex-row justify-around items-center">
            
            <div className='flex flex-row gap-8 justify-between mt-6 p-6'>
                {/* Left: Text */}
                <div className='flex flex-col mx-auto mt-8'>
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Why <span className='text-green-400'>Solar</span>
                    </h1>
                    <p className="text-lg text-white mb-6 text-balance">
                        A better future where every household in the Philippines runs <br/>
                        on solar power which is sustainable, less expensive and clean.
                    </p>
                    <button className="w-fit px-6 py-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors">
                        Contact Us
                    </button>
                </div>
                
                {/* Right: Video Player */}
                <div className=' border-2 border-yellow-400 mx-auto mt-8 rounded-2xl'>
                    <video 
                        className='w-150 h-full object-fit rounded-2xl' 
                        src={whyvid}
                        controls
                    />
                </div>
            </div>
            </div>
        </div>
        <div className='flex flex-row justify-center gap-8 m-4'>
            <div className='flex-row'>
                <video className='w-150 h-full object-cover border-green-500 border-4' src={firstclip} autoPlay muted loop playsInline></video>
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='text-2xl font-medium pb-4'>Solar reduces or eliminates your electricity bill</h1>
                <p className='text-balance text-gray-700'>Solar power allows you to power your home or business with the sun’s free energy.<br/> 
                    This implies that your monthly electricity bills will most likely decrease significantly. <br/> 
                    If the solar panels produce more electricity than the building needs, the excess<br/> 
                    energy can be transferred back to the grid, and the owner of the solar panels<br/> 
                    may receive credits from the utility company for the excess electricity.</p>
                </div>
        </div>
        <hr className="border-t-2 border-gray-300 w-310 mx-auto"/>

            <div className='flex flex-row justify-center gap-8 m-4'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-2xl font-medium pb-4'>Solar has great benefits to the environment</h1>
                <p className='text-balance text-gray-700'>A regular household usually consumes around 10,000 kWh annually. Majority <br/>
                    of the electricity generated comes from fossil fuels, which emits 0.855 <br/>
                    pounds of CO2 per kWh. This means that a regular household is responsible <br/>
                    for 3 to 4 metric tons of carbon emissions annually, which worsen the quality <br/>
                    of air we breathe, while also contributing to climate change.</p>

                    <br/>
                    <p className='text-balance text-gray-700'>Going Solar can reduce carbon emissions and help the environment and <br/> 
                    the community. To give a better understanding of the benefits of solar, the <br/>
                    carbon emission reduced per one regular household using solar is equivalent to planting 100+ trees.</p>
                </div>
            <div className='flex-row'>
                <video className='w-150 h-full object-cover border-green-500 border-4' src={secondclip} autoPlay muted loop playsInline></video>
            </div>
        </div>

        <div className="relative flex justify-center items-center overflow-hidden h-200 w-full">
        <img className="absolute inset-0 w-full h-full object-cover" src={bgcal} alt="background calculator" />
        <div className="absolute inset-0 bg-black/60" />

        {/* Cards container — flex row, side by side */}
        <div className="relative z-10 flex flex-row gap-6">

          {/* Left Card */}
          <div className="bg-white flex flex-col w-120 h-150 rounded-2xl p-6">
            <h2>Average Electric Bill</h2>
            <input className="border mt-2 p-2 rounded-xl" type="text" value={bill} onChange={(e) => setBill(e.target.value)} placeholder="Type Electric bill here" />
            <button className="bg-green-800 rounded-xl p-1.5 text-white mt-2" onClick={calculate}>Calculate</button>
            <div className="flex flex-row justify-center gap-4 p-6 w-full">
            <div className="flex flex-col gap-2 text-center">
                <h1 className="text-2xl font-bold">#BawasBill</h1>
                <p>System Size</p>
                <input className="border-gray-600 bg-gray-200 rounded p-2 w-full" type="text" value={cal} disabled />
                <p>Number of Panels</p>
                <input className="border-gray-600 bg-gray-200 rounded p-2" type="text" value={totalPanels} disabled />
                <p>Estimated monthly savings*</p>
                <input className="border-gray-600 bg-gray-200 rounded p-2" type="text" value={totalSave} disabled />
            </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex flex-col w-200 h-100 rounded-2xl p-6 text-white justify-center gap-6">
            <h1 className="font-bold text-5xl"><span className="text-green-700">Install</span> <span className="text-yellow-500">Now!!</span><br/><span> Pay Later Soon!</span></h1>
            <p>We’ve partnered with the top banks and trusted financing institutions in the <br/>
                 Philippines. We want to make solar energy be more accessible to every Filipino by<br/>
                  offering various payment schemes and financing options.</p>
                  <button className="bg-green-800 rounded-xl p-2 text-white mt-2 w-80">Message Us Now</button>
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

export default WhySolar
