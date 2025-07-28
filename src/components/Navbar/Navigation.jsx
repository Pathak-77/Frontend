import React , {useSelector} from 'react';
import { Wishlist } from '../icon/Wishlist';
import { AccountIcon } from '../icon/AccountIcon';
import { CartIcon } from '../icon/CartIcon';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { countCartItems } from '../../store/features/cart';
import { useLocation } from 'react-router-dom';
import './Navigation.css';
import SearchBox from '../Search/SearchBox';


const Navigation = () => {
  const cartLength = countCartItems;
  const navigate = useNavigate();
  const currentPath = useLocation();
  const [inputValue, setInputValue] = React.useState('');


  const search = (slug)=> {
    let url =  slug?slug:'' ;
    navigate(`/products/${url}`);
  } 

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const updateUrlOnSearch = (e)=> {
    e.preventDefault();
    const val = e.target.value;
    setInputValue(val);
    search(inputValue);
  }

  return (
    <nav className='flex items-center py-6 px-16 justify-between gap-20 custom-nav'>
      <div className='flex items-center gap-6'>
        {/* Logo */}
        <a className='text-3xl text-black font-bold gap-8' href='/'>Aether</a>
      </div>
      
      <div className='flex flex-wrap items-center gap-10'>
        {/* Nav items */}
        <ul className='flex gap-14 text-gray-600 hover:text-black'>
          <li><NavLink to='/' className={({isActive})=> isActive ? 'active-link':''}>Shop</NavLink></li>
          <li><NavLink to='/men' className={({isActive})=> isActive ? 'active-link':''}>Men</NavLink></li>
          <li><NavLink to='/women' className={({isActive})=> isActive ? 'active-link':''}>Women</NavLink></li>
        </ul>

      </div>
    
      
      <div className='flex justify-center'>
        {/* Search bar */}
        <div className='border rounded flex overflow-hidden'>
          <div className="flex items-center justify-center px-4 border-1">
            <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
            <SearchBox className="px-4 py-2 outline-none" placeholder="Search"  handleInputChange={handleInputChange}  handleSubmit={updateUrlOnSearch}/>
          </div> 

        </div>
      </div>
      

      <div className='flex flex-wrap items-center gap-4'>
        {/* Action Items - icons */}
        
        <ul className='flex gap-8 '>
          <li><button ><Wishlist /></button></li>
          <li><button onClick={()=> navigate('/account-details/profile')}><AccountIcon/></button></li>
          <li><Link to='/cart-items' className='flex flex-wrap'><CartIcon />
          {cartLength > 0 && <div className='absolute ml-6 inline-flex items-center justify-center h-6 w-6 bg-black text-white rounded-full border-2 text-xs border-white'>{cartLength}</div>}
          </Link></li>
        </ul>
        
         
          <ul className='flex gap-8'>
            <li className='text-black border border-black hover:bg-slate-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none'><NavLink to={"/v1/login"} className={({isActive})=> isActive ? 'active-link':''}>Login</NavLink></li>
            <li className='text-black border border-black hover:bg-slate-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none'><NavLink to="/v1/register" className={({isActive})=> isActive ? 'active-link':''}>Signup</NavLink></li>
          </ul>
        
      </div>

    </nav>
  )
}

export default Navigation