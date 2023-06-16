import { Link as LinkRouter } from "react-router-dom";
import Carousel from "./Carousel";

function Home() {
    return (
        <>
            <button>
                <LinkRouter to={'/Cities'}> Cities
                </LinkRouter>
            </button>
            <Carousel />
        </>
    )
}
export default Home;