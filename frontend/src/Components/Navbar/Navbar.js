import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./Navbar.css";
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';

const MyNavbar = () => {
  const { t } = useTranslation();
  // State to track the currently active link
  const [activeLink, setActiveLink] = useState("/home");

  // Handle click event to update the active link
  const handleNavClick = (link) => {
    setActiveLink(link);
  };
 
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto navbar-foot">
              <Nav.Link
                className={`navbar-items ${activeLink === "/home" ? "active" : ""}`}
                 as={Link}
                to="/home"
                onClick={() => handleNavClick("/home")}
              >
                {t('home')}
              </Nav.Link>
              <Nav.Link
                className={`navbar-items ${activeLink === "/News" ? "active" : ""}`}
                  as={Link}
                to="/News"
                onClick={() => handleNavClick("/News")}
              >
              {t('news')}
              </Nav.Link>
              <Nav.Link
                className={`navbar-items ${activeLink === "/Matches" ? "active" : ""}`}
              as={Link}
                to="/Matches"
                onClick={() => handleNavClick("/Matches")}
              >
                {t('matches')}
              </Nav.Link>
              <Nav.Link
                className={`navbar-items ${activeLink === "/Chat" ? "active" : ""}`}
               as={Link}
                to="/Chat"
                onClick={() => handleNavClick("/Chat")}
              >
                {t('ask-ai')}
              </Nav.Link>
              <Nav.Link
                className={`navbar-items ${activeLink === "/Standing" ? "active" : ""}`}
                as={Link}
                to="/Standing"
                onClick={() => handleNavClick("/Standing")}
              >
                {t('standing')}
              </Nav.Link>
              <Nav.Link
                className={`navbar-items ${activeLink === "/Profile" ? "active" : ""}`}
                href="/Profile"
                onClick={() => handleNavClick("/Profile")}
              >
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
