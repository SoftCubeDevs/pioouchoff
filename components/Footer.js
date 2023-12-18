import React,{ Component } from 'react';

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
                                        <p className="footer-widget__contact"><a href="tel:888-666-0000">888 666
                                            0000</a></p>

                                        <p className="footer-widget__contact"><a
                                            href="mailto:needhelp@example.com">needhelp@example.com</a></p>
                                            <p className="footer-widget__contact">direction<br/> direction</p>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-between footer-widget__links-wrap">
                                <div className="footer-widget">
                                    <h3 className="footer-widget__title">Sucursal <br />Coapa</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                        <li><a href="#">telefono</a></li>
                                        <li><a href="#servicios">direccion</a></li>
                                    </ul>
                                </div>
                                <div className="footer-widget">
                                <h3 className="footer-widget__title">Sucursal <br />Mixcoac</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                        <li><a href="#">telefono</a></li>
                                        <li><a href="#servicios">direccion</a></li>
                                    </ul>
                                </div>
                                <div className="footer-widget">
                                <h3 className="footer-widget__title">Sucursal <br />Tepalcates</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                        <li><a href="#">telefono</a></li>
                                        <li><a href="#servicios">direccion</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-widget">
                                    <div className="site-footer__social">
                                        <a href="#" className="fa fa-facebook-square"></a>
                                        <a href="#" className="fa fa-twitter"></a>
                                        <a href="#" className="fa fa-instagram"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <div className="inner-container text-center">
                            <p className="site-footer__copy">Desarrollado por <a href="zyntus.com">Zyntus.com</a></p>
                        </div>
                    </div>
                </div>
            </footer>

                

            </div>
        )
    }
}