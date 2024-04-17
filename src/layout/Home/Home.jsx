import Banner from "../../components/banner/Banner";
import AllCollectionTypes from "../../components/collection/AllCollectionTypes";
import Location from "../../components/location/Location";
import Promo from "../../components/promoSection/Promo";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllCollectionTypes></AllCollectionTypes>
            <Promo></Promo>
            <Location></Location>
        </div>
    );
};

export default Home;