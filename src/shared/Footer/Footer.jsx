import { Link } from 'react-router-dom';
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
                    <h3 className='text-xl'>Office</h3>
                    <p>Ali Ahmed Chunka Shorok</p>
                    <p>Dewbhog Panir Tanki</p>
                    <p>Narayanganj, Dhaka</p>
                    <p className='email-id'>masudrhmn6560@gmail.com</p>
                    <h4>+8801850556560</h4>
                </div>
                <div className='col'>
                    <h3>Links</h3>
                    <ul>
                        <Link><li>Home</li></Link>
                        <Link><li>Services</li></Link>
                        <Link><li>About Us</li></Link>
                        <Link><li>Contacts</li></Link>
                    </ul>
                </div>
                <div className='col'></div>
            </div>
        </div>
    );
};

export default Footer;