import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Label, Textarea } from '../style'

const TextareaField = ({ className, size, id, label, name, value, placeholder, onChange, required, children  }) => (
    <FormGroup className={ className }>
        <Label htmlFor={ id }>{label}</Label>
        <Textarea
        className={ size }
        id={ id }        
        name={ name }
        value={ value }
        onChange={ onChange }
        placeholder={ placeholder }
        required={ required } />
        {children}
    </FormGroup>  
)

TextareaField.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.any
}

export default TextareaField
