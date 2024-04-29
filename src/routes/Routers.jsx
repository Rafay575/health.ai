import Insights from "../pages/Insights";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            {/* <Route path="/blog" element= */}
          
        </Routes>
    );
};

export default Routers;
