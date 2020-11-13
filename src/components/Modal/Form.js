import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';
import './Modal.scss';

const Form = ({ onClose, onChange, onToggle, onDelete, state, error }) => {
  return (
    <div className="modal">
      <div className="modal__input">
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
          disabled={state.allDay}
        />
        <TextField
          id="notes"
          label="Notes"
          onChange={onChange}
          value={state.notes}
        />
        <label htmlFor="allDay" className="modal__toggle">
          all Day
          <ToggleButton
            selected={state.allDay}
            value="check"
            id="allDay"
            size="small"
            onChange={onToggle}
          >
            <CheckIcon />
          </ToggleButton>
        </label>
      </div>

      <div className="modal__buttons">
        <Button color="primary" type="submit" variant="contained" size="small">
          {state.id ? 'Edit' : 'Save'}
        </Button>
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
      </div>
      <HighlightOffIcon className="modal__close" onClick={onClose} />
    </div>
  );
};

Form.propTypes = {
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  state: PropTypes.shape({
    title: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    allDay: PropTypes.bool.isRequired,
    notes: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default Form;
