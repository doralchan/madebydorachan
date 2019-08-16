import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import SquareSummit1 from '../../assets/square_summit_1.png';
import SquareSummit2 from '../../assets/square_summit_2.png';

class SquareDesignSummit extends Component {
  render() {
    return (
      <Modal
        title='Square Design Summit'
        handleClose={ this.props.closeModal }
        path='/project_year_end'>
        <Modal.Detail subtitle='Context'>
          TBD
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          TBD
        </Modal.Detail>
        <Modal.Gallery columns={ 1 }>
          <Image imgSrc={ SquareSummit1 } />
          <Image imgSrc={ SquareSummit2 } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default SquareDesignSummit;
