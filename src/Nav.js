import "./styles.css";
import Product from "./Product";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Store from "./Store";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <BrowserRouter>
        {/* <nav
          class="navbar navbar-expand-lg bg-body-tertiary  bg-dark "
          data-bs-theme="dark"
        >
          <div class="container-fluid">
            <a class="navbar-brand fst-italic" href="#">
              <b>Panun</b>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/product"
                  >
                    Product
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <form class="form-inline d-flex">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav> */}

        {/* <header>
          <div class="container">
            <img
              id="logo"
              src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-what-you-need-know-before-rebranding-11.png"
              alt=""
              class="fa fa-apple"
              aria-hidden="true"
              width="30px"
            />
            <nav>
              <Link to="/">Mac</Link>
              <Link to="/about">About</Link>
              <Link to="/product">Product</Link>
              <Link to="/about">Contact</Link>
            </nav>
            <div class="right">
              <span>
                <form class="form-inline d-flex">
                  <input
                    id="search"
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </span>
              <span>
                <img
                  id="lock"
                  src="http://mateen.kurdzman.net/padlock.png"
                  alt=""
                />
              </span>
            </div>
          </div>
        </header> */}
        <nav class="navbar navbar-dark navbar-expand-md bg-dark">
          <div class="container">
            <button
              data-toggle="collapse"
              class="navbar-toggler"
              data-target="#navcol-1"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navcol-1">
              <ul class="nav navbar-nav flex-grow-1 justify-content-between">
                <li>
                  {" "}
                  <img
                    id="logo"
                    src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-what-you-need-know-before-rebranding-11.png"
                    alt=""
                    class="fa fa-apple"
                    aria-hidden="true"
                    width="30px"
                  />
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" href="#">
                    <i class="fa fa-apple apple-logo"></i>
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <Link to="/" class="nav-link">
                    Store
                  </Link>
                </li>
                <li class="nav-item" role="presentation">
                  <Link to="/about" class="nav-link">
                    About
                  </Link>
                </li>
                <li class="nav-item" role="presentation">
                  <Link to="/product" class="nav-link">
                    Product
                  </Link>
                </li>
                <li class="nav-item" role="presentation">
                  <Link to="/contact" class="nav-link">
                    Contact
                  </Link>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" href="#">
                    <i class="fa fa-search"></i>
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" href="#">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                </li>
                <li>
                  <form class="form-inline d-flex">
                    <input
                      id="search"
                      class="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      class="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/store" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
