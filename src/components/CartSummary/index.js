import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let usualPrice = 0
      const totalPrice = cartList.map(each => {
        usualPrice += each.price * each.quantity
        return usualPrice
      })

      const listLength = cartList.length

      return (
        <div className="summary-container">
          <h1 className="order-total">
            Order Total :
            <span className="rupees">{`Rs ${
              totalPrice[listLength - 1]
            }/-`}</span>
          </h1>
          <p className="no-of-items">{`${listLength} items in cart`}</p>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
