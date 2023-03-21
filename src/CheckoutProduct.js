import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };


  return (
        <div className="checkoutProduct">
          <img className="checkPro__image" src={image} />
            <div className="checkPro__info">
              <p className="checkPro__title">{title}</p>
                <p className="checkPro__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkPro__rating">
                  {Array(rating)
                        .fill()
                        .map((i) => (
                            <p>⭐</p>
                        ))}
                </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}{''}
      </div>
    </div>
    );
}


export default CheckoutProduct