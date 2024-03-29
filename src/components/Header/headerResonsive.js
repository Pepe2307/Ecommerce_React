import './headerStyles.css';

import { useEffect, useState } from 'react';

import CartWidget from '../CartWidget/cartWidget';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { getCategories } from '../../asyncmock';
import world2 from '../../recursos/world2.png'

const Navbar = () => {

    const [categories, setCategories] = useState([])

    useEffect (() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

    

    return(
        <>
            <div className="Header2">

                <div className="imagen_logo">
                    <CartWidget/>
                </div>
                
                <NavLink to='/'   className='imagen_logo'>
                    <img src={world2} className="aplication-logo" alt="logo" />
                        Invento Travels
                    <img src={world2} className="aplication-logo" alt="logo" />
                </NavLink>
                {/* <div className='barras'>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </div> */}
   
                <div /* className='boton' */>
                        <NavLink className='contacto_logo' to='/form' >
                            Contacto
                        </NavLink>
                </div>
                
            </div>
        </>
   
    )
}
export default Navbar;
