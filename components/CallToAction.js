import { FaBugSlash } from "react-icons/fa6";
import React from "react";

const CallToAction = () => {
    return (
        <section className="cta-one" id="nosotros">
            <img
                src="/assets/images/background/cta-one-bg.png"
                className="cta-one__bg"
                alt="Awesome Image"
            />
            <div className="container">
                <img
                    src="/assets/images/mocs/cta-moc-1-1.webp"
                    className="cta-one__moc"
                    alt="Awesome Image"
                />
                <div className="row justify-content-lg-end">
                    <div className="col-lg-6">
                        <div className="cta-one__content">
                            <i className="cta-one__icon"><FaBugSlash /></i>
                            <div className="block-title text-left">
                                <h2 className="block-title__title">
                                ¡Libérate de los <span>Piojos</span> Hoy!
                                </h2>
                            </div>
                            <div className="cta-one__text">
                                <p>
                                Ay Piojos te ofrece soluciones rápidas y efectivas para deshacerte de los piojos y liendres.
                                </p>
                            </div>
                            <ul className="list-unstyled">
                                <li>
                                    <i className="fa fa-check"></i>Tratamientos eficaces con productos naturales.
                                </li>
                                <li>
                                    <i className="fa fa-check"></i>Atención personalizada para cada cliente.
                                </li>
                                <li>
                                    <i className="fa fa-check"></i>Soluciones rápidas y sin complicaciones en una sola sesión.
                                </li>
                            </ul>
                            <a href="https://wa.me/5215551004343" className="thm-btn">
                                <span>¡Agenda hoy!</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CallToAction;
