import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../App.css'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from  'react-router-dom'

function Navbar() {
  return (
    <div className='navs__container'>
      <div className='navs'>
      <div className='nav__logos'>
        <Link to='/'>
        <img  className='img__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>
      </div>
      <div className='nav__searchs'>
        <form>
            <input type="text" placeholder="typing your product"/>
            <SearchIcon className='search__icon'/>
        </form>
      </div>
      <div class='nav__logins'>
        <span className="login__lineone">hello,sign in</span>
        <span className='login__linetwo'>Account&List</span>
      </div>
      <div className='nav__returns'>
        <span className='return__lineone'>returns</span>
        <span className='return__linetwo'>&order</span>
      </div>
      <div className='nav__carts'>
        <Link to='/checkout'>
          <AddShoppingCartIcon />
        </Link>
      </div>
    </div>
    <div className='main__navs'>
      <div className='all__catas'>
        <MenuIcon/>
        <span>all</span>
      </div>
      <div className='nav__fill'>
        <div className='nav__shops'>
          <div>today's deal</div>
          <div>customer service</div>
          <div>registry</div>
          <div>sell</div>
        </div>
      </div>
      <div className='nav__rights'>
        <div className='shop__deal'>shop deal in electronic</div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
