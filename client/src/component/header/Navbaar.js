import React from 'react'
import "./navbaar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';

const Navbaar = () => {
  return (
    <header>
        <nav>
            <div className='left'>
                <div className='navLogo'>
                  <NavLink to="/"> <img src='https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png' alt="" /> </NavLink> 
                </div>
                <div className='nav_searchbaar'>
                    <input type = "text" name="" id="" />
                    <div className='search_icon'>
                        <SearchIcon/>
                    </div>

                </div>
            </div>

            <div className='right'>
                <div className='nav_btn'>
                    <NavLink to='/login'> signIn </NavLink>
                </div>

                <div className='cart_btn'>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon id='icon'/>
                    </Badge>
                    <p>Cart</p>
                </div>
                <Avatar className='avatar' />
                </div>
        </nav>
    </header>
  )
}

export default Navbaar
