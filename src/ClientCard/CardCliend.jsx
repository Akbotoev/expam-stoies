import './CardClient.scss'
export const CardClient = ({product}) =>{
    return (
        <>
           <div className='card'>
          <div className='card__image'>
            <img src={product.thumbnailUrl} alt={product.title} />
          </div>
          <div className='card__title'>{product.title}<br/>120$</div>
        </div>
        </>
    )
}
export default CardClient;