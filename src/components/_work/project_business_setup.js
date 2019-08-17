import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import BusinessSetup1 from '../../assets/business_setup_1.png';
import BusinessSetup2 from '../../assets/business_setup_2.png';
import BusinessSetup3 from '../../assets/business_setup_3.png';
import BusinessSetup4 from '../../assets/business_setup_4.png';
import BusinessSetup5 from '../../assets/business_setup_5.png';
import BusinessSetup6 from '../../assets/business_setup_6.png';
import BusinessSetup7 from '../../assets/business_setup_7.png';
import BusinessSetup8 from '../../assets/business_setup_8.png';

class BusinessSetup extends Component {
  render() {
    return (
      <Modal
        title='Business Setup'
        handleClose={ this.props.closeModal }
        path='/project_mobile_app'>
        <Modal.Detail subtitle='Context'>
          One of the most common painpoints for small business owners is ensuring they have set up their business correctly. With the constant changes that occur on a Federal, state and local level, it's difficult to know what's required, when - especially for someone who might be just starting out. By failing to properly set up their business, it's likely the owner will need to play catch up in compliance while trying to keep their business afloat. This means that the products they use must also play catchup with them, which, in many cases, falls outside of the product's domain. Unfortunately, for Square, if a request for information is unmet multiple times, the owner is then liable for completing their own tax filings and payments.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          After working with growth, operations and customer support, we came up with a list of common scenarios that lead to tax failures. Either the owner had not registered with the proper agencies, were still waiting to receive their account numbers and may have forgotten, weren't eligible or liable for some taxes, or were using inactive account numbers from a previous business. It was clear we needed to understand the status of the user, and offer alternative solutions to successfully onboard. First, providing guidance about the requirements in each locale was critical. Within each state government can be 2-20 agencies that an employer must register with. By organizing these requirements by agency, we were emphasizing who the owner needed to contact and how. If they left the form field blank, and asked them why immediately afterwards, we were able to provide them with better resources to follow through. We also added another form field that would allow them to indicate if they were liable or not for certain taxes.
        </Modal.Detail>
        <Modal.Gallery columns={ 2 }>
          <Image imgSrc={ BusinessSetup1 } />
          <Image imgSrc={ BusinessSetup2 } />
          <Image imgSrc={ BusinessSetup3 } />
          <Image imgSrc={ BusinessSetup4 } />
          <Image imgSrc={ BusinessSetup5 } />
          <Image imgSrc={ BusinessSetup6 } />
          <Image imgSrc={ BusinessSetup7 } />
          <Image imgSrc={ BusinessSetup8 } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default BusinessSetup;
