import React from 'react';
import './App.css';
import { data } from './data';
import ProductDetails from './ProductDetails';

class App extends React.Component {
  state = {
    data: null,
    showDetailsFor: null,
  }

  componentDidMount() {
    this.setState({
      data
    })
  }

  handleClick(e) {
    const id = e.target.id;

    this.setState(prevState => ({
      ...prevState,
      showDetailsFor: id,
    }))
  }
  
  render() {
    return (
      <div className="main" >
        {this.state.data
          && this.state.data.map(product => (
          <div key={product.id} id={product.id} onClick={(e) => this.handleClick(e)}>{product.name}</div>
        ))}
        {this.state.showDetailsFor
          && <ProductDetails details={this.state.data.find(item => {
            return item.id === parseInt(this.state.showDetailsFor)
          }
          )} />}
      </div>
    )
  }
}

export default App;
