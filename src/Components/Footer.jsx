import React from 'react'
import FooterLogo from '../assets/Images/footerLogo.png'
import { RiInstagramFill } from "react-icons/ri";
 import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <section className='footer-section p-4'>
        <div class="container">
          <footer class="py-5">
            <div class="row">

              <div class="col-md-6  mb-3">
                <form>
                  <img src={FooterLogo} className='img-fluid' />
                  <p className='mt-4 footer-text-para'>Creating impactful experiences through<br /> research, design, and development.</p>
                </form>
              </div>

              <div class="col-sm-6 col-md-2 mb-3">
                <h5>services</h5>
                <ul class="nav flex-column nav-cst-col-footer">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0">research</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0">design</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0">build</a></li>
                </ul>
              </div>

              <div class="col-sm-6 col-md-2 mb-3">
                <h5>know more</h5>
                <ul class="nav flex-column nav-cst-col-footer">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0">about us</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0">careers</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0">privacy policy</a></li>
                </ul>
              </div>

              <div class="col-sm-6 col-md-2 mb-3">
                <h5>say hello!</h5>
                <ul class="nav flex-column nav-cst-col-footer ">
                  <li class="nav-item mb-2 fw-bolder"><a href="#" class="nav-links p-0 email-cst-footer ">connect@melonn.design</a></li>
                </ul>
              </div>

            </div>
            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p className='copyright-text'>© 2024. All Rights Reserved</p>
              <ul class="list-unstyled d-flex">
                <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
              </ul>
              <div className='d-flex' style={{ gap: "32px" }}>
                <IoLogoLinkedin  style={{fontSize:"30px"}}/>
                <RiInstagramFill style={{fontSize:"30px"}} />
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  )
}

export default Footer