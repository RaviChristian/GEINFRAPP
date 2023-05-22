import './HomeButton.css'
import {AiOutlineMenu} from 'react-icons/ai'

const iconMap = {
    AiOutlineMenu: <AiOutlineMenu size={40}/>
    // Adicione outros ícones mapeados aqui
};


function HomeButton({icon,title,text}){

    return (
        <>
            <div class="upper">
                {iconMap[icon]}
                <h2>{title}</h2>
            </div>
            <div className="bottom">
                <p>{text}</p>
            </div>
        </>
    )

}

export default HomeButton