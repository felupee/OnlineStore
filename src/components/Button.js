import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

class ButtonCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  render() {
    const { name, id } = this.props;
    const { redirect } = this.state;

    const redireciona = () => {
      this.setState({
        redirect: true,
      });
    };
    return (
      <button data-testid="category" onClick={ redireciona } type="button">
        {name}
        {redirect && <Redirect to={ `/items/${id}` } />}
      </button>
    );
  }
}

ButtonCategory.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ButtonCategory;
