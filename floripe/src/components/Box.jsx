import icon from '../assets/icon-yellow.svg';
import spoilers from '../assets/tittle1.svg';
import arrowDown from '../assets/arrow-down.svg';
import Carousel from '../components/carousel.jsx';


export function Box(){
    return(
        <div className='background-box'>
          <h1 className='title'>CUIDADO, AO ROLAR PODE CONTER...</h1>
          <img src={icon} className='icon' alt="Ícone de expectativa"/>
          <img src={spoilers} className='spoilersText' alt="Spoilers"/>
          <img src={arrowDown} className='arrowDown' alt='Seta para baixo'/>

          <h3 className='questionBeforeCarousel'>VOCÊ JÁ ESTAVA SABENDO?</h3>
          <Carousel />

        </div>
    )
}