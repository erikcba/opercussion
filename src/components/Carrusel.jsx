

const Carrusel = ({ imagenes, idCarrusel, indicadores }) => {


    return (
        <div id={idCarrusel} className="carousel slide carousel-fade" data-bs-ride="carousel">
            {
                indicadores === 'true' ? (
                    <div className="carousel-indicators">
                        {imagenes && imagenes.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target={`#${idCarrusel}`}
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                aria-current={index === 0 ? 'true' : undefined}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                )
                :
                ''
            }



            <div className="carousel-inner">
                {
                    imagenes && imagenes.length > 0 ? (
                        imagenes.map((imagen, index) => (
                            <div key={imagen} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={imagen} className="d-block w-100" alt={`Slide ${index + 1}`} />
                            </div>
                        ))
                    ) : (
                        <h1>No hay imágenes para mostrar</h1>
                    )
                }
            </div>

            {/* Controles de navegación */}
            <button className="carousel-control-prev" type="button" data-bs-target={`#${idCarrusel}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${idCarrusel}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carrusel
