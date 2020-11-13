import React from 'react';
import PropTypes from 'prop-types';
import { Button as MButton } from '@material-ui/core';
import './Button.scss';

export default function Button({ onClick }) {
  return (
    <div className="button__xs">
      <MButton
        color="secondary"
        variant="contained"
        size="small"
        onClick={onClick}
      >
        Add Event
      </MButton>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
