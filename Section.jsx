import HomeButton from "./HomeButton"
import "./Section.css"

function Section() {

    return (
        <>
            <div class="section-button">

                <div className="upper-buttons">

                    <div>
                        <HomeButton icon="BiSearchAlt" text="Visualize aqui todas as ordens de serviço" title="solicitações" className="custom-button"/>
                    </div>
                    
                    <div>
                        <HomeButton icon="GiHealthNormal" text="Gerencie as ordens de serviço preventivas" title="prevenções" className="custom-button"/>
                    </div>

                </div>

                <div className="lower-buttons">
                
                    <div>
                        <HomeButton icon="BsGraphUp" text="Filtre as informações e gere relatórios das ordens de serviço" title="relatórios" className="custom-button"/>
                    </div>
                    
                    <div>
                        <HomeButton icon="BsGraphUp" text="Filtre as informações e gere relatórios das ordens de serviço" title="relatórios" className="custom-button"/>
                    </div>
                </div>

            </div>
            
        </>
    )
}

export default Section