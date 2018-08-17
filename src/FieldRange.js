import React from 'react';
import PropTypes from 'prop-types';

const FieldRange = ({ label = '', value = 50, min = 0, max = 100, onChange, ...input}) => {
    return <div className="o-form__group">
        <div className="o-form__label">{label}</div>
        <div className="u-w-100">
            <input className="ml-2" type="range" min={min} max={max} value={value} onChange={e=>onChange({target: { value: +e.target.value }})} {...input} />
            {value}%
        </div>
    </div>
};

FieldRange.propTypes = {
    label : PropTypes.string,
    onChange : PropTypes.func,
    value : PropTypes.number,
}

export default FieldRange;