import React, { Component } from 'react';
import Modal from '../modal';

class TimecardIntegrations extends Component {
  render() {
    return (
      <Modal
        title='Timecard Integrations'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          TBD
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          TBD
        </Modal.Detail>
      </Modal>
    )
  }
}

export default TimecardIntegrations;
