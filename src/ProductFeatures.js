import React from 'react';
import './ProductFeatures.css';
import starIcon from './assets/starIcon.svg';
import broomIcon from './assets/broom.svg';
import shieldIcon from './assets/shield.svg';
import labelIcon from './assets/icon-label.png';

function ProductFeatures() {
    return (
        <section className="feature-section p-5">
            <div className="cta-text">
                <div className="label-container">
                    <div className="icon-label">
                        <img src={labelIcon} alt="icon" />
                    </div>
                    <span>Гарантираме Ви !</span>
                </div>
                <h1>Ние Ви гарантираме, че <br/> ще получите:</h1>
                <button className="btn btn-outline-light cta-button">Свържи се с нас</button>
            </div>
            <div className="d-flex justify-content-between future-card-section">
                <div className="feature-card">
                    <img src={starIcon} alt="High Quality Icon" />
                    <h3>Топ <br /> качество</h3>
                </div>
                <div className="feature-card">
                    <img src={broomIcon} alt="Cleaning of Deposits Icon" />
                    <h3>Безупречно<br /> почистване</h3>
                </div>
                <div className="feature-card">
                    <img src={shieldIcon} alt="Engine Protection Icon" />
                    <h3>Прецизност и <br /> защита</h3>
                </div>
            </div>
        </section>
    );
}

export default ProductFeatures;