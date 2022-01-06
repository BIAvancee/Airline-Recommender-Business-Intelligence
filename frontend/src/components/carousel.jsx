import React from 'react';

function Carousel(props) {
    return ( 
          
<div className="bd-example">
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
    {data.map(( item, index) => (

      <li data-target="#carouselExampleCaptions" data-slide-to={index} className={`${index==0 ? "active" : ""}`} />
      

      ))}
    </ol>
    <div className="carousel-inner">
        {data.map(( item, index) => (
              
              <div className={`carousel-item ${index==0 ? "active" : ""}`}>
                  {console.log( index==0)}
                <img src="..." className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{item}</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
              
                 
                    
                    ))}
     
     </div>  
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
    );
}

export default Carousel;