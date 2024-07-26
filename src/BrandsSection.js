import "./BrandsSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logos from './assets/logos.png';
import linerLeft from './assets/liner.png';
import linerRight from './assets/liner.png';

function Brands() {
    return (
      <div className="section-small-4-brand-car">
        <div className="logo-row">
          <div className="title-wrapper">
            <img src={linerLeft} alt="Liner Left" className="liners pb-2" />
          </div>
          <div>
            <div className="brand-title p-2">Всички са добре дошли</div>
          </div>
          <div>
            <img src={linerRight} alt="Liner Right" className="liners pb-2"/>
          </div>
        </div>
          
        <div className="row justify-content-center">
          <div className="col-12 d-flex justify-content-center flex-wrap gap-3 mt-4">
            <img src={logos} alt="Logos" className="container-fluid" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Brands;