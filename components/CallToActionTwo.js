import React from "react";

const CallToActionTwo = () => {
    return (
        <section className="cta-two">
            <div className="container">
                <img
                    src="/assets/images/mocs/cta-moc-2-1.png"
                    className="cta-two__moc"
                    alt="Awesome Image"
                />
                <div className="row">
                    <div className="col-lg-6">
                        <div className="cta-two__content">
                            <i className="cta-two__icon dimon-icon-data"></i>
                            <div className="block-title text-left">
                                <h2 className="block-title__title">
                                Confía en nosotros para un <span>tratamiento</span> <br /> profesional.
                                </h2>
                            </div>
                            <div className="cta-two__text">
                                <p>
                                    Nuestro equipo está comprometido a ofrecer tratamientos
                                    seguros, rápidos y sin dolor utilizando productos naturales.
                                    Sabemos lo importante que es para ti la comodidad y seguridad
                                    de tus hijos, por eso realizamos revisiones minuciosas para
                                    asegurar la eliminación completa de los piojos en una sola
                                    sesión.
                                </p>
                            </div>
                            <a href="#" className="thm-btn">
                                <span>¡Agenda hoy!</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CallToActionTwo;
