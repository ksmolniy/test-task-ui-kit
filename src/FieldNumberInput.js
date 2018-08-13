import React from 'react';
import PropTypes from 'prop-types';

const FieldNumberInput = ({ label = '', onChange, ...input}) => {
    return <label>
        {label}
        <input className="ml-2" onChange={e=>onChange({target: { value: +e.target.value }})} {...input} type="number" />
    </label>
};

FieldNumberInput.propTypes = {
    label : PropTypes.string,
    onChange : PropTypes.func,
    value : PropTypes.number,
}

export default FieldNumberInput;