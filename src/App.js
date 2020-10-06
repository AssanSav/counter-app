import React, {Component} from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({
      counters,
    });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    if(counter.value > 0){
      counters[index].value--
      this.setState({counters}) 
    }
    
  }

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />
        </main>
      </>
    );
  }
}

export default App;
