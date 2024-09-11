import { useLocation, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import Logo from '../assets/Images/logo.png'
import ToogleLogo from '../assets/Images/Component25.png'
import CloseToogleLogo from '../assets/Images/closeIcon.png'

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const hanldeAboutUs = (e) => {
    e.preventDefault();
    navigate("/about")
  }

  const handleServices = (e) => {
    e.preventDefault();
    navigate("/service")
  }
  const handleCasestudy = (e) => {
    e.preventDefault();
    navigate("/")
  }

  const handleContactUs = (e) => {
    e.preventDefault();
    navigate("/contact-us")
  }

  const handleNavLogo = (e) => {
    e.preventDefault();
    navigate("/")
  }


  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='container' data-aos="zoom-in-up" >
        <header>
          <div className={`header cst-bg-bg-wt rounded-3 ${isOpen ? 'open-menu' : ''}`}>
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <a class="navbar-brand" href="#" onClick={handleNavLogo}>
                  <img src={Logo} className='img-fluid' />
                </a>

                <button class="navbar-toggler" type="button" onClick={handleToggleClick} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="navbar-toggler">
                  <img src={CloseToogleLogo} className="img-fluid header-close" />
                  <img src={ToogleLogo} className="img-fluid header-open" />
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class={`nav-link ${location.pathname == "/about" ? 'active' : ''} `} aria-current="page" href="#" onClick={hanldeAboutUs}>about us</a>
                    </li>
                    <li class="nav-item">
                      <a class={`nav-link ${location.pathname == "/service" ? 'active' : ''}`} aria-current="page" href="#" onClick={handleServices}>services</a>
                    </li>
                    <li class="nav-item">
                      <a class={`nav-link`} aria-current="page" href="#" onClick={handleCasestudy}>case studies</a>
                    </li>
                    <li class="nav-item">
                      <a class={`nav-link ${location.pathname == "/contact-us" ? 'active' : ''}`} aria-current="page" href="#" onClick={handleContactUs}>contact us</a>
                    </li>
                  </ul>
                  <form class="d-flex" role="search">
                    <button class="cst-get-in-tout-btn btn-outline text-uppercase contact-us-btn-cst" type="submit" onClick={handleContactUs}>Contact Us</button>
                  </form>
                </div>
              </div>
            </nav>

          </div>
        </header>
      </div>

    </>
  )
}

export default Header

