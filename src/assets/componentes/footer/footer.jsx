import './footer.css'
import logoCole from '../../imgs/logocole.svg'
export const Footer = () => {
    return (
        <footer className='titilium fw200'>

            <img src={logoCole} alt="" height={70} />
            <div className="datos"><h2 className='fw200'>E.E.S.T.N°3 | Comunidad Educativa Roberto Arlt</h2> <h2 className='fw200 unica'>Las Araucarias 1450 - Tortuguitas</h2></div>
        </footer>
    )
}
