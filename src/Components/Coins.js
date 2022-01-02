import React from 'react';
import './coins.css';

const Coins = ({
    name, 
    price, 
    symbol, 
    marketCap, 
    volume, 
    image, 
    priceChange
}) => {
    return (
        <div className="coin">
            <div className="thumb">
                <img src={image} alt="crypto" />
            </div>
            <p className='name'>{name}</p>
            <p className='symbol'>{symbol}</p>
            <p className='price'>{price}</p>
            <p className='volume'>{volume.toLocaleString()}</p>

            {priceChange > 0 ? (
                <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
            ) : (
                <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
            )}

            <p className='mkt-cap'>Mkt Cap: {marketCap.toLocaleString()}</p>
        </div>
    )
}

export default Coins;