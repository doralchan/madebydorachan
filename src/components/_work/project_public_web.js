import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import PublicWebImage from '../../assets/public_web.png';

class PublicWeb extends Component {
  render() {
    return (
      <Modal
        title='Public Web'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          TBD
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          TBD
        </Modal.Detail>
        <Modal.Gallery columns={ 1 }>
          <Image imgSrc={ PublicWebImage } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default PublicWeb;
