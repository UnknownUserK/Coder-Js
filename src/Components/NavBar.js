import '../App.css';

function NavBar(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >Autos Toro</div>
            <button onClick={() => props.setTipoAuto('todos')}>Todos</button> 
            <button onClick={() => props.setTipoAuto('Automatico')}>Automático</button>
            <button onClick={() => props.setTipoAuto('Manual')}>Manual</button>
            <div onClick={() => props.handleShow(true)}> Carrito
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default NavBar;

