import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

class App extends React.Component {
  render(){
    return (
      <div>
          <head>
              <title>
                  3D With HTML/CSS
              </title>
              <link rel="stylesheet" href="../static/style.css"/>
          </head>
          <body width="100vw" height="100vh">
              <div class="scene">
                  <div class="room">
                      <div class="square backwall">back wall</div>
                      <div class="square floor">floor</div>
                      <div class="square roof">roof</div>
                      <div class="square leftwall">left</div>
                      <div class="square rightwall">right</div>
                  </div>
              </div>
          </body>
      </div>
    )
  }
}

/*
  props: width,height x,y,z cx,cy,cz rx,ry,rz color,text
*/
class Plane extends React.Component {
  render(){
    return (
      <div className="rotationOrigin" style={
        {
          position: 'absolute',
          transform: {
            translateX: this.props.cx,
            translateY: this.props.cy,
            translateZ: this.props.cz,
            rotateX: this.props.rx,
            rotateY: this.props.ry,
            rotateZ: this.props.rz
          }
        }
        }>
        <div className="rotationOffset" style={
          {
            position: 'absolute',
            transform: {
              translateX: (this.props.x - this.props.cx),
              translateY: (this.props.y - this.props.cy),
              translateZ: (this.props.z - this.props.cz)
            }
          }
        }>
          <div class="square" style={
            {
              backgroundColor: this.props.color,
              width: this.props.width,
              height: this.props.height
            }
          }>{this.props.text}</div>
        </div>
      </div>
    )
  }
}

export default App
