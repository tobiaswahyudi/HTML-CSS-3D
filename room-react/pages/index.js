import React from "react"
import Link from "next/link"
import Head from "../components/head"
import Nav from "../components/nav"
import "../static/style.css"

class App extends React.Component {
  render(){
    return (
      <div>
        <Head title="3D With HTML/CSS" >
        </Head>
        <div className="screen">
          <div className="scene">
            <Room>
              <Plane pos={[0,0,-30]} piv={[0,0,0]} rot={[0,0,0]} dim={[150,60]} color="#888888"/>
              <Plane pos={[0,0,-75]} piv={[0,0,0]} rot={[0,90,0]} dim={[60,60]} color="#999999"/>
              <Plane pos={[0,0,-75]} piv={[0,0,0]} rot={[0,-90,0]} dim={[60,60]} color="#999999"/>
              <Plane pos={[0,0,-30]} piv={[0,0,0]} rot={[90,0,0]} dim={[150,60]} color="#CCCCCC"/>
              <Plane pos={[0,0,-30]} piv={[0,0,0]} rot={[-90,0,0]} dim={[150,60]} color="#555555"/>
              <Plane pos={[0,0,-30]} piv={[0,0,0]} rot={[-90,0,0]} dim={[150,60]} color="#555555"/>
            </Room>
          </div>
        </div>
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
      <div className="pivot" style={
        {
          position: "absolute",
          transformStyle: "preserve-3d",
          transform: 
            "translate3d("+this.props.piv[0]+"em, "+this.props.piv[1]+"em ,"+this.props.piv[2]+"em) "+
            "rotateX("+this.props.rot[0]+"deg) "+
            "rotateY("+this.props.rot[1]+"deg) "+
            "rotateZ( "+this.props.rot[2]+"deg)"
        }
        }>
        <div class="square" style={
          {
            position: "absolute",
            backgroundColor: this.props.color,
            width: this.props.dim[0]+"em",
            height: this.props.dim[1]+"em",
            transform: "translate3d("+
              (this.props.pos[0] - this.props.piv[0] - (0.5 * this.props.dim[0]))+"em, "+
              (this.props.pos[1] - this.props.piv[1] - (0.5 * this.props.dim[1]))+"em ,"+
              (this.props.pos[2] - this.props.piv[2])+"em )"
          }
        }>{this.props.text}</div>
      </div>
    )
  }
}

class Room extends React.Component {
  render(){
    return(
      <div className="room">
        {this.props.children}
      </div>
    )
  }
}

export default App
