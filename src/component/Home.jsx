import { Link as LinkRouter } from "react-router-dom";
import Carousel from "./Carousel";
import CallToAction from "./CallToAction";
import '../style/callToAction.css';

function Home() {
    return (
        <>
            <button className="button-container">
                <LinkRouter to={'/Cities'}>
                <CallToAction />
                </LinkRouter>
            </button>
            <Carousel />
        </>
    )
}
export default Home; 