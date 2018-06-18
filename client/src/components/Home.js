import React from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component{

  state = {trips: []}



componentDidMount() {
  axios.get('/api/trips')
    .then( res => this.setState({ trips: res.data }) )
}

 render () {
   const { trips} = this.state
   return (
    <h3>
      { trips.map( t =>
          <p key={t.id}>
            <Link to={`/trips/${t.id}`}>{t.name}</Link>
          </p>
        )
      }
    </h3>
  )
 }
}

export default Home