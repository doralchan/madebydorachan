import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import BusinessSetup1 from '../../assets/business_setup_1.png';
import BusinessSetup2 from '../../assets/business_setup_2.png';
import BusinessSetup3 from '../../assets/business_setup_3.png';
import BusinessSetup4 from '../../assets/business_setup_4.png';
import BusinessSetup5 from '../../assets/business_setup_5.png';
import BusinessSetup6 from '../../assets/business_setup_6.png';

class BusinessSetup extends Component {
  render() {
    return (
      <Modal
        title='Business Setup'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          After working with the operations team and customer support, we discovered a list of common scenarios. The employers who ended up with failed tax filings had either not registered with the proper state agencies, were still waiting to receive their account numbers, are currently not eligible or used an inactive state account number from a previous business. It became clear employers needed more information about what to do with each respective status.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          State governments are not modern or consistent. Within each state government can be 2-20 agencies that an employer must register with to stay compliant. By organizing these inputs by agency, we are highlighting who and where these account numbers can be obtained, and whether if they even apply. Creating these affordances increases the likeliness a user will enter the correct data or seek the proper help to do so.
        </Modal.Detail>
        <Modal.Gallery columns={ 2 }>
          <Image imgSrc={ BusinessSetup1 } />
          <Image imgSrc={ BusinessSetup2 } />
          <Image imgSrc={ BusinessSetup3 } />
          <Image imgSrc={ BusinessSetup4 } />
          <Image imgSrc={ BusinessSetup5 } />
          <Image imgSrc={ BusinessSetup6 } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default BusinessSetup;
