import React from 'react';
import PropTypes from 'prop-types';

const FieldRange = ({ label = '', value = 50, min = 0, max = 100, ...input}) => {
    return <label>
        {label}
        <input className="ml-2" type="range" min={min} max={max} value={value} {...input} />
        {value}%
    </label>
};

FieldRange.propTypes = {
    label : PropTypes.string,
    onChange : PropTypes.func,
    value : PropTypes.number,
}

export default FieldRange;