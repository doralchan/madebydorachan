import React, { Component } from 'react';
import Modal from '../modal';

class SquareDesignSummit extends Component {
  render() {
    return (
      <Modal
        title='Square Design Summit'
        handleClose={ this.props.closeModal }>
        <Modal.Gallery subtitle='Context'>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default SquareDesignSummit;
