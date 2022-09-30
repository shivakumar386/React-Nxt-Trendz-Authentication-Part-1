import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-elements">
    <div className="nav-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="header-logo"
      />
      <ul className="header-ul-elements">
        <li className="headers-list-elements">Home</li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="small-home-logos"
          />
        </li>
        <li className="headers-list-elements">Products</li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="small-home-logos"
          />
        </li>
        <li className="headers-list-elements">Cart</li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="small-home-logos"
          />
        </li>
      </ul>
      <button type="button" className="header-button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
