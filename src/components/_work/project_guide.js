import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import Guide1 from '../../assets/guide_home.png';
import Guide2 from '../../assets/guide_brand_identity.png';

class Guide extends Component {
  render() {
    return (
      <Modal
        title='Guide'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          With the rapid growth and rebranding of the company, large inconsistencies were developing between teams. There was uncertainty about what UI components, UX paradigms, and assets were available to product and marketing. Undocumented, tribal knowledge became the norm.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          The motivation was to fill these knowledge gaps for a majority of the teams including designers, developers, product managers, marketing, and sales. I wanted to create a long term solution that would constantly reflect the evolving state of the company.This became a two part project, where part one required the migration of our basic UI codebase to a component-library (consumed by both product and the guide as a node module). Part two was preparing the guide itself as a visual repository for documentation and testing ground for modularizing the UI.
        </Modal.Detail>
        <Modal.Gallery columns={ 2 }>
          <Image imgSrc={ Guide1 } />
          <Image imgSrc={ Guide2 } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default Guide;
