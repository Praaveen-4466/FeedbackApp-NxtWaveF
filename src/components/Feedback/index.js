import React, { Component } from "react";

import "./index.css";

class Feedback extends Component {
  state = { isFeedbackSelected: false };

  onClickedEmoji = () => {
    this.setState({ isFeedbackSelected: true });
  };

  renderFeedbackCard = () => {
    const { resources } = this.props;
    const { emojis } = resources;
    return (
      <div className="feedback-question-container">
        <h1 className="heading">How satisfied are you with our performance</h1>
        <ul className="emojis-list">
          {emojis.map((emoji) => (
            <li key={emoji.id}>
              <button
                className="button"
                type="button"
                onClick={this.onClickedEmoji}
              >
                <img src={emoji.imageUrl} className="img1" alt={emoji.name} />
                <br />
                <span className="para">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  renderThanksCard = () => {
    const { resources } = this.props;
    const { loveEmojiUrl } = resources;
    return (
      <div className="thanks-container">
        <img src={loveEmojiUrl} alt="thanks card" />
        <h1 className="heading">Thank You</h1>
        <p className="para">
          We will utilise your feedback for improving our customer service
        </p>
      </div>
    );
  };

  render() {
    const { isFeedbackSelected } = this.state;
    return (
      <div className="bg-container">
        <div className="card">
          {isFeedbackSelected
            ? this.renderThanksCard()
            : this.renderFeedbackCard()}
        </div>
      </div>
    );
  }
}

export default Feedback;
