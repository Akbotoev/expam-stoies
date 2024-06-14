import woman from '../../assets/images/woman.png'
import './First.scss'
export const First = () => {
  
    return (
        <>
            <div className='container'>
                <img  className='imgs' src={woman} alt='woman'/>
                <h2>Новые поступления
                в этом сезоне</h2>
                <button>Открыть в мгазине</button>
                </div>
          
        </>
    )
}
export default First;