import image1 from '../../assets/banner/pexels-clint-maliq-13634354.jpg'
import image2 from '../../assets/banner/pexels-rdne-stock-project-6192558.jpg'
import '../banner/banner.css'

const Banner = () => {
    return (
        <div className="banner-container">
            {/* Your navbar component here */}

            <div className='image-container'>
                <img src={image1} alt="image of two boys and girls" />
            </div>
        </div>
    );
};

export default Banner;
