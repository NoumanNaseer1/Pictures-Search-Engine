import { blue } from '@material-ui/core/colors';
import React from 'react';
export default class App extends React.Component{
    state={term:''}
   onFormSubmit=event=>{
    event.preventDefault();
   this.props.submit(this.state.term);

   }
    
    render(){
        return(
        
           <div >
               <div className="ui segment" style={{width:'40%'}}>
               <form onSubmit={this.onFormSubmit} className="ui form">
                   <field className="field">
                   <label>Search Iamge </label>
                       <div className="ui icon input">
                     <input type="text"
                     value={this.state.term}
                     onChange={e=>this.setState({term:e.target.value})} 
                     placehold="search..." ></input>
                        <i class="circular search link icon"></i> 
                         </div>
                   </field>

               </form>
               </div>
            
           </div>
          
        )
    }
}