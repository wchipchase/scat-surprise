import React from 'react';
import firebase from 'firebase/app';
import scatData from '../../helpers/data/scatsData';
import ScatCard from '../ScatCard/ScatCard';
import scatShape from '../../helpers/propz/scatShape';

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
      <div className="Home col">
        <h1>Home</h1>
        <div className="d-flex">
        {makeScatCards}
        </div>
      </div>
    );
  }
}
export default Home;
