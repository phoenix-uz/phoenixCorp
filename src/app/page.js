import PartnersSlider from "@/comopnents/partners";
import './layout.css';
import Contacts from "@/comopnents/contactForm";


export default function Home() {
  return (
    <main className="App">
      <div className="App-header">

        <p className='headerTitle' >
          Нам не нужен сайт, о нас могут сказать:
        </p>
        <img src='/image 73.png' className="App-logo" alt="logo" />
        <img  src='PHOENIX.png'  alt="logo" />
        <div className="container">

          <PartnersSlider/>
        </div>
        {/* <ContactForm/> */}
        <Contacts/>
        <div className='footer'>
          <div className='footerItem'>
            <div className='footerTitle'>Локация:</div>
            <div className='footerText'>Ташкент, Юнусабад 16б 28А</div>
          </div>
          <div className='footerItem'>
          <div className='footerTitle'>Телефон:</div>
          <div className='footerText'> <a className='footerLink' href='tel:+998971003021'>+99897-100-30-21</a></div>
          </div>
        </div>
      </div>
    </main>
  );
}
