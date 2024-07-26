import React from 'react';
import carPic from './assets/aboutusPic.png';
import iconLabel from './assets/icon-label-2.svg';
import liner from './assets/liner.png';
import './AboutSection.css';

function AboutUsSection() {
    return (
        <div className=" about-container">
          <div className="row align-items-center py-5">
            <div className="col-md-6">
              <img src={carPic} alt="Car" className="container-fluid about-img" />
            </div>
            <div className="col-md-6">
              <div className="p-3 mb-3 text-black rounded d-flex align-items-center">
                <img src={iconLabel} alt="Icon" className="icon" id='aboutIcon' />
                <span className="ms-3 about-span">За нас !</span>
              </div>
              <p className="text-muted mb-3 fs-5">
                Нашият бранд е един от най-надеждните в сферата на детайлното почистване на автомобили, предоставяйки висококачествени услуги с дългогодишен опит в индустрията. Разберете повече за нашите услуги:
              </p>
              <div className="my-4">
                <img src={liner} alt="Liner decoration" className="img-fluid about-img" />
              </div>
              <div className="w-100 d-flex justify-content-center align-items-center">
              <button className="btn btn-danger btn-lg w-100 about-btn">
                УСЛУГИ
              </button>
              </div>
            </div>
          </div>
        </div>
      );
    };
export default AboutUsSection;