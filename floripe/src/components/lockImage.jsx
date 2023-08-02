import lock from '../assets/lock.svg'
import '../components/lockImage.css'

export function locked(){
    return(
        <div className="lock">
            <img src={lock} className='lockIcon' alt='imagem bloqueada ou não adicionada'/>
        </div>
    )
}