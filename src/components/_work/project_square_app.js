import React, { Component } from 'react';
import Modal from '../modal';

class SquareApp extends Component {
  render() {
    const block = "Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.";

    return (
      <Modal
        title='Square App'
        handleClose={ this.props.closeModal }>
        <Modal.Gallery subtitle='Context' description={ block }>

        </Modal.Gallery>
      </Modal>
    )
  }
}

export default SquareApp;
