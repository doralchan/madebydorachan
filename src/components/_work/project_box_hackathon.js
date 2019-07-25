import React, { Component } from 'react';
import Modal from '../modal';

class BoxHackathon extends Component {
  render() {
    return (
      <Modal
        title='Box Hackathon'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          Every year, Box holds a 24 hour hackathon with the prospect of winning
          prizes and recognition. There is a popular vote and a panel vote. Anyone
          can submit and vote. The idea was to have a big reveal at the end,
          concluding the event.
        </Modal.Detail>
        <Modal.Detail subtitle='Goal'>
          Box needed a method to publish videos and vote. By that time, they had
          already decided to theme it based off of the Lego Movie.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          There were two user types in this case - the typical voter (boxers) and
          panel voter. The votes were weighted differently. Boxers could generally
          vote and determine which ones they liked with a simple upvote or like whereas
          panel voters were required to vote per prize category. This broke down into
          3 steps for panel voters: selecting the category, highlighting the entries
          they liked per category, and then ranking them accordingly. This would
          allow runner ups to emerge from the tally.
        </Modal.Detail>
      </Modal>
    )
  }
}

export default BoxHackathon;
