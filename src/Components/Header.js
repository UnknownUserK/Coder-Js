import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >Autos Toro</div>
            <div onClick={() => props.handleShow(true)}> Carrito
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;