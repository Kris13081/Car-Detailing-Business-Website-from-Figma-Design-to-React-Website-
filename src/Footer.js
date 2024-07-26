import './Footer.css';
import facebook from './assets/facebookIcon.png';
import instagram from './assets/instagramIcon.png';
import linkedIn from './assets/linkedinIcon.png';
import twitter from './assets/twitterIcon.png';
import brand from './assets/brand.png';
import label from './assets/icon-label.png';
import liner from './assets/liner.png';

function Footer() {
    return (
        <div className="footer text-light py-5">
            <div className="container-fluid">
                <div className="footer-content row w-100">
                    <div className="col-md-6 w-75">
                        <img src={brand} alt="Brand" className="footer-brand mb-3" />
                        <p className="footer-description">
                            Our activities in the oil and petrochemical sector, engineering, construction, and production 
                            of lubricants date back to 25 years ago An activity that continues to grow and develop 
                            through the design and implementation of various projects
                        </p>
                        <div className="footer-line mb-3"></div>
                    </div>
                    <div className="col-md-6 w-25 d-flex flex-column justify-content-end align-items-start">
                        <div className="footer-contact mb-3">
                            <div className="icon-text-container mb-2 d-flex align-items-center">
                                <div className="icon-label mr-2">
                                    <img src={label} alt="Email Icon" />
                                </div>
                                <div>
                                    <h6>Email:</h6>
                                    <p className="m-0">examplemail@gmail.com</p>
                                </div>
                            </div>
                            <div className="icon-text-container d-flex align-items-center">
                                <div className="icon-label mr-2">
                                    <img src={label} alt="Phone Icon" />
                                </div>
                                <div>
                                    <h6>Телефон:</h6>
                                    <p className="m-0">+359 88 888 8888</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="social-icons mt-3 d-flex justify-content-start">
                    <button className="mx-2 bg-transparent"><img src={facebook} alt="Facebook" /></button>
                    <button className="mx-2 bg-transparent"><img src={linkedIn} alt="Whatsapp" /></button>
                    <button className="mx-2 bg-transparent"><img src={instagram} alt="Instagram" /></button>
                    <button className="mx-2 bg-transparent"><img src={twitter} alt="Twitter" /></button>
                </div>


                <div className="copyright text-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={liner} alt="Left Liner" className="lnr mr-2" />
                        <p className="m-0">
                            © 2024 | All Rights Reserved | Powered by Carlio Design Department
                        </p>
                        <img src={liner} alt="Right Liner" className="lnr ml-2" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;