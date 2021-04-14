import React, { Component } from 'react';

class Joke extends Component
{
    constructor() {
        super()
        this.state = {
            loading2: false,
            chiste: '',
        }
        this.fetchChiste = this.fetchChiste.bind(this);
    }

    fetchChiste() { 
       
        this.setState({loading2: true})
        
            fetch("https://icanhazdadjoke.com/slack")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading2: false,
                    chiste: data.attachments[0].text
                    
                })
            })  
          
         } 
    
    render()
    {
       const textChiste = this.state.loading2 ? "loading..." : this.state.chiste

       return(
               <div>
               <p id="chisteDevuelto">{textChiste}</p><br/>
               <button type="submit" className="btn btn-info" onClick={this.fetchChiste}>
                         Següent acudit
                </button> 
                </div> )
    }
}
export default Joke