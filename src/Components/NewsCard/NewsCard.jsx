import "./NewsCard.css"

function NewsCard(props) {

    let isAltContainer = props.alt ? props.alt : 0;
    let auxClass = props.auxClass ? props.auxClass : "col-12";
    let isVideo = props.isVideo != undefined && props.isVideo != null ? props.isVideo : false;



    let img = props.img ? props.img : "https://img.asmedia.epimg.net/resizer/v2/J7T6HTF6WFCVHKJTVAE7LXJEYI.png?auth=76ab975e8b56b2ee73a2f3230cca1a6baa37f1352ade52af16e370edc7cf5991&width=240&height=135&smart=true";
    let category = props.category ? props.category : "";
    let text = props.text ? props.text : "";
    


    auxClass += isAltContainer ? " card-news-container-alt" : " card-news-container";


  

    return (
        
        <div className={auxClass}>
            <div className="card-image-container">
                <a href="#">
                    <div style={{backgroundImage: `url("` + img +`")`}}>
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

            { isAltContainer ? (
                <div className="card-news-alt-content">
                    <div className="card-category-container">
                        <a href="#">
                            sociedad
                        </a>
                    </div>
                    <div className="card-text-container">
                        <a href="#">
                            Alfonso Muñoz, funcionario de la Seguridad Social, en 2026: “Será el 100%”
                        </a>
                    </div>
                    <div className="card-footer-container">
                        <span>AS ACTUALIDAD</span> <i className="bi bi-chat-right"></i>
                    </div>
                </div>
            ) : (
                <>
                    <div className="card-category-container">
                        <a href="#">
                            {category}
                        </a>
                    </div>
                    <div className="card-text-container">
                        <a href="#">
                            {text}
                        </a>
                    </div>
                    <div className="card-footer-container">
                        <span>AS ACTUALIDAD</span> <i className="bi bi-chat-right"></i>
                    </div>
                </>
            )}

        </div>

    );
}





export default NewsCard;