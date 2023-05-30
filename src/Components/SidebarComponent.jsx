import React from 'react';
import {IoIosSearch, IoIosAdd} from 'react-icons/io'

import './css/SidebarComponent.css'


function Sidebar () {
    return (
        <>
            <div className='sidebar-buttons'>
                <a href="/"><IoIosSearch size={80}/></a>
                <a href="/cadastrar"><IoIosAdd size={80}/></a>
            </div>
        </>

    )
}


export default Sidebar