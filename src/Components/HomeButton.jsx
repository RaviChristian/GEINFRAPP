import './css/HomeButton.css'
import {AiOutlineMenu} from 'react-icons/ai'

import {BiSearchAlt} from 'react-icons/bi'
import {GiHealthNormal} from 'react-icons/gi'
import {BsGraphUp} from 'react-icons/bs'
import {TbUrgent} from 'react-icons/tb'

const iconMap = {
    AiOutlineMenu: <AiOutlineMenu size={40}/>,
    BiSearchAlt: <BiSearchAlt size={40}/>,
    GiHealthNormal: <GiHealthNormal size={40}/>,
    BsGraphUp: <BsGraphUp size={40}/>,
    TbUrgent: <TbUrgent size={40}/>
};


function HomeButton({icon,title,text,link}){

    return (
        <>
            <a href={link} class="HomeButtonWrapper">
                <div class="upper">
                    {iconMap[icon]}
                    <h2>{title}</h2>
                </div>
                <div className="bottom">
                    <p>{text}</p>
                </div>
            </a>
        </>
    )

}

export default HomeButton