import React from 'react';
 import Airways from "../assets/us.jpg"
 import Southwest from "./../assets/southwest.jpeg"
 import Delta from "./../assets/delta.jpg"
 import Virgin from "./../assets/virgin.png"
 import United from "./../assets/united.jpg"
 import Americain from "./../assets/americain.jpg"
 
// import Private from "./../assets/privateflight.jpg"

function Portfilio(props) {
    return (
        <section id="portfolio" className="bg-light-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Most Recommended Airlines</h2>
          <br/><br/><br/><br/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x" />
              </div>
            </div>
             <img src={Airways} className="img-responsive" alt /> 
          </a>
          <div className="portfolio-caption">
            <h4>US Airline</h4>
            <p className="text-muted"></p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x" />
              </div>
            </div>
            <img src={Southwest} className="img-responsive" alt />
          </a>
          <div className="portfolio-caption">
            <h4>Southwest Airline</h4>
            <p className="text-muted"></p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x" />
              </div>
            </div>
            <img src={Delta}            className="img-responsive" alt />
          </a>
          <div className="portfolio-caption">
            <h4>Delta Airline</h4>
            <p className="text-muted"></p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x" />
              </div>
            </div>
            <img src={Virgin}             className="img-responsive" alt />
          </a>
          <div className="portfolio-caption">
            <h4>Virgin America Airline</h4>
            <p className="text-muted"></p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x" />
              </div>
            </div>
            <img src={United}
            className="img-responsive" alt />
          </a>
          <div className="portfolio-caption">
            <h4>United Airline</h4>
            <p className="text-muted"></p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x" />
              </div>
            </div>
            <img src={Americain}
             className="img-responsive" alt />
          </a>
          <div className="portfolio-caption">
            <h4>Americain Airline</h4>
            <p className="text-muted">Website Design</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}

export default Portfilio;