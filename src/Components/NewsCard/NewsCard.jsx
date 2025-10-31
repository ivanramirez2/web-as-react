import "./NewsCard.css"

function NewsCard(props) {
    let auxClass = props.auxClass ? props.auxClass : "col-12";
    let isVideo = props.isVideo != undefined && props.isVideo != null ? props.isVideo : false;
  
    auxClass += " card-news-container"


  

    return (
        
        <div className={auxClass}>
            <div className="card-image-container">
                <a href="#">
                    <div style={{backgroundImage: `url("https://img.asmedia.epimg.net/resizer/v2/J7T6HTF6WFCVHKJTVAE7LXJEYI.png?auth=76ab975e8b56b2ee73a2f3230cca1a6baa37f1352ade52af16e370edc7cf5991&width=240&height=135&smart=true")`}}>
                        {isVideo ? 
                            (
                                <div className="play-button">
                                    <i className="bi bi-play-fill"></i>
                                </div>
                            ) 
                            : ""
                        }
                    </div>
                </a>
            </div>
            <div className="card-category-container">
                <a href="#">
                    sociedad
                </a>
            </div>
            <div className="card-text-container">
                <a href="#">
                    Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%” 
                </a>
            </div>
            <div className="card-footer-container">
                <span>AS ACTUALIDAD</span> <i className="bi bi-chat-right"></i> 
            </div>
        </div>

    );

}

export default NewsCard;