import {AiOutlineMenu} from 'react-icons/ai'
import './Navigation.css'

function Navigation() {
    return (
        <>
            <div id='Navigation'>
                <img src="https://ufal.br/ufal/resolveuid/e87823e4a2d64ccd8ed8ff201f9ee5a0" />
                <h1>GEINFRA</h1>
                <div class="menu-icon">
                    <a href=""><AiOutlineMenu size={40}/></a>
                </div>
            </div>
        </>
    )
}

export default Navigation