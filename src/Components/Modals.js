import React, { Component } from "react";
import {Button, Modal, FormControl} from 'react-bootstrap'
class Modals extends Component {
    state={
      newMovie:'',
      movieUrl:'',
      movierate:0,
        show:false
    }

    movieName=(e)=>{

      this.setState({

        newMovie: e.target.value
      }); console.log(this.state.newMovie)

    }

moviImage=(e)=>{
  this.setState({
    movieUrl: e.target.value
  });console.log(this.state.movieUrl)
}



moviRate=(e)=>{
  this.setState({
    movierate: Number(e.target.value)
  })
}


addNewMovie=()=>{

  let x={name: this.state.newMovie, img:this.state.movieUrl} ;
}

  handleShow = () =>{
    
        this.setState({
            show: !this.state.show
    })};
  render() {
    return (
      <>
        <Button variant="secondary" className="Modal-cont" onClick={this.handleShow}>
        <img className="Modal-img" src="https://pngimage.net/wp-content/uploads/2018/06/icon-add-png-7.png"/>
         
        </Button>
        <Modal className="Modal-content" show={this.state.show} onHide={this.handleShow} animation={false}>
          <Modal.Header style={{background: "#4cd9d9"}} closeButton>
            <Modal.Title style={{marginLeft: "50%"}}></Modal.Title>
          </Modal.Header>

          <Modal.Body className="Modal-input" >
            
            <form >
              <label className="MN fname">Movie's Name</label>
              <input className="title-input input"  placeholder=" " name='title' type='text' onChange={this.movieName}/>
              <label className="MI fname">Upload Banner</label>
              <input className="img-input input" placeholder=" " name='image' type='text' onChange={this.moviImage}/>
              <label className="MR fname">Movie Rating</label>
              <input className="rating-input input" placeholder=" " name='rating' type='text'  onChange={this.moviRate}/>

              
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>this.props.addmovie(this.state.movieUrl,this.state.newMovie,this.state.movierate)}>

              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default Modals