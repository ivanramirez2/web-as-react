import { useState } from 'react'
import './App.css'
import NewsCard from './Components/NewsCard/NewsCard';


function App() {
  const [count, setCount] = useState(0)

   const [show, setShow] = useState(false);

  


  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid m-996 divs-center">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse f-basis-no" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Resultados</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Fútbol</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Videos</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                    <a className="navbar-brand margin-auto" href="#">
                        <svg>
                            <path d="M43.878 12.834c-2.914-2.575-6.26-2.677-12.282-4.181-1.862-.459-2.446-1.835-2.51-2.588-.076-.753.025-2.077 1.407-2.944.761-.484 1.927-.815 3.638-.815 4.27 0 7.376 2.384 8.606 5.493.038.103.14.178.24.178h1.535c.14 0 .267-.128.267-.268V.763c0-.14-.128-.254-.267-.254h-1.546c-.063 0-.165.026-.229.153a6.313 6.313 0 0 1-.773 1.084c-.164.166-.545.319-.951.153C39.644 1.2 37.135 0 34.03 0c-6.92 0-9.481 4.194-9.481 7.61 0 1.976.937 4.614 3.435 6.08 2.738 1.619 6.628 2.46 9.468 2.907 2.522.407 4.461 1.3 4.461 3.569 0 2.51-2.65 3.53-5.677 3.53-2.865 0-5.463-.88-7.326-2.574-1.293-1.173-2.627-2.912-2.817-3.212-.19-.3-.255-.306-.414-.306h-1.345c-.101 0-.317.076-.317.306v2.881c0 .739-.622 1.199-1.179 1.199-.609 0-1.178-.497-1.178-1.173V8.206c0-5.85-3.878-8.182-9.81-8.182-4.22 0-9.455 1.912-10.152 5.62-.012.077-.076.344-.076.728 0 1.606 1.293 2.919 2.89 2.919 1.318 0 2.51-.854 2.775-2.09.253-1.16-.405-1.568-.405-2.46 0-.358.11-.745.359-1.044.637-.801 2.429-1.289 3.734-1.289 3.447 0 4.31 1.95 4.233 4.016v3.657c0 .128-.09.243-.215.255C1.977 12.642 0 16.122 0 19.831 0 23.539 2.725 26 6.996 26c4.27 0 6.12-1.453 8.327-3.824.127-.14.368-.089.443.09.71 1.923 2.192 3.734 5.425 3.734 3.232 0 4.677-1.849 5.044-3.646a.262.262 0 0 1 .456-.127C27.755 23.489 30.58 26 36.081 26c8.67 0 10.444-4.69 10.444-7.623-.012-2.587-1.04-4.027-2.649-5.543h.001zm-28.669 2.93c0 2.945-1.197 5.242-4.189 6.186-2 .59-3.782-.48-4.432-1.918-.83-1.84-.164-3.525 1.084-4.533 1.642-1.326 4.353-2.223 7.232-2.728a.268.268 0 0 1 .304.254c.012.485.001 2.74.001 2.74z"></path>
                        </svg>
                    </a>
                </div>
                <div className="collapse navbar-collapse right-menu f-basis-no">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Retos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="bi bi-envelope"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="bi bi-person-fill"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Edición <select><option>es</option><option>en</option></select></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </header>
    <main>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="row">
              <NewsCard isVideo="true"></NewsCard>
              <NewsCard auxClass="col-6" 
                category="Mercado de fichajes"
                text="El sueldo de Rashford, prohibitivo para el Barça"
                img="https://img.asmedia.epimg.net/resizer/v2/MTVOT4ACBFHQZPP46OTEFAO2A4.jpg?auth=183a230d2b2ff060d75de7cc2d35c0471e3177e0676d4d2cb12b866771ad127a&width=360&height=203&smart=true">
              </NewsCard>   
              <NewsCard auxClass="col-6" 
                category="Fútbol"
                text="Roque Mesa y su ‘obsesión’ por el dinero: “No perdoné ni un euro”"
                img="https://img.asmedia.epimg.net/resizer/v2/BGA4TWUSN5L5PCOZHHPOYFTGIY.jpg?auth=cb0a27f0cf366bf2bc19218c7296594a419a64292a5b8859e4515fd0d088d8dc&width=360&height=203&smart=true">
              </NewsCard>   
              <NewsCard auxClass="col-6" 
                category="Real Madrid - Valencia"
                text="Mi retirada es irrevocable porque el tratamiento de mi hija no es algo a corto plazo"
                img="https://img.asmedia.epimg.net/resizer/v2/HIGUTEQAJJG27EBZPCJ4SWDXBI.JPG?auth=8f0fd6429016049d174df6f9ab2abb5a7bb61edfda33dfaaa318d1562e414ba6&width=360&height=203&focal=1952%2C1263">
              </NewsCard>   
              <NewsCard auxClass="col-6" 
                category="Real Madrid - Valencia"
                text="Alineación posible del Real Madrid hoy contra el Valencia"
                img="https://img.asmedia.epimg.net/resizer/v2/66NVUTRUBBB5PK6VSEBV5W2PWY.png?auth=4fff929fff02240f9c27625bccb639b2c2a994618265d5008f154ec95914d1fc&width=360&height=203&smart=true">
              </NewsCard>   
              <NewsCard auxClass="col-6" 
                isVideo="true"
                category="NBA| Grizzlies 112-Lakers 117"
                text="Doncic: 44 puntos para alcanzar a Kobe, Chamberlain y Jordan"
                img="https://img.asmedia.epimg.net/resizer/v2/66NVUTRUBBB5PK6VSEBV5W2PWY.png?auth=4fff929fff02240f9c27625bccb639b2c2a994618265d5008f154ec95914d1fc&width=360&height=203&smart=true">
              </NewsCard>   
              <NewsCard auxClass="col-6" 
                category="Fórmula 1"
                text="Red Bull lo deja todo por Verstappen"
                img="https://img.asmedia.epimg.net/resizer/v2/L7MJFYXHI5PMLJFNUPK4U6ROP4.jpg?auth=569c45bfcff5f7d5766896f55b430e5870bd3fa6dbe7a1fa0b634af716efc186&width=360&height=203&focal=1315%2C334">
              </NewsCard>   
              <NewsCard auxClass="col-6" 
                category="Fútbol"
                text="Roque Mesa y su ‘obsesión’ por el dinero: “No perdoné ni un euro”"
                img="https://img.asmedia.epimg.net/resizer/v2/SPVOY4AQYRBBTD4WKDOYOKBCXM.jpg?auth=3ce4ff1349942643ba21d5ae84267b3d36d92b22ca60f988777e5301fd9a5da3&width=360&height=203&smart=true">
              </NewsCard>   
              <NewsCard auxClass="col-6" 
                category="Fútbol"
                text="Roque Mesa y su ‘obsesión’ por el dinero: “No perdoné ni un euro”"
                img="https://img.asmedia.epimg.net/resizer/v2/BGA4TWUSN5L5PCOZHHPOYFTGIY.jpg?auth=cb0a27f0cf366bf2bc19218c7296594a419a64292a5b8859e4515fd0d088d8dc&width=360&height=203&smart=true">
              </NewsCard>
   
            </div>
          </div> 

    

          <div className="col-12">
            <div className="row">
              <NewsCard auxClass="col-4" 
                category="Ofrecido por alpecin"
                text="Ni minoxidil ni lociones: el champú con cafeína Nº1 en Amazon que previene la caída del cabello”"
                img="https://img.asmedia.epimg.net/resizer/v2/BJOCTJCDTZHTHML2SU7VZ2KNEU.jpg?auth=99a6d7e926ce0f73a8b8229649235c134005479d094612433e03ec1e78650479&width=240&height=135&smart=true">
              </NewsCard> 
              <NewsCard auxClass="col-4" 
                category="El debate de los usuarios de as"
                text="¿Debe Vinicius ser titular ante el Valencia?:"
                img="https://img.asmedia.epimg.net/resizer/v2/B4DMP6IGB5EXDGWMYKCMO4KUXY.jpg?auth=38eee3c87232dcc07e223b84b03feeac81a3e433f6284ed0add58f7250005e7a&width=240&height=135&smart=true">
              </NewsCard> 
              <NewsCard auxClass="col-4" 
                category="Tenerife"
                text="La viral respuesta de Álvaro Cervera sobre Álvaro Benito: “Es al único al que no quito la voz”"
                img="https://img.asmedia.epimg.net/resizer/v2/M3GOXRJ2LVMQDGEKXZBOKSKIHM.jpg?auth=3fc4b93649af1b8d818df8e0af6dfe00dcc6e66bc2d4b61ccdd6fd224bff5a1e&width=240&height=135&focal=3713%2C1966">
              </NewsCard> 

              <NewsCard auxClass="col-4" 
                category="Famosos"
                text="Broncano da las claves de su dieta diaria y señala el superalimento que toma: “Puedes sobrevivir una semana con eso”"
                img="https://img.asmedia.epimg.net/resizer/v2/DAELG7JGFJFVXK4YNEFUWSGTOM.jpg?auth=dfa786e5ac11352301eb504e74755a2d3cd7dfe59523ba5e01f7762bde17a372&width=240&height=135&smart=true">
              </NewsCard>

              <div className="col-4"></div>

              <div className="col-4">
                <div className="row">
                  <NewsCard auxClass="col-12" 
                    category="Cine"
                    text="Amaia Salamanca revela por qué rechazó participar en la película española más taquillera"
                    alt="1"
                    img="https://img.asmedia.epimg.net/resizer/v2/6OWRYMUGBBHSPKMEQUIKUIE24A.jpg?auth=9f15d9d15fd3cca1981b98a8b4b1d1c40177cc4c495a4bc32c83cabdfc459eea&width=240&height=135&smart=true"> 
                  </NewsCard>
                  <NewsCard auxClass="col-12" 
                    category="Cine"
                    text="Pérez-Reverte recuerda esta mítica película de acción y aventuras: “Un clásico de mi infancia”"
                    alt="1"
                    img="https://img.asmedia.epimg.net/resizer/v2/T7ZHPWM2LREATLREGLKBEGC74I.jpg?auth=1564be0fc1e7ba50acc076fc90c4418066eeb1361362eff4fb12eadcdf0707cc&width=240&height=135&smart=true"> 
                  </NewsCard>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="row">
              <NewsCard auxClass="col-3" 
                category="El debate de los usuarios de as"
                text="¿Debe Vinicius ser titular ante el Valencia?:"
                img="https://img.asmedia.epimg.net/resizer/v2/B4DMP6IGB5EXDGWMYKCMO4KUXY.jpg?auth=38eee3c87232dcc07e223b84b03feeac81a3e433f6284ed0add58f7250005e7a&width=240&height=135&smart=true">
              </NewsCard> 
              <NewsCard auxClass="col-3" 
                category="Tenerife"
                text="La viral respuesta de Álvaro Cervera sobre Álvaro Benito: “Es al único al que no quito la voz”"
                img="https://img.asmedia.epimg.net/resizer/v2/M3GOXRJ2LVMQDGEKXZBOKSKIHM.jpg?auth=3fc4b93649af1b8d818df8e0af6dfe00dcc6e66bc2d4b61ccdd6fd224bff5a1e&width=240&height=135&focal=3713%2C1966">
              </NewsCard> 

              <NewsCard auxClass="col-3" 
                category="Famosos"
                text="Broncano da las claves de su dieta diaria y señala el superalimento que toma: “Puedes sobrevivir una semana con eso”"
                img="https://img.asmedia.epimg.net/resizer/v2/DAELG7JGFJFVXK4YNEFUWSGTOM.jpg?auth=dfa786e5ac11352301eb504e74755a2d3cd7dfe59523ba5e01f7762bde17a372&width=240&height=135&smart=true">
              </NewsCard>

              <NewsCard auxClass="col-3" 
                category="Ofrecido por alpecin"
                text="Ni minoxidil ni lociones: el champú con cafeína Nº1 en Amazon que previene la caída del cabello”"
                img="https://img.asmedia.epimg.net/resizer/v2/BJOCTJCDTZHTHML2SU7VZ2KNEU.jpg?auth=99a6d7e926ce0f73a8b8229649235c134005479d094612433e03ec1e78650479&width=240&height=135&smart=true">
              </NewsCard>      
            </div>
          </div>


          <div className="col-12 col-md-8">
            <div className="row">
                  <NewsCard auxClass="col-6" 
                    category="Ciencia"
                    text="España construirá el puente más alto de Europa: desafía a los límites de la ingeniería"
                    img="https://img.asmedia.epimg.net/resizer/v2/CCP2GUKHSZAMRL3WJWLWCJXAWY.png?auth=445f2f8bfad00ed228e9fc8c58a3fe2fa5f469dbc469bf4c9defc82b8b198fc9&width=360&height=203&smart=true"> 
                  </NewsCard>                  
                  <NewsCard auxClass="col-6" 
                    category="Sociedad"
                    text="Misterioso hallazgo cerca de Las Vegas: encuentran más de 300 montones de restos humanos"
                    img="https://img.asmedia.epimg.net/resizer/v2/VUKFD3JKDJAKVDVDAM4TEPNCCA.webp?auth=ac267e43351cda9e50ea7ba8765789e67222dc58250dc1e4f629cd3043050b7b&width=360&height=203&smart=true"> 
                  </NewsCard> 
            </div>

            <div className="row">
                  <NewsCard auxClass="col-6" 
                    category="Ciencia"
                    text="España construirá el puente más alto de Europa: desafía a los límites de la ingeniería"
                    img="https://img.asmedia.epimg.net/resizer/v2/LL4XVGZO6JAT7FJDDCTMNHUE2A.jpg?auth=7cc65c5a0bd6d5c102e4066306e663564fab5e3da7b9bdc82bcd3257e2ceb8c2&width=360&height=203&smart=true"> 
                  </NewsCard>                  
                  <NewsCard auxClass="col-6" 
                    category="Sociedad"
                    text="En Alemania hablan de “duro golpe económico” para restaurantes españoles con la situación de la cerveza"
                    img="https://img.asmedia.epimg.net/resizer/v2/U4BHEZ2HIYMZDLYI5ZHNL5PXOA.jpg?auth=51f9794924149e1fc48e7d9efa4aed6fc5c32e4979f540baaeed38a047304834&width=360&height=203&smart=true"> 
                  </NewsCard> 
            </div>

          </div>
          

          
        </div> 
      </div>  

    </main>

    <footer>
    </footer>

    </>
  )
}

export default App
