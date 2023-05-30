import HomeButton from "./HomeButton"
import "./css/Section.css"

function Section() {

    return (
        <>
            <div class="section-button">

                <div className="upper-buttons">

                    <div>
                        <HomeButton link='cadastrar' icon="BiSearchAlt" text="Cadastre aqui todas as ordens de serviço" title="solicitações" className="custom-button"/>
                    </div>
                    
                    <div>
                        <HomeButton link='listar' icon="GiHealthNormal" text="Gerencie as ordens de serviço preventivas" title="prevenções" className="custom-button"/>
                    </div>

                </div>

                <div className="lower-buttons">
                
                    <div>
                        <HomeButton link='listar' icon="TbUrgent" text="Gerencie as ordens de serviços corretivas" title="correções" className="custom-button"/>
                    </div>
                    
                    <div>
                        <HomeButton link='listarFormularios' icon="BsGraphUp" text="Filtre as informações e gere relatórios das ordens de serviço" title="relatórios" className="custom-button"/>
                    </div>
                </div>

            </div>
            
        </>
    )
}

export default Section