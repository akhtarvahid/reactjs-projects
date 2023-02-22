import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
           <Link className='logo-container' to='/'>
             <div>Logo</div>
           </Link>
           <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
           </div>
        </div>
       <Outlet />
      </Fragment>
    )
  }
  export default Navigation;