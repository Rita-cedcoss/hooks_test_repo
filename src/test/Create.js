import React from 'react'

const Create = (props) => {
  return (
    <div id="create">
        <div id="create_container">
            <h1>Task Creation</h1>
            <hr></hr>
            <p>Create a new task</p>
            <p>Title</p>
            <input type="text" id="title" ref={props.title}></input>
            <p>Description</p>
            <textarea ref={props.description} id="description"></textarea><br></br>
            <button className='btncreate' onClick={props.create}>Create</button>
        </div>
    </div>
  )
}

export default Create