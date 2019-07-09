import React from 'react';
import firebase from 'firebase/app';
import scatData from '../../helpers/data/scatsData';
import ScatCard from '../ScatCard/ScatCard';

class Home extends React.Component {
  state = {
    scats: [],
  }

  componentDidMount() {
    const { uid } = firebase.auth().currentUser;
    scatData.getScats(uid)
      .then(scats => this.setState({ scats }))
      .catch(err => console.error('could not get scats', err));
  }

  render() {
    const makeScatCards = this.state.scats.map(scat => (
      <ScatCard
      key = {scat.id}
      scat={scat}
      />
    ));

    return (
      <div>
        <h1>Home</h1>
        <div className="d-flex"></div>
        {makeScatCards}
      </div>
    );
  }
}
export default Home;
