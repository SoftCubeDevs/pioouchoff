import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

export default class Blog extends Component {


    render(){
        return (
            <div>
            <footer className="site-footer">
                <div className="site-footer__upper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="footer-widget footer-widget__about">
                                    <img src="/assets/images/resources/logo-dark.png" width="119" alt=""
                                        className="footer-widget__logo" />
                                        <p className="footer-widget__contact"><a href="tel:5551004343">55 5100 4343</a></p>
                                        <p className="footer-widget__contact"> <a href='https://maps.app.goo.gl/5Fyn53jiG3WaB2j86'>Francisco de P.Miranda 377, col. Merced Gómez,<br /> Álvaro Obregón CP 01480 CDMX</a></p><br/>
                                        <div className="footer-widget">
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-9 d-flex justify-content-around footer-widget__links-wrap">
                                <div className="footer-widget sucursal">
                                    <h3 className="footer-widget__title">Sucursal Mixcoac</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                        <li><a href="tel:5551004343">55 5100 4343</a></li>
                                        <li><a href="#servicios">Francisco de P.Miranda 377,<br /> col. Merced Gómez,<br /> Álvaro Obregón <br />CP 01480 CDMX</a></li>
                                    </ul>
                                </div>
                                <div className="footer-widget sucursal">
                                <h3 className="footer-widget__title">Sucursal Tlalpan</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                        <li><a href="tel:5570127591">55 7012 7591</a></li>
                                        <li><a href="#servicios">Prolongación División del Norte<br/> 4506, Plaza Acambay. <br/>Tlalpan.</a></li>
                                    </ul>
                                </div>
                                <div className="footer-widget sucursal">
                                <h3 className="footer-widget__title">Sucursal Tepalcates</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                        <li><a href="tel:5547403702">55 4740 3702</a></li>
                                        <li><a href="#servicios">José Arrése #22 Col.<br/> Tepalcates, 09210 Alcaldía Iztapalapa. <br/>CDMX.</a></li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <div className="inner-container text-center">
                            <p className="site-footer__copy">Desarrollado por <a href="http://zyntus.com">Zyntus</a> </p>
                        </div>
                    </div>
                </div>
            </footer>

                

            </div>
        )
    }
}