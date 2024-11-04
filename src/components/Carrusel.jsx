

const Carrusel = ({ imagenes, idCarrusel }) => {


    return (
        <div id={idCarrusel} className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                {
                    imagenes && imagenes ? (
                        imagenes.map((imagen, index) => (
                            <div key={imagen} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={imagen} className="d-block w-100" alt="..." />
                            </div>
                        ))
                    )
                        : (
                            <h1>No hay imágenes para mostrar</h1>
                        )
                }

            </div>
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
