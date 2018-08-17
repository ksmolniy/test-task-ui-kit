import React from 'react';
import PropTypes from 'prop-types';

const FieldTextInput = ({ label = '', ...input}) => {
    return <div className="o-form__group">
        <div className="o-form__label">
            {label}
        </div>
        <input className="c-input" {...input} />
    </div>
};

FieldTextInput.propTypes = {
    label : PropTypes.string,
    onChange : PropTypes.func,
    value : PropTypes.string,
}

export default FieldTextInput;