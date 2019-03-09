import PropTypes from 'prop-types';
import React from 'react';

import { FormGroup, Label, Field } from '../style'

const TextField = ({ className, id, label, name, value, placeholder, onChange, required  }) => (
    <FormGroup className={ className }>
        <Label htmlFor={ id }>{label}</Label>
        <Field
          type="text"
          id={ id }
          name={ name }
          value={ value }
          placeholder={ placeholder }
          onChange={ onChange }
          required={ required } />
    </FormGroup>  
)

TextField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
}

export default TextField
