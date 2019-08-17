import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import PublicWebImage from '../../assets/public_web.png';

class PublicWeb extends Component {
  render() {
    return (
      <Modal
        title='Public Web'
        handleClose={ this.props.closeModal }
        path='/project_timecard_integrations'>
        <Modal.Detail subtitle='Context'>
          I typically work on more product-related projects for our quarterly hackweek, but this time around I was prompted to work on a public web project.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          With a blank slate and new suite of products, I wanted to develop a compelling story that would focus on the user and his or her business. The who, what, when, where, why and how was a fundamental framework. After sketching out wireframes and a parti, each section was defined. The business owner was 'the who', the integrated features were 'the what', the day-to-day and year-end were 'the when', the mobile management from anywhere was the 'where', the emphasis on the team dynamics were 'the why' and the pricing and CTA were 'the how'. It was important for any business owner to be able to envision themselves in the same place.
        </Modal.Detail>
        <Modal.Gallery columns={ 1 }>
          <Image imgSrc={ PublicWebImage } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default PublicWeb;
