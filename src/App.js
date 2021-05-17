import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Gallery from "react-photo-gallery";
import { Button, Navbar, Nav, NavDropdown, Jumbotron } from "react-bootstrap";
import { render } from "react-dom";
import home from "./images/home.png";
import comicgame from "./images/comicgame.png";

import Gallery1 from "react-grid-gallery";

import precog from "./images/precog.png";
import todo from "./images/todo.png";
import "./App.css";
const IMAGES = [
  {
    src: "https://i.imgur.com/9ISOP2E.gif",
    thumbnail: "https://i.imgur.com/9ISOP2E.gif",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Mountains",
  },
  {
    src: "https://i.imgur.com/Xtfb9Mg.png",
    thumbnail: "https://i.imgur.com/Xtfb9Mg.png",
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "Self Portrait",
  },
  {
    src: "https://i.imgur.com/pUGwQU3.jpg",
    thumbnail: "https://i.imgur.com/pUGwQU3.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Portrait of a woman",
  },
  {
    src: "https://i.imgur.com/okKbPFr.png",
    thumbnail: "https://i.imgur.com/okKbPFr.png",
    thumbnailWidth: 320,
    thumbnailHeight: 200,
    caption: "Portrait of a Reaper",
  },
  {
    src: "https://i.imgur.com/88hQr43.gif",
    thumbnail: "https://i.imgur.com/88hQr43.gif",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Landscape, Garden of Eden",
  },

  {
    src: "https://i.imgur.com/h5w6C2v.png",
    thumbnail: "https://i.imgur.com/h5w6C2v.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Portrait of a child",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
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
          <h1 id="name">Teal Matrix</h1>
        </div>
      </Jumbotron>
      <section className="section-3" id="section-3">
        <h1
          id="byteh1"
          className="section-heading section-3-heading d-flex justify-content-center"
        >
          Bytes
        </h1>
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

      <div id="gallery">
        <h2 className="d-flex justify-content-center" id="pixels">
          Pixels
        </h2>
        <div>
          <Gallery1 className="galleryMain" images={IMAGES} />
        </div>
      </div>

      <div className="div">
        <Jumbotron className="bottom"></Jumbotron>
        <h2 className="contact">Contact Me</h2>
        <div className="social-medias d-flex justify-content-center">
          <a
            href="http://www.instagram.com/tealmatrix"
            class="fa fa-instagram"
          ></a>
          <a
            href="http://www.facebook.com/tealmatrix"
            class="fa fa-facebook"
          ></a>
          <a href="http://www.twitter.com/tealmatrix" class="fa fa-twitter"></a>
        </div>
      </div>
    </div>
  );
}

export default App;
