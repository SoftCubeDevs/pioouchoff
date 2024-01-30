import React,{ Component } from 'react';
import Link from 'next/link';

export default class NavOne extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 70) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 70) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".menu-toggler");
        let mainNav = document.querySelector(".main-navigation");

        mainNavToggler.addEventListener("click", function () {
            mainNav.style.display = ( (mainNav.style.display != "block" ? "block" : "none" ) );
        });
        // Agregar event listener para cerrar el menú cuando se hace clic en un elemento del menú
    let menuItems = document.querySelectorAll(".main-navigation a");

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function () {
            mainNav.style.display = "none";
        });
    });
    }

    render(){
        return (

            <header className="site-header site-header__header-one">
                <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${this.state.sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                    <div className="container clearfix">
                        <div className="logo-box clearfix">
                            <a className="navbar-brand" href="/">
                                <img src="/assets/images/resources/logo-dark.png" className="main-logo" width="100"
                                    alt="Awesome Image" />
                            </a>
                            <button className="menu-toggler">
                                <span className="fa fa-bars"></span>
                            </button>
                        </div>
                        <div className="main-navigation">
                            <ul className=" one-page-scroll-menu navigation-box">
                                
                                <li className="scrollToLink">
                                    <a href="#servicios">Servicios</a>

                                </li>
                                <li className="scrollToLink">
                                    <a href="#nosotros">Nosotros</a>

                                </li>
                                <li className="scrollToLink">
                                    <a href="#galeria">Galeria</a>
                                </li>
                                <li className="scrollToLink">
                                    <a href="#preguntas">Preguntas</a>
                                </li>
                            </ul>
                        </div>
                        <div className="right-side-box">
                            <a className="thm-btn header__cta-btn" href="https://wa.me/5215551004343"><span>Contacto</span></a>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}