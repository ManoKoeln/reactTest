import React, { Component } from 'react';
import Product from './components/products';
import Navbar from './components/navbar';
import ShoppingCard from './components/shopping-card';

class App extends Component {
    state = {  
        items: []
    } 

    addItem = (amount, name, price) => {
        let currentitems = this.state.items;
       

            let existingItem = currentitems.find(item => item.name === name);
            if(existingItem){
                existingItem.amount += amount;
                this.setState({items: currentitems});
                return;
            }
            else
            currentitems.push({
            amount,
            name,
            price            
        }); 
        this.setState({items: currentitems});   
        // this.setState({items: this.state.item.push({
        // amount: amount,
        // name: name,
        // price: price 
        // });
        console.log(this.state.items);
    }

    render() { 
        return (<React.Fragment>
            <Navbar/>
            <div className="main-container">
                <div className="product-container">
                    <Product onAdd={() => this.addItem(1, "ocean", 2.99)} image="ocean.jpg" title="ocean" description="Ozean"/>
                    <Product onAdd={() => this.addItem(1, "sky", 2.99)} image="sky.jpg" title="sky" description="Himmel"/>
                    <Product onAdd={() => this.addItem(1, "Valley", 2.99)} image="valley.jpg" title="Valley" description="Tal"/>

                </div>
                <ShoppingCard items={this.state.items}/>
            </div>

            </React.Fragment>);
    }
}
 
export default App;