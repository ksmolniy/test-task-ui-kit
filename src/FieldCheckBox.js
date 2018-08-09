import React from 'react';
import PropTypes from 'prop-types';

const FieldCheckBox = ({ label = '', text = '', value = false, onChange, ...input}) => {
    return <label>
        {label}
        <input className="ml-2" checked={value} onChange={(e) => (onChange({target: { value: e.target.checked}}))} {...input} type="checkbox" />
        { text }
    </label>
};

FieldCheckBox.propTypes = {
    label : PropTypes.string,
    onChange : PropTypes.func,
    value : PropTypes.string,
    checked : PropTypes.bool,
}

export default FieldCheckBox;