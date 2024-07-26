import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import brandImg from './assets/brand.png';
import liner from './assets/liner.png';

function Header() {
    return (
        <div className="headerContainer">
          <header className="d-flex justify-content-between align-items-center mb-4 pt-4">
            <img src={brandImg} alt="Brand" className="brand" />
            <nav className="nav d-flex gap-4">
              <div className="navItem"><span className="navItemText">Информация</span></div>
              <div className="navItem"><span className="navItemText">Контакти</span></div>
              <div className="navItem"><span className="navItemText">Услуги</span></div>
            </nav>
            <div className="spacer"></div>
          </header>
          <div className="d-flex flex-row align-items-center content pt-5">
            <img src={liner} alt="Liner" className="liner mr-3" />
            <div className="d-flex flex-column textContainer pl-3">
              <h1 className="title">
                <span className="titlePart">Какво е Car Detailing и</span>
                <span className="titlePart">защо ви е нужно?</span>
              </h1>
              <p className="description mt-3">
                При нас детайлното почистване означава съвършенство, развитие и път към прогреса. Нашата цел е да предоставим висококачествени услуги и да постигнем максимално удовлетворение на клиентите. Доверете ни се, за да направим вашия автомобил да изглежда като нов.
              </p>
              <div className="d-flex gap-3 mt-3">
                <button className="btn btn-light btn-lg">Нашите услуги</button>
                <button className="btn btn-outline-light btn-lg">Контакти</button>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Header;