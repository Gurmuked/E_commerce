import React from "react";
import MenuItem from "../MenuItem/MenuItem";
 
class Directory extends React.Component{
  constructor(title){
    super();
    this.state ={
      sections:[
        {
          title:'HATS',
          imgurl:'../assets/download.jpg',
          id:1
        },
        {
          title:'SNEAKERS',
          imgurl:'../assets/download(1).jpg',
          id:1
        },
        {
          title:'JACKETS',
          imgurl:'../assets/download(2).jpg',
          id:1
        },
        {
          title:"WOMEN'S",
          imgurl:'../assets/download(3).jpg',
          id:1
        },
        {
          title:"MEN'S",
          imgurl:'../assets/download(4).jpg',
          id:1
        }
             ]
    }
  }
  render(){
    return(
      <div className="directory-menu w-full  flex flex-wrap justify-space-between mx-auto">
        {
                this.state.sections.map(({title, imgurl, id}) => (
                <MenuItem key={id} title={title} imgurl={imgurl} />
              ))
        }
      </div>
    )
  }
}

export default Directory;