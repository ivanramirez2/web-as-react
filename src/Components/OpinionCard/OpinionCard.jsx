import "./OpinionCard.css";

function OpinionCard(props) {

    let img = props.img ? props.img : "https://img.asmedia.epimg.net/resizer/v2/J7T6HTF6WFCVHKJTVAE7LXJEYI.png?auth=76ab975e8b56b2ee73a2f3230cca1a6baa37f1352ade52af16e370edc7cf5991&width=240&height=135&smart=true";
    let author = props.author ? props.author : "";
    let text = props.text ? props.text : "";
    let title = props.title ? props.title : "";

  return (
    <div className="col-12 col-md-4 opinion-element-container">
      <a href="#" className="opinion-element-title">
        {title}
      </a>
      <div className="opinion-image-container">
        <div className="opinion-element-text">
          <span className="author-pre">POR </span>
          <span className="author">{author}</span>
          <span className="comments">{text}</span>
        </div>
        <div className="opinion-image">
          <div
            className="opinion-image-div"
            style={{backgroundImage: `url("` + img +`")`}}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default OpinionCard;
