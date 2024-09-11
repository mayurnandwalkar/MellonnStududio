import React from 'react'
import FooterLogo from '../assets/Images/footerLogo.png'
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
  const handleServices = (e) => {
    e.preventDefault();
    navigate('/service')
  }

  const handleAboutUs = (e) => {
    e.preventDefault();
    navigate('/about')
  }
  return (
    <>
      <section className='footer-section p-4'>
        <div className="container">
          <footer className="py-5">
            <div className="row">

              {/* Logo and Description */}
              <div className="col-md-6 mb-3">
                <img src={FooterLogo} className='img-fluid' alt="Footer Logo" />
                <p className='mt-4 footer-text-para'>Creating impactful experiences through<br /> research, design, and development.</p>
              </div>

              {/* Services Column */}
              <div className="col-lg-2 col-md-3 col-12 mb-3">
                <h5>Services</h5>
                <ul className="nav flex-column nav-cst-col-footer">
                  <li className="nav-item mb-2"><a href="#" onClick={handleServices} className="nav-link p-0">Research</a></li>
                  <li className="nav-item mb-2"><a href="#" onClick={handleServices} className="nav-link p-0">Design</a></li>
                  <li className="nav-item mb-2"><a href="#" onClick={handleServices} className="nav-link p-0">Build</a></li>
                </ul>
              </div>

              {/* Know More Column */}
              <div className="col-lg-2 col-md-3 col-12 mb-3">
                <h5>Know More</h5>
                <ul className="nav flex-column nav-cst-col-footer">
                  <li className="nav-item mb-2"><a href="#" onClick={handleAboutUs} className="nav-link p-0">About Us</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Careers</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Privacy Policy</a></li>
                </ul>
              </div>

              {/* Contact Column */}
              <div className="col-lg-2 col-md-3 col-12 mb-3">
                <h5>Say Hello!</h5>
                <ul className="nav flex-column nav-cst-col-footer">
                  <li className="nav-item mb-2 fw-bolder">
                    <a href="mailto:hello@melonn.design" className="nav-links p-0 email-cst-footer">hello@melonn.design</a>
                  </li>
                </ul>
              </div>

            </div>

            {/* Footer Bottom */}
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p className='copyright-text'>© 2024. All Rights Reserved</p>

              {/* Social Media Icons */}
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg>
                  </a>
                </li>
              </ul>

              {/* Additional Social Icons */}
              <div className='d-flex' style={{ gap: "32px" }}>
                <IoLogoLinkedin style={{ fontSize: "30px" }} />
                <RiInstagramFill style={{ fontSize: "30px" }} />
              </div>
            </div>
          </footer>
        </div>
      </section>

    </>
  )
}

export default Footer