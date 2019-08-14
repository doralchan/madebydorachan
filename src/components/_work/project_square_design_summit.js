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
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
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
