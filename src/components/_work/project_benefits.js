import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import Benefits1 from '../../assets/benefits_1.png';
import Benefits2 from '../../assets/benefits_2.png';
import Benefits3 from '../../assets/benefits_3.png';
import Benefits4 from '../../assets/benefits_4.png';

class Benefits extends Component {
  render() {
    return (
      <Modal
        title='Benefits'
        handleClose={ this.props.closeModal }
        path='/project_onboarding'>
        <Modal.Detail subtitle='Context'>
          TBD
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          TBD
        </Modal.Detail>
        <Modal.Gallery columns={ 2 }>
          <Image imgSrc={ Benefits1 } />
          <Image imgSrc={ Benefits2 } />
          <Image imgSrc={ Benefits3 } />
          <Image imgSrc={ Benefits4 } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default Benefits;
