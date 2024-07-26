import carImage from './assets/object---photo.png';
import messageQuestion from './assets/icon-label-3.svg';
import liner from './assets/liner.png';
import './InfoSection.css';

function InfoSection() {
  return (
    <div className="section-3-faq container-fluid pt-4 mt-5">
      <div className="row">
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <img src={carImage} alt="Car" className="img-fluid car-image" />
        </div>
        <div className="col-md-6 faq-section">
          <div className="label-container mt-3 d-flex align-items-center">
            <div className="icon-label">
              <img src={messageQuestion} alt="Info Icon" />
            </div>
            <span className="info-title ms-2 ">Информация !</span>
          </div>
          <h1 className="faq-title mt-2 mb-5">Какво представляват услугите ни ?</h1>

          <div className="faq-item mb-2">
            <div className="faq-content">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="faq-question">Къде се извършват нашите услуги ?</h4>
              </div>
              <div className="faq-answer mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
            </div>
          </div>

          <img src={liner} className='mb-4 mt-4'></img>

          <div className="faq-item mb-2">
            <div className="faq-content">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="faq-question">Услуга 2?</h4>
              </div>
              <div className="faq-answer mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
            </div>
          </div>

          <img src={liner} className='mb-4 mt-4'></img>

          <div className="faq-item mb-2">
            <div className="faq-content">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="faq-question">Услуга 3 ?</h4>
              </div>
              <div className="faq-answer mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
            </div>
          </div>
          <img src={liner} className='mb-4 mt-4'></img>
        </div>
      </div>
    </div>
  );
}
  
  export default InfoSection;