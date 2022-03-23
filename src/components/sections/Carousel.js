import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
    {
        original: 'https://raw.githubusercontent.com/tarun-tej-t/rutag-imgs/main/s7.png',
        thumbnail: 'https://raw.githubusercontent.com/tarun-tej-t/rutag-imgs/main/s7.png',
      },
    {
      original: 'https://raw.githubusercontent.com/tarun-tej-t/rutag-imgs/main/s1.png',
      thumbnail: 'https://raw.githubusercontent.com/tarun-tej-t/rutag-imgs/main/s1.png',
    },
    {
      original: 'https://raw.githubusercontent.com/tarun-tej-t/rutag-imgs/main/s2.png',
      thumbnail: 'https://raw.githubusercontent.com/tarun-tej-t/rutag-imgs/main/s2.png',
    },
    {
      original: 'https://raw.githubusercontent.com/tarun-tej-t/rutag-imgs/main/s3.png',
      thumbnail: 'https://raw.githubusercontent.com/tarun-tej-t/rutag-imgs/main/s3.png',
    },
    {
        original: 'https://raw.githubusercontent.com/tarun-tej-t/rutag-imgs/main/s6.png',
        thumbnail: 'https://raw.githubusercontent.com/tarun-tej-t/rutag-imgs/main/s6.png',
      },
      {
        original: 'https://raw.githubusercontent.com/tarun-tej-t/rutag-imgs/main/s5.png',
        thumbnail: 'https://raw.githubusercontent.com/tarun-tej-t/rutag-imgs/main/s5.png',
      },
     
  ];
export default class  extends Component {
  render() {
    return (
      <div style={{paddingTop:"200px"}}><ImageGallery items={images} autoPlay/></div>
    )
  }
}
