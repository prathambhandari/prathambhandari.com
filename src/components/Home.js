import React, { Component } from "react";

class Home extends Component{
    constructor(){
        super();
        this.state = {
            title: ''
        }
    }
    myArray=['Hello','こんにちは','Hola','你好','مرحبًا','ನಮಸ್ಕಾರ','नमस्ते'];

    componentDidMount(){
        setInterval(()=>{
            this.setState({title:this.myArray[Math.floor(Math.random()*this.myArray.length)]})
        },1500);
    }
    render(){
        return(
            <div className="flex flex-col justify-center items-center bg-slate-100 h-screen">
                    <h1 className="text-7xl font-bold p-10">{this.state.title}</h1>
                    <h2 className="text-3xl font-sans">Im web Developer</h2>
            </div>
        )
    }

}




export default Home;