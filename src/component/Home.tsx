import bgVideo from "../assets/Homepage-BG.mp4";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"
import bgcal from "../assets/bg-cal.jpg";
import testimonial from "../assets/testimony-bg.jpg";
import logo from "../assets/facebook-bg-png.png";
import { Star } from 'lucide-react';
import {useState } from 'react';
import { Link } from 'react-router-dom'

function Home(){
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
    <div className="relative overflow-hidden h-250 w-full">
            <video id="Home" className="absolute inset-0 h-full w-full object-cover" src={bgVideo} 
                autoPlay muted loop playsInline>
            </video>
            <div className="absolute inset-0 bg-black/60" />
            
            <div className="relative h-full z-10 flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold text-white mb-4">SUNTASTIC SOLAR CORP</h1>
            <p className="text-2xl font-regular text-white mb-4">Empowering Your Future with <span className="text-green-500">Clean Energy.</span></p>
            </div>
    </div>
    <div className="relative justify-around flex flex-row overflow-hidden h-150 w-full bg-stone-50">
        <div className="flex-row">
            <h1 className="text-green-700 font-bold py-4">Our Vision</h1>
            <h1 className="text-5xl font-bold mb-4 py-4">Solar to Every Filipino</h1>
            <p className="py-4">The biggest distributors of solar products in 2018, we expanded our market as<br/> a solar energy provider 
                offering a full service of solar projects for residential,<br/> commercial, and industrial sectors.</p>
        <button className="bg-green-700 py-2 px-10 rounded text-white">Message Us Now</button>
        
        <div className=" text-center flex flex-row justify-around bg-green-700 gap-2 my-4 p-5 text-white rounded-xl">
            <div className="">
                <h1 className="font-black text-2xl">1+</h1><br/>
                <h3 className="font-medium text-base">Successful<br/> Installations</h3>
            </div>
            <div className="flex-col">
                <h1 className="font-black text-2xl">6kwp</h1><br/>
                <h3 className="font-medium text-base">Solar<br/> Installations</h3>
            </div>
            <div className="flex-row">
                <h1 className="font-black text-2xl">130GWH+</h1><br/>
                <h3 className="font-medium text-base">Electricity<br/>Generated</h3>
            </div>
        </div>
        </div>
        <div className="relative w-150 h-125">
                <div className="absolute top-0 left-0 w-[320px] h-70 rounded-xl border-2 border-yellow-500 overflow-hidden shadow-xl -rotate-3 z-10 mt-10">
                    <img className="w-full h-full object-cover" src={image1} alt="image-1" />
                </div>
                <div className="absolute top-15 right-0 w-75 h-65 rounded-xl border-2 border-yellow-500 overflow-hidden shadow-xl rotate-2 z-20">
                    <img className="w-full h-full object-cover" src={image2} alt="image-2" />
                </div>
                <div className="absolute bottom-0 left-15 w-85 h-60 rounded-xl border-2 border-yellow-500 overflow-hidden shadow-xl -rotate-1 z-30">
                    <img className="w-full h-full object-cover" src={image3} alt="image-3" />
                </div>
        </div>
    </div>

    <div className="relative h-200 w-full bg-white text-center flex flex-col items-center my-8  p-4">
        <h1 className="text-2xl font-black p-4">Here's what we can do for you</h1>
        <hr id="guhit" className="w-20 p-4"/>
        <p>We offer a range of services to get you set up with solar, including installation, net metering assistance, <br/>
        and ongoing cleaning and maintenance. Let us take care of the details, so you can enjoy the benefits of<br/>
         renewable energy. Contact us today to learn more.</p>
         <div className="flex flex-row justify-around gap-4 my-5  p-6">
            
            <div className="flex-col text-start p-2">
            <div className="rounded-xl w-100 h-100">
                <img className="rounded-xl w-100 h-100 object-cover" src={image4} alt="image-1" />
            </div>
            <div className="w-full">
                <h1  className="font-bold text-2xl text-gray-900">Engineering and Design</h1>
                <p className="py-2">We design custom solar power systems and<br/>
                help clients visualize layout and performance<br/>
                before installation with plans, diagrams and simulations.</p>
                <button className="bg-green-700 py-2 px-10 rounded-xl text-white">Learn More</button>
            </div>
         </div>
            
            <div className="flex-col text-start p-2">
            <div className="rounded-xl w-100 h-100">
                <img className="rounded-xl w-100 h-100 object-cover" src={image5} alt="image-1" />
            </div>
            <h1 className="font-bold text-2xl text-gray-900">Procurement, Installation,<br/> and Commissioning</h1>
            <p className="py-2">We handle all aspects of solar power system <br/>
                installation for clients, including purchasing, logistics, <br/>
                construction, testing, commissioning and energization, <br/>
                and provide a seamless experience.</p>
            <button className="bg-green-700 py-2 px-10 rounded-xl text-white">Learn More</button>
         </div>
            
            <div className="flex-col text-start p-2 m-0">
            <div className="rounded-xl w-100 h-100">
                <img className="rounded-xl w-100 h-100 object-cover" src={image6} alt="image-1" />
            </div>
            <h1  className="font-bold text-2xl text-gray-900">Operations & Maintenance</h1>
            <p className=" py-4">We train clients and provide handover to <br/>
                ensure they can operate their own system and <br/>
                offer maintenance, cleaning, and management <br/>
                services for peak performance throughout <br/>
                system’s lifetime.</p>
            <button className="bg-green-700 py-2 px-10 rounded-xl text-white">Learn More</button>
         </div>
         </div>
    </div>

<br/>

      <div className="relative flex justify-center items-center overflow-hidden h-200 w-full my-8">
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
            <h1 className="font-bold text-5xl"><span className="text-green-700">Install</span> <span className="text-yellow-500">Now!!</span><br/><span> Pay Later Soon</span></h1>
            <p>We’ve partnered with the top banks and trusted financing institutions in the <br/>
                 Philippines. We want to make solar energy be more accessible to every Filipino by<br/>
                  offering various payment schemes and financing options.</p>
                  <button className="bg-green-800 rounded-xl p-2 text-white mt-2 w-80">Message Us Now</button>
          </div>

        </div>
      </div>
        <div className="text-center p-6">
            <h1 className="font-semibold text-2xl py-4">SUNTASTIC SOLAR CORP</h1>
            <h1 className="font-bold text-2xl">FEATURES PROJECTS</h1>
        </div>
      <div className="bg-white w-full h-200 flex flex-row gap-2 justify-around">
        <div className="flex flex-row gap-4 w-350 text-balance">
            <div className="bg-white border border-black rounded-xl w-150 h-180 text-center mx-auto">
                <img className="rounded-3xl p-4 object-cover" src={image1} alt="project-1" />
                <h1 className="font-bold">Sir Karl</h1>
                <h6 className="font-semibold">6kWp Hybrid System</h6>
                <p className="py-2">Location: <span className="font-semibold">Caloocan City</span><br/>
                Brief Overview of the Project: <span className="font-semibold">Optimizing Energy<br/>
                Generation and Savings</span><br/>
                Panels installed: <span className="font-semibold">12 x 715W Solar Panels</span><br/>
                Potential Monthly Savings: <span className="font-semibold">P8,700 – P10,200</span>
                </p>
                <button className="bg-green-700 text-white p-2 rounded-sm">Learn More</button>
            </div>

{/*
            <div className="bg-white border border-black rounded-xl w-150 h-150 text-center">
                <img className="rounded-3xl p-4 object-cover w-full" src={logo} alt="project-1" />
                <h1 className="font-bold">Suntastic Solar Corp</h1>
                <h6 className="font-semibold">Suntastic Solar Corp</h6>
                <p className="py-2">Location: <span className="font-semibold">Suntastic Solar Corp</span><br/>
                Brief Overview of the Project: <span className="font-semibold">Suntastic Solar Corp<br/>
                Suntastic Solar Corp</span><br/>
                Panels installed: <span className="font-semibold">Suntastic Solar Corp</span><br/>
                Potential Monthly Savings: <span className="font-semibold">Suntastic Solar Corp</span>
                </p>
                <button className="bg-green-700 text-white p-2 rounded-sm">Learn More</button>
            </div>


            <div className="bg-white border border-black rounded-xl w-150 h-150 text-center">
                <img className="rounded-3xl p-4 object-cover w-full" src={logo} alt="project-1" />
                <h1 className="font-bold">Suntastic Solar Corp</h1>
                <h6 className="font-semibold">Suntastic Solar Corp</h6>
                <p className="py-2">Location: <span className="font-semibold">Suntastic Solar Corp</span><br/>
                Brief Overview of the Project: <span className="font-semibold">Suntastic Solar Corp<br/>
                Suntastic Solar Corp</span><br/>
                Panels installed: <span className="font-semibold">Suntastic Solar Corp</span><br/>
                Potential Monthly Savings: <span className="font-semibold">Suntastic Solar Corp</span>
                </p>
                <button className="bg-green-700 text-white p-2 rounded-sm">Learn More</button>
            </div>
            */}
        </div>
      </div>
      <div className="relative flex flex-col w-full h-135 overflow-hidden">
        <img className="absolute inset-0 w-full object-cover" src={testimonial} alt="testimonialbackground" />
        <div className="absolute inset-0 bg-black/60 h-135" />
        <h1 className="relative z-10 text-white text-center font-bold text-4xl py-20">What our customers say about us</h1>
        
        <div className="relative z-10 flex flex-row justify-around text-white text-center py-10 items-center">
          <div className="w-120 text-balance">
            <div className="flex flex-row justify-center gap-2 pb-1">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400"/>
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400"/>
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400"/>
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400"/>
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400"/>
            </div>
            <h6>The whole package is highly recommended! This includes panels, inverter, cabling and even the efficient manpower. The system was also explained clearly and supported by FAQ’s for our reference. Satisfied customer!</h6>
          <p className="font-bold">Karl<br/>Caloocan City</p>
          </div>
          {/*
          <div className="w-120 text-balance">
            <div className="flex flex-row justify-center gap-2 pb-1">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400"/>
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400"/>
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400"/>
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400"/>
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400"/>
            </div>
            <h6>We have decided to join the Green Bandwagon. Go Green, GoSolar!
                Fast and efficient service. Ready to respond to all queries issues and concerns were readily attended to. Thank you GoSolar Philippines</h6>
                <p className="font-bold">Mimi Detabali<br/>Dasmariñas City, Cavite</p>
          </div>
          <div className="w-120 text-balance">
            <div className="flex flex-row justify-center gap-2 pb-1">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400"/>
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400"/>
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400"/>
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400"/>
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400"/>
            </div>
            <h6>
              I have mine installed last October 4, 2021 (5.4kWp Hybrid Solar setup). They did it in one day. Very fast and efficient installation. 
              Big thanks to the crew, Technical Engineers and to Boss Drew.Great aftermarket service! 👍
            </h6>
            <p className="font-bold">Bobby Gasmen<br/>Parañaque City</p>
          </div>
          */}
        </div>
          <button className="relative z-10 w-50 mx-auto bg-green-700 text-white p-4 rounded-xl">Message us now</button>
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

export default Home