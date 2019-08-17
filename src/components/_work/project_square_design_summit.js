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
        handleClose={ this.props.closeModal }
        path='/project_year_end'>
        <Modal.Detail subtitle='Context'>
          With so many products offered at Square, the design teams are divided where it's easy to lose track of new hires and ongoing projects. In an effort to organize and establish a stronger tie between the different design teams, workstreams were created to focus on specific agendas such as branding, onboarding, tooling, etc. I was part of the Conferences and Training workstream which outlined how to attend events and obtain educational training. With two other designers, we launched a plan for our own internal design summit. It will be the first official design event that has ever been planned at Square, with over 100 RSVPs. Even Jack Dorsey will be there as our keynote speaker. Many will be flying into San Francisco HQ from other Square offices.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          While the others focused on budgeting and logistics, I worked on the schedule, design and development of the website. Since this is an internal event, it was easy to link to internal references such as the company directory and private Google Docs. A few things I built early on was a call for speakers and survey asking about what people were interested in learning about. Afterwards, I updated the site to include form submissions, speaker profiles, a schedule, talk details, participation suggestions and resources for the uncertain. It's currently live and being used as an open source template for other summits within the company. 
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
