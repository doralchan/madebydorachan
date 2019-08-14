import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import MobileStore1 from '../../assets/mobile_store_1.png';
import MobileStore2 from '../../assets/mobile_store_2.png';
import MobileStore3 from '../../assets/mobile_store_3.png';
import MobileStore4 from '../../assets/mobile_store_4.png';
import MobileStore5 from '../../assets/mobile_store_5.png';

import MobileOnboard1 from '../../assets/mobile_onboard_1.png';
import MobileOnboard2 from '../../assets/mobile_onboard_2.png';
import MobileOnboard3 from '../../assets/mobile_onboard_3.png';
import MobileOnboard4 from '../../assets/mobile_onboard_4.png';
import MobileOnboard5 from '../../assets/mobile_onboard_5.png';
import MobileOnboard6 from '../../assets/mobile_onboard_6.png';
import MobileOnboard7 from '../../assets/mobile_onboard_7.png';
import MobileOnboard8 from '../../assets/mobile_onboard_8.png';

import MobilePay1 from '../../assets/mobile_pay_1.png';
import MobilePay2 from '../../assets/mobile_pay_2.png';
import MobilePay3 from '../../assets/mobile_pay_3.png';
import MobilePay4 from '../../assets/mobile_pay_4.png';
import MobilePay5 from '../../assets/mobile_pay_5.png';

class SquareApp extends Component {
  render() {
    return (
      <Modal
        title='Square App'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          TBD
        </Modal.Detail>
        <Modal.Gallery columns={ 5 }>
          <Image imgSrc={ MobileStore1 } />
          <Image imgSrc={ MobileStore2 } />
          <Image imgSrc={ MobileStore3 } />
          <Image imgSrc={ MobileStore4 } />
          <Image imgSrc={ MobileStore5 } />
          <Image imgSrc={ MobileOnboard1 } />
          <Image imgSrc={ MobileOnboard2 } />
          <Image imgSrc={ MobileOnboard3 } />
          <Image imgSrc={ MobileOnboard4 } />
          <Image imgSrc={ MobileOnboard5 } />
          <Image imgSrc={ MobileOnboard6 } />
          <Image imgSrc={ MobileOnboard7 } />
          <Image imgSrc={ MobileOnboard8 } />
          <Image imgSrc={ MobilePay1 } />
          <Image imgSrc={ MobilePay2 } />
          <Image imgSrc={ MobilePay3 } />
          <Image imgSrc={ MobilePay4 } />
          <Image imgSrc={ MobilePay5 } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default SquareApp;
