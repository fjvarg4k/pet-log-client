import React from 'react';
import { connect } from 'react-redux'
import Dog from './dog';

export class Dogs extends React.Component {
  render() {
    return (
      <div className="dogs-list">
        <h4>Your Pets</h4>
        <Dog />
      </div>
    );
  }
}

export default connect()(Dogs);
