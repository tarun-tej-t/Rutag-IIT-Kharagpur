import React, { Component } from 'react'
import "./Header2.css"

export default class Header2 extends Component {

    myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
  render() {
    return (
      <div><div class="topnav" id="myTopnav">
      <a href="#home" class="active">Home</a>
     
      <div class="dropdown">
        <button class="dropbtn" style={{paddingTop:"20px"}}>Technologies  
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Technologies Developed</a>
          <a href="#">Technologies Transferred</a>
        </div>
      </div> 
      <a href="#about">Projects</a>
      <a href="#about">Training Programs</a>
      <a href="#about">Testimonials</a>
      <a href="#about">Publications</a>
      <a href="#about">Associated NGOs</a>
      <a href="#about">Contact Us</a>
      <div class="dropdown">
        <button class="dropbtn" style={{paddingTop:"20px"}}>Others  
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">People</a>
          <a href="#">Gallery</a>
        </div>
      </div> 
      <a href="javascript:void(0);" style={{fontSize:"15px"}} class="icon" onclick={this.myFunction}>&#9776;</a>
    </div>
    
    </div>
    )
  }
}
