import React from 'react';
import { connect } from 'react-redux'
import Dog from './dog';

export class Dogs extends React.Component {
  render() {
    const dogs = this.props.dogsList;
    const dogPortals = dogs.map((dog, index) => {
      return (
        <Dog dog={dog} dispatch={this.props.dispatch} key={index} />
      );
    });

    return (
      <div className="dogs-list">
        {dogPortals}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dogsList: state.dog.dogs
});

export default connect(mapStateToProps)(Dogs);
