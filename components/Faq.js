import React from 'react';

const Faq = () => {
        return (
            <section className="faq-one" id='preguntas'>
                <img src="/assets/images/background/faq-one-bg.png" alt="Awesome Image" className="faq-one__bg" />
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">¿Tienes <span>alguna duda</span> <br /> sobre nosotros?
                        </h2>
                    </div>
                    <div className="accrodion-grp faq-accrodion">
                        <div className="accrodion active">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>¿Cuánto tiempo lleva el tratamiento para eliminar los piojos y liendres en Ay Piojos?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>Nuestros tratamientos se realizan en una sola sesión, generalmente demora entre una hora y hora y media, proporcionando resultados efectivos y eliminando los piojos y liendres de forma rápida y eficiente.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion active">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>¿Qué productos utilizan en Ay Piojos para eliminar los piojos y liendres?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>En Ay Piojos, empleamos productos naturales y seguros que son efectivos en la eliminación de piojos y liendres. Nos enfocamos en tratamientos sin químicos agresivos para garantizar la seguridad y bienestar de nuestros clientes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion active">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>¿Qué medidas de prevención recomiendan para evitar futuras infestaciones de piojos?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>Recomendamos evitar el contacto directo de cabezas y el intercambio de objetos personales. Además, fomentamos revisar regularmente el cabello de los niños y mantener una buena higiene personal.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion active">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>¿Cómo puedo reservar una cita en Ay Piojos?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>Puedes reservar tu cita llamando a nuestro número telefónico o a través de nuestra página web. Nuestro equipo estará encantado de ayudarte a programar una consulta y resolver cualquier pregunta que tengas sobre nuestros servicios.

</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Faq;