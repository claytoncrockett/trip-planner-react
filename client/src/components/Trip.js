import React from 'react';
import axios from 'axios';

class Trip extends React.Component {
  state = {trip: {}}

  componentDidMount() {
    axios.get(`/api/trips/${this.props.match.params.id}`)
      .then( res => this.setState({ product: res.data}))
  }

  render() {
    const {trip} = this.state
    return (
      <div>
        <h1> {trip.name}</h1>
      </div>
    )
  }
}

export default Trip;
