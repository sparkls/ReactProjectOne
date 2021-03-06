import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 10 },
      { id: 4, value: 6 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            selected={true}
          >
            <h4>Counter Number: {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
