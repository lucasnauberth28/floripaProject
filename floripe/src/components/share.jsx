import '../styles/share.css'

import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import whatsapp from '../assets/whatsapp.svg';
import twitter from '../assets/twitter.svg';

export function Share(){
    const item = document.querySelector('slideItem');
    item.addEventListener('mouseenter', () => {
        console.log('testes')
    });

    return(
        <div className='bgShare'>
            <p>Espalhe este SPOILER:</p>
            <img src={facebook} alt="Acesse o Facebook Tiki!"/>
            <img src={linkedin} alt="Acesse o Linkedin Tiki!"/>
            <img src={whatsapp} alt="Acesse o Whatsapp Tiki!"/>
            <img src={twitter} alt="Acesse o Twitter Tiki!"/>
        </div>
    )
}