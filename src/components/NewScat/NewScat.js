import React from 'react';

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
 

  render() {
    const { newScat } = this.state;
    return (
      <div>
        <h1>New Scat</h1>
        <form>
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
              <label htmlFor="weight">Color</label>
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
              <label htmlFor="location">Color</label>
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
              <label htmlFor="animal">Color</label>
              <input
                type="text"
                className="form-control"
                id="animal"
                placeholder="Bear"
                value={newScat.animal}
                onChange={this.animalChange}
              />
          </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
    );
  }
}

export default NewScat;
