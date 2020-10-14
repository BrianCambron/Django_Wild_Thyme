import React, { Component } from 'react';
import './Order.css'

class OrderItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      specialinstructions:'',
    }
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event){
  this.setState({[event.target.name]: event.target.value});
  }
  render(){
    return(
    <li className="list-group-item col-12 col-md-4 list-style">{this.props.orderItem.name}
    <img className="foodpic"src={this.props.orderItem.url} alt='#'/>
    <p>{this.props.orderItem.descripion}</p>
    <button className="btn btn-danger"type="button" onClick={()=> this.props.deleteOrderItem(this.props.orderItem)}>&#x2613;</button>
    <input className="specialinstructions"type="text" placeholder="Special Instructions" name="specialinstructions" id="specialinstructions" value={this.state.specialinstructions} onChange={this.handleInput}/>
    <button onClick={() => this.props.editOrderItem(this.props.orderItem, this.state.specialinstructions)} className="btn btn-info"type="button">Save</button>
    </li>
    )
  }
}



class Order extends Component{
//   constructor(props){
//     super(props);
//     this.handleClick = this.handleClick.bind(this)
//   }
// handleClick(event){
//   // event.preventDefault();
//   alert('Your order has been placed!');
// }
  render(){
    const order = this.props.order.map((orderItem, index) => <OrderItem key={index} orderItem={orderItem} deleteOrderItem={this.props.deleteOrderItem} editOrderItem={this.props.editOrderItem}/>);
    console.log('here', this.props.order)
    const subtotal = this.props.order.reduce((total, order) => total + Number(order.price), 0).toFixed(2);

    console.log(subtotal);
    console.log(this.props.order);
    return(
      <React.Fragment>
      <div className="subtotal">
      ${subtotal}
      </div>
      <form>
      <button className="btn btn-info submit-order">Submit Order</button>
      </form>
      <ul className="list-group order">
        {order}
     </ul>
     </React.Fragment>
    )
  }
}
export default Order;
