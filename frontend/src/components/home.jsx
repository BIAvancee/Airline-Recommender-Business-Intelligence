import React from 'react';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Header from './header';
import Navbar from './navbar';
import Portfilio from './portfilio';
import Services from './services';
import Team from './team';

function Home(props) {
    return (
      <div>

  {/* Navigation */}
  <Navbar/>
  {/* Header */}
  <Header/>
  {/* Services Section */}
  <Services/>
  {/* Portfolio Grid Section */}
  <Portfilio/>
  {/* Team Section */}
  
  {/* Clients Aside */}
  <Contact/>

  {/* Portfolio Modals */}
  {/* Use the modals below to showcase details about your portfolio projects! */}
  {/* Portfolio Modal 1 */}
  <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-content">
      <div className="close-modal" data-dismiss="modal">
        <div className="lr">
          <div className="rl">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="modal-body">
              {/* Project Details Go Here */}
              <h2>Project Name</h2>
              <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img className="img-responsive" src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502" alt />
              <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
              <p>
                <strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">RoundIcons.com</a>, or you can purchase the 1500 icon set <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">here</a>.</p>
              <ul className="list-inline">
                <li>Date: July 2014</li>
                <li>Client: Round Icons</li>
                <li>Category: Graphic Design</li>
              </ul>
              <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times" /> Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 2 */}
  <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-content">
      <div className="close-modal" data-dismiss="modal">
        <div className="lr">
          <div className="rl">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="modal-body">
              <h2>Project Heading</h2>
              <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img className="img-responsive img-centered" src="https://unsplash.imgix.net/44/9s1lvXLlSbCX5l3ZaYWP_hdr-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=f0a1db79752dbb04ec6d2aab7d17c7b0" alt />
              <p><a href="https://designmodo.com/startup/?u=787">Startup Framework</a> is a website builder for professionals. Startup Framework contains components and complex blocks (PSD+HTML Bootstrap themes and templates) which can easily be integrated into almost any design. All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.</p>
              <p>You can preview Startup Framework <a href="https://designmodo.com/startup/?u=787">here</a>.</p>
              <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times" /> Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 3 */}
  <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-content">
      <div className="close-modal" data-dismiss="modal">
        <div className="lr">
          <div className="rl">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="modal-body">
              {/* Project Details Go Here */}
              <h2>Project Name</h2>
              <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img className="img-responsive img-centered" src="https://unsplash.imgix.net/46/Ov6ZY1zLTWmhPC0wFysP_IMG_2896_edt.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=6518e4df89659818f6c0392175a9c5e6" alt />
              <p>Treehouse is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. This is bright and spacious design perfect for people or startup companies looking to showcase their apps or other projects.</p>
              <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/treehouse-free-psd-web-template/">FreebiesXpress.com</a>.</p>
              <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times" /> Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 4 */}
  <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-content">
      <div className="close-modal" data-dismiss="modal">
        <div className="lr">
          <div className="rl">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="modal-body">
              {/* Project Details Go Here */}
              <h2>Project Name</h2>
              <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img className="img-responsive img-centered" src="https://unsplash.imgix.net/44/9s1lvXLlSbCX5l3ZaYWP_hdr-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=f0a1db79752dbb04ec6d2aab7d17c7b0" alt />
              <p>Start Bootstrap's Agency theme is based on Golden, a free PSD website template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Golden is a modern and clean one page web template that was made exclusively for Best PSD Freebies. This template has a great portfolio, timeline, and meet your team sections that can be easily modified to fit your needs.</p>
              <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/golden-free-one-page-web-template/">FreebiesXpress.com</a>.</p>
              <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times" /> Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 5 */}
  <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-content">
      <div className="close-modal" data-dismiss="modal">
        <div className="lr">
          <div className="rl">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="modal-body">
              {/* Project Details Go Here */}
              <h2>Project Name</h2>
              <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img className="img-responsive img-centered" src="https://unsplash.imgix.net/46/Ov6ZY1zLTWmhPC0wFysP_IMG_2896_edt.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=6518e4df89659818f6c0392175a9c5e6" alt />
              <p>Escape is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Escape is a one page web template that was designed with agencies in mind. This template is ideal for those looking for a simple one page solution to describe your business and offer your services.</p>
              <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/escape-one-page-psd-web-template/">FreebiesXpress.com</a>.</p>
              <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times" /> Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 6 */}
  <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-content">
      <div className="close-modal" data-dismiss="modal">
        <div className="lr">
          <div className="rl">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="modal-body">
              {/* Project Details Go Here */}
              <h2>Project Name</h2>
              <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img className="img-responsive img-centered" src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502" alt />
              <p>Dreams is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Dreams is a modern one page web template designed for almost any purpose. It’s a beautiful template that’s designed with the Bootstrap framework in mind.</p>
              <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/dreams-free-one-page-web-template/">FreebiesXpress.com</a>.</p>
              <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times" /> Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <span style={{height: 20, width: 40, minHeight: 20, minWidth: 40, position: 'absolute', opacity: '0.85', zIndex: 8675309, display: 'none', cursor: 'pointer', backgroundImage: 'url(data:image/png'}} />
</div>

    );
}

export default Home;