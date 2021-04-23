import React from 'react'

const ActiviteCard = ({color,title,date,price}) => {
    return (
        <div className="activite-card">
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-date">{date}</p>
            </div>
            <div className={`card-price ${color}`}>
                <p className="card-price-content">{price}</p>
            </div>
            
        </div>
    )
}

export default ActiviteCard
