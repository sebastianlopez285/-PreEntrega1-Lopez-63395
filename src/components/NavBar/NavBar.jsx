import CartWidget from "./CartWidget"
import "./navbar.scss"



const NavBar = () => {


    return (
        <nav className="navbar">

            <div className="brand">
            <img src="https://img.freepik.com/premium-vector/mobile-phone-repair-logo-template-vector-illustration_304830-219.jpg?semt=ais_hybrid" alt="" />
            <p>Brsl</p>
            
            </div>

            <ul className="categories">
                <li>Modulos</li>
                <li>Touch</li>
                <li>Herramientas e Insumos</li>
                <li>Servicio Técnico y Reparación</li>
            </ul>


            <CartWidget />
        </nav>
    )
}

export default NavBar;
