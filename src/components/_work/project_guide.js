import React, { Component } from 'react';
import Modal from '../modal';

class Guide extends Component {
  render() {
    return (
      <Modal
        title='Guide'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Problem'>
          With the rapid growth and rebranding of the company, large inconsistencies were developing between teams. There was uncertainty about what UI components, UX paradigms, and assets were available to product and marketing. Undocumented, tribal knowledge became the norm.
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

export default Guide;
