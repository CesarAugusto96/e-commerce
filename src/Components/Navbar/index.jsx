import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out' , stringifiedSignOut)
        context.setSignOut(true)
    }

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Kyron
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/mens-clothing'
                        onClick={() => context.setSearchByCategory("men's clothing")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Ropa de Hombre
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory("electronics")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electrónica
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/womens-clothing'
                        onClick={() => context.setSearchByCategory("women's clothing")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Ropa de Mujer
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/jewelery'
                        onClick={() => context.setSearchByCategory("jewelery")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Joyería
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Otros
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    example@email.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sing-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        onClick={() => handleSignOut()}>
                        Sign Out
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
                    <div>{context.cartProducts.length}</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar