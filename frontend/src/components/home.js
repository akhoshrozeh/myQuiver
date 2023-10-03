import React from "react";
import MyNav from "./quiverNavBar";
import HomeCarousel from "./homeCarousel";
import ForSale from "./forSale";

class Home extends React.Component {
    render() {
        return <div>
            <MyNav></MyNav>
            <HomeCarousel></HomeCarousel>

        </div>
    }
}

export default Home;