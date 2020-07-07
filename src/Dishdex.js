import React, { Component } from 'react'
import Dishes from './Dishes'
import './Dishdex.css'
class Dishdex extends Component {
    static defaultProps = 
    {
        dishes:[
            {name:'Biryani' ,  imgs:require('./imgs/biryani.png')},
            {name:'Burger'  ,   imgs:require('./imgs/burger.png')},
            {name:'Tikkah'  ,  imgs:require('./imgs/Tikka.png')}
        ]

    };
    render(){
return (
    <div className="Dishdex">
        <div className="Dishdex-cards">
        {this.props.dishes.map((d)=>(
            <Dishes name={d.name} imgs={d.imgs}/>
        ))}
 
        </div>

    </div>
);
     }
 }
 export default Dishdex;