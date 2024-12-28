import {useState, React,useContext} from 'react';
import './Navbar.css'
import Logo from '../assets/logo.png';
import Cart from '../assets/cart_icon.png';
import {Link} from 'react-router-dom';
import { ShopContext } from '../../Context/Context';

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const {getTotalCartItems} = useContext(ShopContext)
    return(
        <>
            <div className='nav'>
                <div className='logo'>
                    <img src={Logo} alt="Logo"/>
                    <p>GUCCI</p>
                </div>
                <ul className="menu">
                    <li onClick={()=>{setMenu('shop')}}><Link to='/' style={{ textDecoration: 'none', color: '#000'}}>Shop</Link></li>
                    <li onClick={()=>{setMenu('men')}}><Link to='/mens' style={{ textDecoration: 'none', color: '#000'}}>Men</Link></li>
                    <li onClick={()=>{setMenu('women')}}><Link to='/womens' style={{ textDecoration: 'none', color: '#000'}}>Women</Link></li>
                    <li onClick={()=>{setMenu('kids')}}><Link to='/kids' style={{ textDecoration: 'none', color: '#000'}}>Kids</Link></li>
                </ul>
                <div className='cart'>
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><img src={Cart} alt="Cart"/></Link>
                    <div className='counter'>{getTotalCartItems()}</div>
                </div>
            </div>
        </>
    );
}

export default Navbar;