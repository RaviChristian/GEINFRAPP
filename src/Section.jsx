import HomeButton from "./HomeButton"
import "./Section.css"

function Section() {

    return (
        <>
            <div class="section-button">

                <div className="upper-buttons">

                    <div>
                        <HomeButton icon="BsGraphUp" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ratione beaLorem ipsum dolor sit amet consectetur adipisicing elit. Cum ratione beatae assumenda tae assumenda aliquam, esse quibusdam." title="Pesquisar" className="custom-button"/>
                    </div>

                    <div>
                        <HomeButton icon="BiSearchAlt" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ratione beatae assumenda aliquam, esse quibusdam." title="Pesquisar" className="custom-button"/>
                    </div>

                </div>

                <div className="lower-buttons">
                
                    <div>
                        <HomeButton icon="GiHealthNormal" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ratione beatae assumenda aliquam, esse quibusdam." title="Pesquisar" className="custom-button"/>
                    </div>
                </div>

            </div>
            
        </>
    )
}

export default Section