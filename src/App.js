import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Gallery from "react-photo-gallery";
import { Button, Navbar, Nav, NavDropdown, Jumbotron } from "react-bootstrap";
import { render } from "react-dom";
import home from "./images/home.png";
import comicgame from "./images/comicgame.png";
import precog from "./images/precog.png";
import todo from "./images/todo.png";
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
      </Jumbotron>
      <section className="section-3" id="section-3">
        <h1 className="section-heading section-3-heading">Bytes</h1>
        <div className="projects-wrapper center">
          <div className="row">
            <div className="project">
              <div className="project-text">
                <h2 className="project-name">Home</h2>
                <h4 className="project-technologies">HTML / CSS / JS</h4>
              </div>
              <img src={home} className="project-img" alt="asdf" />
              <a href="http://justbreath.ca/#" className="project-link">
                Go to Site
              </a>
            </div>
            <div className="project">
              <div className="project-text">
                <h2 className="project-name">Comic Game App</h2>
                <h4 className="project-technologies">HTML / CSS / JS</h4>
              </div>
              <img src={comicgame} className="project-img" alt="asdf" />
              <a href="http://justbreath.ca/comicGame" className="project-link">
                Go to Site
              </a>
            </div>
          </div>

          <div className="row">
            <div className="project">
              <div className="project-text">
                <h2 className="project-name">Precog App</h2>
                <h4 className="project-technologies">HTML / CSS / JS</h4>
              </div>
              <img src={precog} className="project-img" alt="asdf" />
              <a
                href="http://justbreath.ca/PRECOG/pick.html"
                className="project-link"
              >
                Go to Site
              </a>
            </div>

            <div className="project">
              <div className="project-text">
                <h2 className="project-name">Todo App</h2>
                <h4 className="project-technologies">HTML / CSS / JS</h4>
              </div>
              <img src={todo} className="project-img" alt="asdf" />
              <a href="http://justbreath.ca/Todo/" className="project-link">
                Go to Site
              </a>
            </div>
          </div>
        </div>
      </section>

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
