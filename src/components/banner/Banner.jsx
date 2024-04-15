
import { useEffect, useState } from 'react';
const Banner = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = ['https://i.ibb.co/Ky3TXmh/pexels-rdne-stock-project-6192558.jpg', 'https://i.ibb.co/C2nYGcM/pexels-clint-maliq-13634354.jpg', 'https://i.ibb.co/Q9P4THz/pexels-cottonbro-studio-8443631.jpg', 'https://i.ibb.co/MkTN2rQ/pexels-antoni-shkraba-7081105.jpg', 'https://i.ibb.co/yWCKKSN/pexels-cottonbro-studio-10406289.jpg', 'https://i.ibb.co/jytYFX5/pexels-salomon-byuma-6543575.jpg'];
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
        <div className="w-full h-screen"style={{height: `calc(100vh-100px)`}}>
            <div className="relative overflow-hidden">
                {/* slider container */}
                <div className="ease-linear duration-300 flex flex-col h-60 sm:h-96 md:h-screen transform-gpu relative object-cover" style={{ transform: `translateY(-${currentSlider * 100}%)` }}>
                    {/* sliders */}
                    {sliders.map((_, inx) => (
                        <div key={inx} className="min-w-full duration-200 before:content-['Image'] before:bg-black/20 before:-z-10 before:absolute before:text-3xl before:flex before:justify-center before:items-center before:text-black/40 before:inset-0 relative">
                            <img src={_} className="w-full h-60 sm:h-96 md:h-screen object-cover" alt={`Slider - ${inx + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Banner;
