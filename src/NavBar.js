import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Store from "./Store";
import NoPage from "./NoPage";

export default function NavBar() {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="/docs/5.3/assets/brand/https://www.google.com/url?sa=i&url=https%3A%2F%2F1000logos.net%2Fapple-logo%2F&psig=AOvVaw1FAZRMToMEyaMCb53rCgTV&ust=1674632630124000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPjo6-na3_wCFQAAAAAdAAAAABAE"
            alt="Apple"
            width="30"
            height="24"
          />
        </a>

        {/* <div className="App">
          <BrowserRouter>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/about">About Us</Link>
              </li>
              <li>
                {" "}
                <Link to="/product">product</Link>
              </li>
              <li>
                {" "}
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                {" "}
                <Link to="/Store">Store</Link>
              </li>
            </ul>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<Product />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Store" element={<Store />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
        </div>  */}
      </div>
    </nav>
  );
}
