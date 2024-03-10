import React from 'react';
import '../ccss/design.css';
import Exchange from '../components/Exchange';
const Main = () => {
  return (
    <section className="bgimage" id="home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
    <Exchange/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
