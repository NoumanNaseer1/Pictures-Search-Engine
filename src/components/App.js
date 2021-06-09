import React from 'react';
import Searchbar from './searchbar';
import axios from '../API/unplush';
import Imageslist from './ImagesList';
import './App.css';
export default class App extends React.Component{
    state={images:[]}
 searchquery= async term =>{
    const response= await axios.get('/search/photos',{
        params:{query:term,per_page:30}
    });
    this.setState({images:response.data.results});
  
 }   
 

  render(){
    return(
     <div  className="ui container" style={{marginTop:'50px'}}>
         <Searchbar submit={this.searchquery} style={{marginTop:'50px',margigLeft:'50px'}}></Searchbar>
        <Imageslist renderedimages={this.state.images}></Imageslist>

     </div>
    )
}
}