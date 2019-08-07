import React, { Component } from 'react';
import Modal from '../modal';

class YearEnd extends Component {
  render() {
    return (
      <Modal
        title='Year End'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          At the end of every year, businesses are tasked with wrapping up their financial year. This means
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          In an effort to 
        </Modal.Detail>
      </Modal>
    )
  }
}

export default YearEnd;
