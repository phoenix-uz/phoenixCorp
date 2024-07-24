import React from "react";
import "./styles.sass";

const PartnersSlider = () => {
  return (
    <div className='partnersSlider'>
      <div className='container'>
        <div className='partnersContainer'>
          <div className='partnersItems'>
            <a
              href='https://euphoria-group.uz/'
              className='item'
            >
              <img
                src='/euphoria2.png'
                alt='euohoria'
              />
            </a>
            <a
              href='https://arbitpro.com'
              className='item'
            >
              <img
                src='/arbit2.png'
                alt='arbit'
              />
            </a>
            <a
              href='https://bydauto.uz'
              className='item'
            >
              <img
                src='/byd2.png'
                alt='byd'
              />
            </a>
            <a
              href='https://kiber-one.com'
              className='item'
            >
              <img
                src='/kiber3.png'
                alt='kiberone'
              />
            </a>
          </div>
          <div className='partnersItems'>
            <a
              href='https://proskill-academy.com/'
              className='item'
            >
              <img
                src='/pro2.png'
                alt='proskill'
              />
            </a>
            <a
              href=''
              className='item'
            >
              <img
                src='/rcd 1.png'
                alt='rcd'
              />
            </a>
            <a
              href=''
              className='item'
            >
              <img
                src='/global2.png'
                alt='global'
              />
            </a>
            <a
              href='https://sayonar.uz/'
              className='item'
            >
              <img
                src='/sayonar 1.png'
                alt='sayonar'
              />
            </a>
          </div>
          {/* <div className='partnersItems'>
            <a
              href=''
              className='item'
            >
              <img
                src={emotion}
                alt='emotion'
              />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PartnersSlider;
