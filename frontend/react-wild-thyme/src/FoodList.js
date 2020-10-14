import React, { Component } from 'react';
import FoodItem from './components/FoodItem'
import Order from './components/Order'
import './FoodList.css';

class FoodList extends Component {
  constructor(props){
    super(props);
    this.state = {
    foodlist: [],
    ordereditems: [],
    dessertlist: [],
    appetizerlist:[],
    category: 'entree',
    }
  this.addToOrder = this.addToOrder.bind(this);
  this.deleteOrderItem = this.deleteOrderItem.bind(this);
  this.editOrderItem = this.editOrderItem.bind(this);

  }


  componentDidMount(){
  //   const foodlist = [{
  //   name: 'Ricotta Ravioli',
  //   price: 20.95,
  //   descripion: 'Homemade ravioli with ricotta cheese, pine nuts, black olive and roasted red bell pepper tomato sauce finished with fresh basil',
  //   url: 'https://liveblissful.files.wordpress.com/2012/11/dsc00763.jpg',
  //   },
  //   {
  //   name: 'Portobello Mushroom Napoleon',
  //   price: 19.95,
  //   descripion: 'Crisp puff pastry layered with Portobello mushrooms, roasted red peppers and roasted garlic-feta spread, with sherry tomato cream sauce',
  //   url: 'http://4.bp.blogspot.com/-lyREap9lrDc/Vi0XYsRBtvI/AAAAAAAAFp4/4OZfRC7rnUU/w1200-h630-p-k-no-nu/Mod-4.jpg',
  //   },
  //   {
  //   name: 'Chicken Parmigiana',
  //   price: 24.95,
  //   descripion: 'Breaded chicken cutlet baked with Parmesan cheese and fresh mozzarella served with marinara sauce, pasta linguine and fresh vegetables',
  //   url: 'http://sundayexpress.co.ls/wp-content/uploads/2013/11/Chicken-Parmesan1.jpg',
  //   },
  //   {
  //   name:'New York Strip',
  //   price: 32.00,
  //   descripion:'12oz Stock Yard Angus Strip Loin grilled to perfection and finished with a red wine-shallot compound butter',
  //   url:'https://aandmfarmsbeef.com/wp-content/uploads/2017/02/grass-fed-ny-strip.jpeg',
  //   },
  // ];
  // this.setState({foodlist});
  fetch('/api/v1/menuitems/')
  .then(response => response.json())
  .then(data => this.setState({ foodlist: data }));
  const dessertlist = [{
    name: '2014 Merry Edwards Late Harvest Sauvignon, Blanc, Sonoma County',
    price: 15.00,
    descripion:'Deeply mouthwatering, it is reminiscent of baked Pink Lady apples en route with caramel and nectarine preserves. A tropical perfume of ripe fig, mango, guava, and plantains.',
    url:'https://tse4.mm.bing.net/th?id=OIP.fbwc0aGHZBzv-EkJJ0AlzQHaHa&pid=Api&P=0&w=300&h=300',
  },
  {
    name:'2016 Evolucio Late Harvest, Tokaj, Hungary',
    price: 17.00,
    descripion: '100% Ferment from the Tokaj region, unctuous and elegant with dried apricot, juicy mango, and plum. Intense and fresh with exceptional acidity.',
    url:'https://www.trbimg.com/img-5642474b/turbine/sc-food-1120-thanksgiving-dessert-wine-20151110',
  }
  ];
  this.setState({dessertlist})
  const appetizerlist = [{
    name: 'Crab Cakes',
    price: 10.95,
    descripion: 'Lump crab cakes (all crab no filler) served with lemon dill sauce',
    url: 'https://d1dd4ethwnlwo2.cloudfront.net/wp-content/uploads/2014/05/Crab-Cake-2.jpg',
  },
  {
    name: 'Risotto Shrimp Fritter',
    price: 12.95,
    descripion: 'Risotto, Shrimp, mozzarella cheese, prosciutto cakes served with grilled tomato cream sauce',
    url: 'https://4.bp.blogspot.com/-4oS2EGTblM0/Wce0r8lOmnI/AAAAAAAAJCU/LkG6LvJCRD8rIwnL6wedrDT0rD2C6qN3gCLcBGAs/s1600/Shrimp%2Band%2BGrits%2BFritter.jpg',
  },
  {
    name: 'Fried Calamari',
    price: 10.75,
    descripion: 'Beer batter fried calamari served with homemade marinara sauce',
    url: 'http://www.mygreekdish.com/wp-content/uploads/2014/02/Crispy-Fried-Squid-Calamari-recipe-Kalamarakia-Tiganita-1.jpg',
  },
  {
    name: 'Spring Rolls',
    price: 9.95,
    descripion: 'Shiitake mushrooms, shrimp and cabbage served with a sweet chili sauce',
    url: 'https://i.ytimg.com/vi/SFYGwhrOZYI/maxresdefault.jpg',
  },
  ];
  this.setState({appetizerlist})
  }

  addToOrder(fooditem){
    const order = [...this.state.ordereditems, fooditem];
    this.setState({ordereditems: order});
  }
  deleteOrderItem(ordereditem){
  const order = [...this.state.ordereditems];
  const index = order.indexOf(ordereditem);
  order.splice(index, 1);
  this.setState({ordereditems: order});
  }
  editOrderItem(orderItem, instructions){
  // console.log(orderItem, instructions);
  // console.log(orderItem.specialinstructions = instructions);
  orderItem.specialinstructions = instructions
  console.log(this.state.ordereditems);
  }
  render(){
    let foodlist = [];
    const category = this.state.category;

    if(category === 'entree') {
      foodlist = this.state.foodlist;
    } else if(category === 'dessert') {
      foodlist = this.state.dessertlist;
    } else if(category === 'appetizer') {
      foodlist = this.state.appetizerlist;
    }

    return(
      <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand">Wild Thyme Gourmet
          <img className="logo"src="https://media-cdn.tripadvisor.com/media/photo-s/03/a4/eb/25/wild-thyme.jpg" alt="logo"/>
        </div>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      <div className="col-12 Menu-heading">
        <button className="btn btn-light" onClick={() => this.setState({category: 'appetizer'})}><h5>Appetizer Menu</h5></button>
        <button className="btn btn-light" onClick={() => this.setState({category: 'entree'})}><h5>Entree Menu</h5></button>
        <button className="btn btn-light" onClick={() => this.setState({category: 'dessert'})}><h5>Dessert Wine</h5></button>
      </div>
      <div className="col-12">
        <FoodItem foodlist={foodlist} addToOrder={this.addToOrder}/>
      </div>
      <div className="col-12">
        <h5 className="Order-heading">Order</h5>
        <Order order={this.state.ordereditems} deleteOrderItem={this.deleteOrderItem} editOrderItem={this.editOrderItem}/>
      </div>
      </React.Fragment>
    )
  }
}

export default FoodList;
