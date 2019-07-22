import React, { Component } from 'react';
import Modal from '../modal';

import Mapping from '../../assets/project_onboarding_mapping.svg';

class Onboarding extends Component {
  render() {
    return (
      <Modal
        title='Onboarding'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context' imgSrc={ Mapping }>
          TBD
        </Modal.Detail>
        <Modal.Detail subtitle='Goal'>
          TBD
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          TBD
        </Modal.Detail>
      </Modal>
    )
  }
}

export default Onboarding;
