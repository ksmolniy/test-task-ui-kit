import React from 'react';
import PropTypes from 'prop-types';

const FieldCheckBox = ({ label = '', text = '', labelForName, value = false, onChange, ...input}) => {
    return <div className="o-form__group">
        <div className="o-form__label">
            {label}
        </div>
        <input id={labelForName} className="c-checkbox c-checkbox--blue" checked={value} onChange={(e) => (onChange({target: { value: e.target.checked}}))} {...input} type="checkbox" />
        <label htmlFor={labelForName} className="u-w-100">
            { text }
        </label>
    </div>
};

FieldCheckBox.propTypes = {
    label : PropTypes.string,
    onChange : PropTypes.func,
    value : PropTypes.string,
    checked : PropTypes.bool,
    labelForName: PropTypes.string.isRequired,
}

export default FieldCheckBox;