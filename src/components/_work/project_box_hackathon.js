import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import BoxHackathon1 from '../../assets/box_hackathon1.png';
import BoxHackathon2 from '../../assets/box_hackathon2.png';
import BoxHackathon3 from '../../assets/box_hackathon3.png';
import BoxHackathon4 from '../../assets/box_hackathon4.png';

class BoxHackathon extends Component {
  render() {
    return (
      <Modal
        title='Box Hackathon'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          Every year, Box holds a 24 hour hackathon with the prospect of winning prizes and recognition. There is a popular vote and a panel vote. Anyone can submit a project and vote. The idea was to have a big reveal at the end, concluding the event. Box needed a method to publish videos and vote. The theme of the year was the Lego Movie.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          There were two user types in this case - the typical voter (Boxers) and the panel voter (Special Judges) with the votes weighted differently. Boxers could generally vote and determine which ones they liked with a simple upvote or like whereas panel voters were required to vote per prize category. For the panel voters, the workflow required 3 basic steps: selecting the category, highlighting the entries they liked per category, and ranking them accordingly. This would allow runner ups to emerge from the tally. The site served as a useful platform for the internal team.
        </Modal.Detail>
        <Modal.Gallery columns={ 2 }>
          <Image imgSrc={ BoxHackathon1 } />
          <Image imgSrc={ BoxHackathon2 } />
          <Image imgSrc={ BoxHackathon3 } />
          <Image imgSrc={ BoxHackathon4 } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default BoxHackathon;
