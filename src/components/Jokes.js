import {Weather, Joke, Pagina} from './index.js';

export default () => <Pagina
                    weather={<Weather />}
                    titulo={<div><h5><b>Preparat per riure?</b> &#129315;</h5>
                                 <br/>
                            </div>}
                    joke={<Joke />}
                    ruta="/"
                    tituloBoton="Accede a la web de bienvenida"
                  />