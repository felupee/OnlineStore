import PropTypes from 'prop-types';
import React from 'react';

class ButtonCategory extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <button data-testid="category" type="button">
        {name}
      </button>
    );
  }
}

ButtonCategory.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ButtonCategory;
