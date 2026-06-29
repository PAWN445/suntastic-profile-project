import { Link } from 'react-router-dom'
import whitelogo from "../assets/logo-png-for-videos.png"


function Navbar() {


  return (
    <>
        <div className="absolute top-0 left-0 w-full z-50 flex justify-around items-center py-5">
            <Link to="/">
                <img className="h-30 w-auto" src={whitelogo} alt="Suntastic Solar Corp" />
            </Link>
            <nav className="flex flex-row text-white items-center gap-8 text-lg">
                    <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-green-400 transition-colors">About</Link>
                    <Link to="/projects" className="hover:text-green-400 transition-colors">Promo</Link>
                    <Link to="/why-solar" className="hover:text-green-400 transition-colors">Why Solar</Link>
                    <Link to="/contact" className="hover:text-green-400 transition-colors">Contact Us</Link>
            </nav>
        </div>

    </>
  );

}

export default Navbar;