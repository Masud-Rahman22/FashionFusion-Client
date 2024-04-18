import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
const Services = () => {
    return (
        <div className="w-full h-[80vh]">
            <div className="w-full h-[50vh] bg-[#28282B] relative">
                <h1 className="text-2xl text-center pt-20 font-bold">Our Services</h1>
                <p>Which we provide</p>
                <div className="grid grid-cols-3 gap-20 md:ml-52 absolute mt-20">
                    <Card sx={{ minHeight: '350px', width: 320 }}>
                        <CardCover>
                            <img
                                src="https://i.ibb.co/2qcYXzp/pexels-liza-summer-6347966.jpg"
                                srcSet="https://i.ibb.co/2qcYXzp/pexels-liza-summer-6347966.jpg"
                                loading="lazy"
                                alt=""
                            />
                        </CardCover>
                        <CardCover
                            sx={{
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}
                        />
                        <CardContent sx={{ justifyContent: 'flex-end' }}>
                            <Typography level="title-lg" textColor="#fff">
                            Curated Selection
                            </Typography>
                            <Typography
                                startDecorator={<LocationOnRoundedIcon />}
                                textColor="neutral.300"
                            >
                                Offering a carefully curated selection of clothing and accessories from diverse brands, providing customers with a one-stop destination for quality fashion choices.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ minHeight: '350px', width: 320 }}>
                        <CardCover>
                            <img
                                src="https://i.ibb.co/z4RHN9P/pexels-ron-lach-8396305.jpg"
                                srcSet="https://i.ibb.co/z4RHN9P/pexels-ron-lach-8396305.jpg"
                                loading="lazy"
                                alt=""
                            />
                        </CardCover>
                        <CardCover
                            sx={{
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}
                        />
                        <CardContent sx={{ justifyContent: 'flex-end' }}>
                            <Typography level="title-lg" textColor="#fff">
                            Personalized Styling
                            </Typography>
                            <Typography
                                startDecorator={<LocationOnRoundedIcon />}
                                textColor="neutral.300"
                            >
                                Providing personalized styling services where customers can receive recommendations based on their preferences, body type, and occasion, enhancing their shopping experience and ensuring satisfaction.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ minHeight: '280px', width: 320 }}>
                        <CardCover>
                            <img
                                src="https://i.ibb.co/Vw62VGs/pexels-n-voitkevich-8939564.jpg"
                                srcSet="https://i.ibb.co/Vw62VGs/pexels-n-voitkevich-8939564.jpg"
                                loading="lazy"
                                alt=""
                            />
                        </CardCover>
                        <CardCover
                            sx={{
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}
                        />
                        <CardContent sx={{ justifyContent: 'flex-end' }}>
                            <Typography level="title-lg" textColor="#fff">
                            Convenience and Accessibility
                            </Typography>
                            <Typography
                                startDecorator={<LocationOnRoundedIcon />}
                                textColor="neutral.300"
                            >
                                Ensuring convenience and accessibility through features like easy navigation, fast shipping, hassle-free returns, and responsive customer support, making shopping for clothing from different brands a seamless and enjoyable process.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Services;