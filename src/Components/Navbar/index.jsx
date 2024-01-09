import { useContext } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4"
    
    
    return ( 
        <nav className= 'flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-normal'>
            {/*Lado Izquierdo.*/}
            <ul className= 'flex items-center gap-3'>
                <li className= 'font-semibold text-lg'>
                <NavLink to= '/' >
                        Kyron
                    </NavLink>
                </li>
                <li className= ''>
                <NavLink to= '/productos'
                    className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                    }>   
                    Productos
                    </NavLink>
                </li>
                <li className= ''>
                    <NavLink to= '/nosotros'
                    className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                    }>   
                    Nosotros
                    </NavLink>
                </li>
            </ul>
            {/*-Lado Derecho.*/}
            <ul className= 'flex items-center gap-3'>
                <li className='text-black/60'>
                    email@example.com
                </li>
                <li className= ''>
                    <NavLink to= '/my-orders'
                    className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                    }>    
                    Mis Ordenes
                    </NavLink>
                </li>
                <li className= ''>
                    <NavLink to= '/my-account'
                    className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                    }>     
                    Mi Cuenta
                    </NavLink>
                </li>
                <li className= ''>
                    <NavLink to= '/sing-in'
                    className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                    }>      
                    Registrarse
                    </NavLink>
                </li>
                <li className='flex items-center justify-content-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-black'/>​ 
                    <div>{context.count}</div>
                </li>
            </ul>
        </nav>
)
}

export default Navbar