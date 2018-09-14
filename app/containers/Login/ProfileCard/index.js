import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Login } from './styles';

class ProfileCard extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Login>Test</Login>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileCard);
