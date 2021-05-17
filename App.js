import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Gallery from "react-photo-gallery";
import { Button, Navbar, Nav, NavDropdown, Jumbotron } from "react-bootstrap";
import { render } from "react-dom";
import "./App.css";

const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
    width: 4927,
    height: 1000,
  },
  {
    src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
    width: 4,
    height: 3,
  },
];
function App() {
  return (
    <div>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        id="navbar"
      >
        <Navbar.Brand>Teal's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav me-auto">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#bytes">
              Bytes
            </Nav.Link>
            <Nav.Link href="#pixels">Pixels</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron fluid className="top d-flex justify-content-center !important">
        <div id="home" class="banner">
          <h1>Teal Matrix</h1>
          <p>Welcome to my portfolio</p>
        </div>
        <p></p>
      </Jumbotron>

      <div className="d-flex justify-content-center" id="bytes">
        <h2 className="d-flex justify-content-center">Bytes</h2>
        <ul className="bytes">
          <li>
            <a href="http://justbreath.ca/#">http://justbreath.ca</a>
          </li>
          <li>
            <a href="http://justbreath.ca/comicGame">
              http://justbreath.ca/comicGame
            </a>
          </li>
          <li>
            <a href="http://justbreath.ca/pre-cog/pick.html">
              http://justbreath.ca/pre-cog/pick.html
            </a>
          </li>
          <li>
            <a href="http://justbreath.ca/Todo/">http://justbreath.ca/Todo/</a>
          </li>
        </ul>
      </div>
      <div className="middle-test">
        <Jumbotron className="middle"></Jumbotron>
      </div>
      <h2 className="d-flex justify-content-center" id="pixels">
        Pixels
      </h2>
      <div id="gallery">
        <Gallery photos={photos} />
      </div>
      <div className="contact d-flex justify-content-center" id="contact">
        <h2>Teal.Matrix</h2>
      </div>
      <div className="social-medias d-flex justify-content-center">
        <a
          href="http://www.instagram.com/tealmatrix"
          class="fa fa-instagram"
        ></a>
        <a href="http://www.facebook.com/tealmatrix" class="fa fa-facebook"></a>
        <a href="http://www.twitter.com/tealmatrix" class="fa fa-twitter"></a>
      </div>
    </div>
  );
}

export default App;
