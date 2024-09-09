import React from 'react'
import cardImage from '../assets/Images/Rectangle34625147.png'

const AboutDesignComponent = () => {
    return (
        <section className='py-5 text-center about-design-section'>
            <div className='container'>
                <h1 className='mt-5'>We're not just about design</h1>
                <p>We’re here to help you create digital experiences that bring together innovation and practicality.</p>
                <div className='col-sm-6 col-12 mx-auto mt-5 mb-5' >
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h1>3+</h1>
                            <span>Countries served</span>
                        </div>
                        <div>
                            <h1>35+</h1>
                            <span>products crafted</span>
                        </div>
                        <div>
                            <h1>5+</h1>
                            <span>years of experience</span>
                        </div>
                    </div>
                </div>
                <br />
                <div className='mt-5'>
                    <h1 className='col-sm-6 col-12 mx-auto'>From concept to launch<br />
                        we can help you at every stage!</h1>
                    <p className='col-sm-8 col-12 mx-auto'>We’re a UX/UI design company that brings creative and extraordinary ideas to life with scalable, sustainable, and forward-thinking solutions.</p>

                    <div className='row mx-auto mt-5'>
                        <div className='col-sm-4 mb-4'>
                            <div className='card text-start m-4'>
                                <img src={cardImage} className='img-fluid' />
                                <div class="card-body">
                                    <h2>Research</h2>
                                    <hr />
                                    <p>We deliver data-driven insights that capture the user’s voice and align seamlessly with your business goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4 mb-4'>
                            <div className='card text-start m-4'>
                                <img src={cardImage} className='img-fluid' />
                                <div class="card-body">
                                    <h2>Design</h2>
                                    <hr />
                                    <p>Our team of UX/UI designers is passionate about crafting designs that users love—intuitive, engaging, and built to scale.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4 mb-4'>
                            <div className='card text-start m-4'>
                                <img src={cardImage} className='img-fluid' />
                                <div class="card-body">
                                    <h2>Build</h2>
                                    <hr />
                                    <p>We turn your designs into pixel-perfect, adaptable, and scalable digital products that drive business growth.</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-2 mb-5'>
                            <button className='cst-get-in-tout-btn btn-outline text-uppercase'>Work With US</button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutDesignComponent