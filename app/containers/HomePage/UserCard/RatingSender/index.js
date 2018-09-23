import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user from 'horizon/user';
import { RatingBox, Rate } from './styles';

class RatingSender extends React.PureComponent {
  static propTypes = {
    userId: PropTypes.string,
    ratings: PropTypes.array,
    rating: PropTypes.number,
    comments: PropTypes.number,
  };

  sendRating = event => {
    this.props.ratings.push(Number(event.target.value));
    user.rate({
      email: this.props.userId,
      rating: this.props.ratings,
      popularity: this.props.rating * this.props.comments,
    });
  };

  populateRatings = () => {
    const rateButtons = [];
    for (let index = 1; index <= 5; index += 1) {
      const key = index;
      rateButtons.push(
        <Rate key={key} value={key} onClick={event => this.sendRating(event)}>
          <FontAwesomeIcon icon="star" />
        </Rate>,
      );
    }
    return rateButtons;
  };

  render() {
    return <RatingBox>{this.populateRatings()}</RatingBox>;
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RatingSender);
