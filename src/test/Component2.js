import React from 'react'
import Create from './Create'

const Component2 = (props) => {
     if(props.arr.length>0){
    return (
    <div id="container_table">
      <table>
        <tr><th>Id</th><th>Title</th><th>Description</th><th>Action</th></tr>
        {
            props.arr.map((item,i)=>{
                return(
                
                 <tr><td>{i+1}</td><td>{item.title}</td><td>{item.description}</td><td><button index={i} onClick={props.edit}>edit</button><button index={i} onClick={props.delete}>Delete</button></td></tr>
                
                 )
            })
            
        }

        
      </table>
      <Create></Create>
    </div>
   
  )
}
}

export default Component2