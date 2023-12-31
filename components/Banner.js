import React from 'react';

const Banner = () => {
        return (
            <section className="banner-one" id="banner">
                <span className="banner-one__shape-1"></span>
                <span className="banner-one__shape-2"></span>
                <span className="banner-one__shape-3"></span>
                <span className="banner-one__shape-4"></span>
                <div className="container">
                    <div className="banner-one__moc">
                        <img src="/assets/images/mocs/banner-moc-1-1.webp" alt="Awesome Image" />
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-one__content">
                                <h3 className="banner-one__title">Sin piojos <br />
                                    <span>Eliminación</span> en solo 60<br /> minutos.</h3>
                                <p className="banner-one__text">Rápida eliminación de piojos y liendres sin dolor.
                                </p>
                                <a href="https://wa.me/5215551004343" className="banner-one__btn thm-btn "><span>¡Agenda tu cita!</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Banner;