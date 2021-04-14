import {CuadroStyled, BackgroundStyled} from './index.js';
import { Link } from 'react-router-dom';

export default (props) =>  
                        <BackgroundStyled className="col-12" >
                          {props.weather}
                        <div className="container">
                        <div className="row"><br></br><br></br><br></br></div>
                        <div className="row" >
                        <div className="col-3">
                        </div>
                        <CuadroStyled className="col-6 text-center">    
                           <p>{props.titulo}</p> 
                              {props.joke}
                            <br></br> 
                            <Link to={props.ruta} 
                                  className="btn btn-info">
                                  {props.tituloBoton}
                             </Link>
                        </CuadroStyled>
                        <div className="col-3">
                        </div>
                        </div>
                        </div>
                        </BackgroundStyled> 
