import React, { Component } from 'react';
import './FoodItem.css';

class FoodItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      price:'',
      description: '',
      url:'',
    }
  this.handleClick = this.handleClick.bind(this);
  }
  handleClick(food){
    this.props.addToOrder(food)
    console.log(food);
  }
  render(){
    const foodlist = this.props.foodlist.map((food, index) => <li className="list-group-item col-12 col-md-4 list-style" key={index}>{food.name}<img className="foodpic"src={food.url} alt='#'/><p>{food.description}</p><button className="btn btn-success"type="button" onClick={() => this.handleClick(food)}>${food.price}</button></li>);
    return(
  <ul className="list-group menu">
    {foodlist}
  </ul>
    )
  }
}
export default FoodItem;
