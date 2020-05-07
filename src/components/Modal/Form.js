import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './Modal.scss';

const Form = ({ onClose, onChange, onDelete, state, error }) => {
  return (
    <div className="modal">
      <TextField
        id="title"
        label="Event name"
        required
        onChange={onChange}
        value={state.title}
        helperText={error}
        error={state.title.length > 10 && true}
      />
      <TextField
        id="date"
        label="Event date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onChange}
        value={state.date}
      />
      <TextField
        id="time"
        label="Event time"
        type="time"
        value={state.time}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onChange}
      />
      <TextField
        id="notes"
        label="Notes"
        onChange={onChange}
        value={state.notes}
      />
      <div className="modal__buttons">
        <Button
          color="secondary"
          onClick={onClose}
          variant="contained"
          size="small"
        >
          Cancel
        </Button>
        {state.id && (
          <Button
            color="secondary"
            variant="contained"
            size="small"
            onClick={onDelete}
          >
            Delete
          </Button>
        )}
        <Button color="primary" type="submit" variant="contained" size="small">
          {state.id ? 'Edit' : 'Save'}
        </Button>
      </div>
      <HighlightOffIcon className="modal__close" onClick={onClose} />
    </div>
  );
};

Form.propTypes = {
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  state: PropTypes.shape({
    title: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    notes: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default Form;
