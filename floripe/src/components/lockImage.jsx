import lock from '../assets/lock.svg'
import '../styles/lockImage.css'

export function Locked(){
    return(
        <div className="lock">
            <img src={lock} className='lockIcon' alt='imagem bloqueada ou não adicionada'/>
        </div>
    )
}