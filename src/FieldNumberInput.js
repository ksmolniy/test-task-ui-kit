import React from 'react';
import PropTypes from 'prop-types';

const FieldNumberInput = ({ label = '', ...input}) => {
    return <label>
        {label}
        <input className="ml-2" {...input} type="number" />
    </label>
};

FieldNumberInput.propTypes = {
    label : PropTypes.string,
    onChange : PropTypes.func,
    value : PropTypes.number,
}

export default FieldNumberInput;