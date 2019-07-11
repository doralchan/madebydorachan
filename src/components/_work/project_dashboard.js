import React, { Component } from 'react';
import Modal from '../modal';

class Dashboard extends Component {
  render() {
    return (
      <Modal
        title='Dashboard'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='The Problem'>
          TBD
        </Modal.Detail>
        <Modal.Detail subtitle='Research'>
          TBD
        </Modal.Detail>
        <Modal.Detail subtitle='The Solution'>
          TBD
        </Modal.Detail>
      </Modal>
    )
  }
}

export default Dashboard;
