import React from 'react';
import scatsData from '../../helpers/data/scatsData';
import scatShape from '../../helpers/propz/scatShape';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShape.scatCardShape,
  }

  render() {
    const { scat } = this.props;
    return (
      <div className = "ScatCard col-4">
      <div className="card">
      <div className="card-body">
        <h5 className="card-title">{scat.sampleNum}</h5>
        <p className="card-text">{scat.location}</p>
      </div>
    </div>
    </div>
    );
  }
}


export default ScatCard;
