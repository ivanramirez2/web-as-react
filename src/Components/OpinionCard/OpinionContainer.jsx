import "./OpinionContainer.css"
import OpinionCard from "../OpinionCard/OpinionCard";

function OpinionContainer() {
  return (
    <div className="col-12 opinion-container">
      <div className="row">
        <div className="col-12 opinion-title">
          <a href="#">
            <h3>OPINIÓN</h3>
            <hr />
          </a>
        </div>
      </div>

      <div className="row">
        <OpinionCard 
          title="Ingenuo Hujisen"
          author="Santiago Segurola"
          text="Ni minoxidil ni lociones: el champú con cafeína Nº1 en Amazon que previene la caída del cabello”"
          img="https://img.asmedia.epimg.net/resizer/v2/BJOCTJCDTZHTHML2SU7VZ2KNEU.jpg?auth=99a6d7e926ce0f73a8b8229649235c134005479d094612433e03ec1e78650479&width=240&height=135&smart=true">
        </OpinionCard>

        <OpinionCard 
          title="Ingenuo Hujisen"
          author="Santiago Segurola"
          text="Ni minoxidil ni lociones: el champú con cafeína Nº1 en Amazon que previene la caída del cabello”"
          img="https://img.asmedia.epimg.net/resizer/v2/BJOCTJCDTZHTHML2SU7VZ2KNEU.jpg?auth=99a6d7e926ce0f73a8b8229649235c134005479d094612433e03ec1e78650479&width=240&height=135&smart=true">
        </OpinionCard> 
        
        <OpinionCard 
          title="Ingenuo Hujisen"
          author="Santiago Segurola"
          text="Ni minoxidil ni lociones: el champú con cafeína Nº1 en Amazon que previene la caída del cabello”"
          img="https://img.asmedia.epimg.net/resizer/v2/BJOCTJCDTZHTHML2SU7VZ2KNEU.jpg?auth=99a6d7e926ce0f73a8b8229649235c134005479d094612433e03ec1e78650479&width=240&height=135&smart=true">
        </OpinionCard>  
      </div>
    </div>
  );
}

export default OpinionContainer;
