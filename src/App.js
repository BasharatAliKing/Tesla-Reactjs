import React,{useRef} from 'react';
import './App.css';
import  "bootstrap/dist/css/bootstrap.css";
import Cars from './Cars';
import Solar from './Solar';
import ReactFullpage from '@fullpage/react-fullpage';


// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const pluginWrapper = () => {
//   require('./statics/fullpage.scrollHorizontally.min');
};

export const Fullpage = () => (
  <ReactFullpage
    pluginWrapper = {pluginWrapper}

    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    scrollHorizontally = {true}  /* Because we are using the extension */
    scrollHorizontallyKey = {'YOUR KEY HERE'}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
             <section id="header">
      <nav class="navbar navbar-expand-lg  ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={process.env.PUBLIC_URL+"./logo.png"} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
       <ul className="navbar nav">
        <li className="nav-item"><a href="" className='nav-link'>Model S</a></li>
        <li className="nav-item"><a href="" className='nav-link'>Model 3</a></li>
        <li className="nav-item"><a href="" className='nav-link'>Model X</a></li>
        <li className="nav-item"><a href="" className='nav-link'>Model Y</a></li>
        <li className="nav-item"><a href="" className='nav-link'>Solar Roof</a></li>
        <li className="nav-item"><a href="" className='nav-link'>Solar Panels</a></li>
       </ul>
     
    </div>
  </div>
</nav>

      </section>
        
         
           
            <div onClick={() => fullpageApi.moveSectionDown()}>
            <section id="model-3">
            <Cars image={process.env.PUBLIC_URL+"./M3-Homepage-Desktop-LHD.jpg"} heading={"Model 3"} para={"Order Online for Touchless Delivery"} btn1={"Custom Order"} btn2={"Existing Inventory"}/>
            </section>
            </div>
            <div className="section">
            <section id="model-y">
            <Cars  image={process.env.PUBLIC_URL+"./Desktop-ModelY.jpg"} heading={"Model Y"} para={"Order Online for Touchless Delivery"} btn1={"Custom Order"} btn2={"Existing Inventory"} />
            </section>
            </div>
            <div className="section">
            <section id="model-s">
            <Cars  image={process.env.PUBLIC_URL+"./Homepage-Model-S-Desktop-LHD.jpg"} heading={"Model S"} para={"Order Online for Touchless Delivery"} btn1={"Custom Order"} btn2={"Existing Inventory"} />
            </section>
            </div>
            <div className="section">
            <section   id="model-x">
     <Cars  image={process.env.PUBLIC_URL+"./Homepage-Model-X-Desktop-LHD.jpg"} heading={"Model X"} para={"Order Online for Touchless Delivery"} btn1={"Custom Order"} btn2={"Existing Inventory"} />
    </section>
            </div>
            <div className="section">
            <section   id="solar-panels">
     <Solar image={process.env.PUBLIC_URL+"./_25-HP-SolarPanels-D.jpg"} heading={"Solar Panels"} par={"Lowest Cost Solar Panels in America"} btn1={"Order Now"} btn2={"Learn More"} />
    </section>
            </div>
            <div className="section">
            <section   id="solar-roof">
     <Solar image={process.env.PUBLIC_URL+"./Homepage-SolarRoof-Desktop-Global.webp"} heading={"Solar Roof"} par={"Produce Clean Energy From Your Roof"} btn1={"Order Now"} btn2={"Learn More"} />
    </section>
            </div>
              <div className="section">
              <section   id="accessories">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img src={process.env.PUBLIC_URL+"./dd739764-bcaa-4263-9488-8c73bc9fb046.jpg"} alt="" />
            <div className="texts">
              <h1 >Accessories</h1>
              <button className='btn'>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul  className="navbar nav">
              <li className="nav-item">Tesla &copy; 2022</li>
              <li className="nav-item">Privacy & Legal</li>
              <li id='vehicle' className="nav-item">Vehicle Recalls</li>
              <li className="nav-item">Contact</li>
              <li className="nav-item">Careers</li>
              <li className="nav-item">News</li>
              <li id='engage' className="nav-item">Engage</li>
              <li id='location' className="nav-item">Locations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
              </div>
    <div className="section">
   
    </div>
          
         </ReactFullpage.Wrapper>
      );
    }}
  />
);
