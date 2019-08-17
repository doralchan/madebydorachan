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
import MobileOnboard9 from '../../assets/mobile_onboard_9.png';
import MobileOnboard10 from '../../assets/mobile_onboard_10.png';

import MobilePay1 from '../../assets/mobile_pay_1.png';
import MobilePay2 from '../../assets/mobile_pay_2.png';
import MobilePay3 from '../../assets/mobile_pay_3.png';
import MobilePay4 from '../../assets/mobile_pay_4.png';
import MobilePay5 from '../../assets/mobile_pay_5.png';
import MobilePay6 from '../../assets/mobile_pay_6.png';
import MobilePay7 from '../../assets/mobile_pay_7.png';
import MobilePay8 from '../../assets/mobile_pay_8.png';
import MobilePay9 from '../../assets/mobile_pay_9.png';
import MobilePay10 from '../../assets/mobile_pay_10.png';

class MobileApp extends Component {
  render() {
    return (
      <Modal
        title='Mobile App'
        handleClose={ this.props.closeModal }
        path='/project_timecard_integrations'>
        <Modal.Detail subtitle='Context'>
          For proof of concept, the web app was converted into a mobile app by embedding it into a native container. This means the mobile payroll flows was a bi-product of desktop payroll flows. It was not explicitly designed with modern mobile patterns in mind. Despite this hack, it was used by business owners anyways with 10% of all runs through mobile and the rest through desktop. It was clear there was reasonable demand for this, given the number of downloads and requests for improvements.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          This project is broken into two major parts, each owned by a different team. The first is onboarding, owned by growth, and the second is payroll, which is owned by core. For onboarding, with the many steps that exist, we needed improvements that would reduce the cognitive load on the business owner. We wanted them to understand why we were asking for this information and help develop a sense of achievement at key milestones. To do so, we categorized these questions and ask them about their business before they answered questions about their payroll. For the payroll part itself, we recognized incorporating timecards into the flow itself was pivotal. Allowing the business owner to deep dive into each employee or contractor (if necessary) was far more effective than forcing them into steps that are optimized for desktop view, and rarely even changed.
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
          <Image imgSrc={ MobileOnboard9 } />
          <Image imgSrc={ MobileOnboard10 } />
          <Image imgSrc={ MobilePay1 } />
          <Image imgSrc={ MobilePay2 } />
          <Image imgSrc={ MobilePay3 } />
          <Image imgSrc={ MobilePay4 } />
          <Image imgSrc={ MobilePay5 } />
          <Image imgSrc={ MobilePay6 } />
          <Image imgSrc={ MobilePay7 } />
          <Image imgSrc={ MobilePay8 } />
          <Image imgSrc={ MobilePay9 } />
          <Image imgSrc={ MobilePay10 } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default MobileApp;
