import React, { Component } from 'react';

class Band extends Component {
  render() {
    let { band } = this.props
    return(
      <li>
        {band.name}
        <button onClick={e=>this.props.deleteBand(band.id)}>Delete</button>
      </li>
    );
  }
};

export default Band;
