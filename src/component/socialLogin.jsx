import React, { Component } from 'react';

// class YourComponent extends Component {
function YourComponent(event) {

    console.log("tet",event)
    // if (event.data.type === 'code') {
    //   const { code } = event.data;
    //   console.log(code)
    //   this.getUserCredentials(code);
    // }
    console.log("hello")

    const popupWindowURL = new URL(window.location.href);
    return popupWindowURL.searchParams.get("code");

    

//   constructor(props) {
    // super(props);
    // this.showAlert = this.showAlert.bind(this);
//   }
//   function showAlert() {
    console.log("Hello I'm an action!");
//   }
  
}
export default YourComponent;