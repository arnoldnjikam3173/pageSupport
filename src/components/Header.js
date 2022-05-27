import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='navbar'>
        <div className='nav'>
            <div className='tech'>
                <Link to='/' className='techn'>Legrowtech</Link>
            </div>
            <Link to='/' className='item'>Learn</Link>
            <Link to='/Support' className='item'>Support</Link>
            <Link to='/English' className='item'>English</Link>
            <Link to='/portail' className='item'>Portail</Link>
        </div>
    </div>
  )
}

export default Header