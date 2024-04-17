import { Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import '../Footer/footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='row'>
                <div className='col'>
                    <h1 className='footer-logo'>Fashion Fusion</h1>
                    <p className='text-base italic footer-logo-text'>a fusion of FASHION</p>
                </div>
                <div className='col'>
                    <h3 className='text-lg'>Office</h3>
                    <p>Ali Ahmed Chunka Shorok</p>
                    <p>Dewbhog Panir Tanki</p>
                    <p>Narayanganj, Dhaka</p>
                    <p className='email-id'>masudrhmn6560@gmail.com</p>
                    <h4>+8801850556560</h4>
                </div>
                <div className='col'>
                    <h3 className='text-lg'>Links</h3>
                    <ul>
                        <Link><li>Home</li></Link>
                        <Link><li>Services</li></Link>
                        <Link><li>About Us</li></Link>
                        <Link><li>Contacts</li></Link>
                    </ul>
                </div>
                <div className='col'>
                    <h3 className='text-lg'>Newsletter</h3>
                    <form>
                        <FaEnvelope className='far' />
                        <input type="email" placeholder='Enter your email here' required />
                        <button type='submit'><FaArrowCircleRight className='fas' /></button>
                    </form>
                    <div className='social-icons flex '>
                        <FaFacebook className='fab'/>
                        <FaSquareXTwitter className='fab'/>
                        <FaInstagramSquare className='fab'/>
                        <FaPinterest className='fab'/>
                    </div>
                </div>
            </div>
            <hr />
            <p className='copyright'>Fashion Fusion © 2024 - All Rights Reserved</p>
        </div>
    );
};

export default Footer;