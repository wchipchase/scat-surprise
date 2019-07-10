import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import scatData from '../../helpers/data/scatsData';

const defaultScat = {
  location: '',
  weight: '',
  color: '',
  sampleNum: '',
  animal: '',
};
class NewScat extends React.Component {
  state = {
    newScat: defaultScat,
  }

  formFieldStringState = (name, e) => {
    const tempScat = { ...this.state.newScat };
    tempScat[name] = e.target.value;
    this.setState({ newScat: tempScat });
  }

  sampleNameChange = e => this.formFieldStringState('sampleNum', e);

  colorChange = e => this.formFieldStringState('color', e);

  weightChange = e => this.formFieldStringState('weight', e);

  locationChange = e => this.formFieldStringState('location', e);

  animalChange = e => this.formFieldStringState('animal', e);

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newScat };
    saveMe.uid = firebase.auth().currentUser.uid;
    console.error('things to save', saveMe);
    scatData.postScat(saveMe)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to save', err));
  }

  render() {
    const { newScat } = this.state;
    return (
      <div>
        <h1>New Scat</h1>
        <form onSubmit={this.formSubmit}>
            <div className="form-group">
              <label htmlFor="sampleNum">Sample Name</label>
              <input
                type="text"
                className="form-control"
                id="sampleNum"
                placeholder="Sample 12"
                value={newScat.sampleNum}
                onChange={this.sampleNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="color">Color</label>
              <input
                type="text"
                className="form-control"
                id="color"
                placeholder="Brown"
                value={newScat.color}
                onChange={this.colorChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weight">Weight</label>
              <input
                type="text"
                className="form-control"
                id="weight"
                placeholder="12g"
                value={newScat.weight}
                onChange={this.weightChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="NSS"
                value={newScat.location}
                onChange={this.locationChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="animal">Animal</label>
              <input
                type="text"
                className="form-control"
                id="animal"
                placeholder="Bear"
                value={newScat.animal}
                onChange={this.animalChange}
              />
          </div>

            <button type="submit" className="btn btn-primary">Save Scat</button>
          </form>
      </div>
    );
  }
}

export default NewScat;
