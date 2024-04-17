import Banner from "../../components/banner/Banner";
import AllCollectionTypes from "../../components/collection/AllCollectionTypes";
import Location from "../../components/location/Location";
import Promo from "../../components/promoSection/Promo";
import Services from "../../components/services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllCollectionTypes></AllCollectionTypes>
            <Services></Services>
            <Promo></Promo>
            <Location></Location>
        </div>
    );
};

export default Home;