import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import Guide1 from '../../assets/guide_home.png';
import Guide2 from '../../assets/guide_brand_identity.png';
import Guide3 from '../../assets/guide_product_assets.png';
import Guide4 from '../../assets/guide_product_elements.png';
import Guide5 from '../../assets/guide_product_helpers.png';
import Guide6 from '../../assets/guide_usability_actions.png';
import Guide7 from '../../assets/guide_usability_workflows.png';
import Guide8 from '../../assets/guide_research_interviews.png';

class Guide extends Component {
  render() {
    return (
      <Modal
        title='Guide'
        handleClose={ this.props.closeModal }
        path='/project_garnishments'>
        <Modal.Detail subtitle='Context'>
          With the rapid growth and rebranding of the company, large inconsistencies were developing between teams. There was uncertainty about what UI components, UX paradigms, and assets were available to product and marketing. Undocumented, tribal knowledge became the norm. I knew without addressing the issue, the cohesion of the product would spiral out of control.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          The motivation behind this project was to fill these knowledge gaps for a majority of the teams including designers, developers, product managers, marketing, and sales. I wanted to create a long term solution that would constantly reflect the evolving state of the company.This became a two part project, where part one required the migration of our basic UI codebase to a component-library (consumed by both product and the guide as a node module). Part two was preparing the guide itself as a visual repository for documentation and testing ground for modularizing the UI. It continues to be used as a main resource for product development today.
        </Modal.Detail>
        <Modal.Gallery columns={ 2 }>
          <Image imgSrc={ Guide1 } />
          <Image imgSrc={ Guide2 } />
          <Image imgSrc={ Guide3 } />
          <Image imgSrc={ Guide4 } />
          <Image imgSrc={ Guide5 } />
          <Image imgSrc={ Guide6 } />
          <Image imgSrc={ Guide7 } />
          <Image imgSrc={ Guide8 } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default Guide;
