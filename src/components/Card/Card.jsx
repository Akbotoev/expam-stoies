import './Card.scss'


 export const Card = ({ src, alt, title }) => {
        return (
            <div className="card">
                <div className="card__img">
                    <img src={src} alt={alt} />
                </div>
                <h4 className="card__title">{title}</h4>
            </div>
        )
    }
    
export default Card;