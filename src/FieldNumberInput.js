import React from 'react';
import PropTypes from 'prop-types';

const FieldNumberInput = ({ label = '', onChange, ...input}) => {
    return <div className="o-form__group">
        <div className="o-form__label">
            {label}
        </div>
        <input className="c-input" onChange={e=>onChange({target: { value: +e.target.value }})} {...input} type="number" />
    </div>
};

FieldNumberInput.propTypes = {
    label : PropTypes.string,
    onChange : PropTypes.func,
    value : PropTypes.number,
}

export default FieldNumberInput;