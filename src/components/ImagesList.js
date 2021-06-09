import React from 'react';
import {GridList, GridListTile} from '@material-ui/core';
const ImageList=props=> {
  // const ImageList=props.renderedimages.map((images)=>{
  //   return <img src={images.urls.small}></img>
  // })
  // return (
  //   <div>
  //     {ImageList}
  //   </div>
  // )
return(
  <GridList cellHeight={200} cols={5} style={{width:950,height:800}}>
  {props.renderedimages.map((data)=>
  <GridListTile key={data.id}><img src={data.urls.small } style={{marginTop:'55px', width: '250px' , height: '300px'}}></img></GridListTile>
  )
  }
  </GridList>
)
 
};
export default  ImageList;