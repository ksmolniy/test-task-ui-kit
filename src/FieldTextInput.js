import React from 'react';
import PropTypes from 'prop-types';

const FieldTextInput = ({ label = '', ...input}) => {
    return <label>
        {label}
        <input className="ml-2" {...input} />
    </label>
};

FieldTextInput.propTypes = {
    label : PropTypes.string,
    onChange : PropTypes.func,
    value : PropTypes.string,
}

export default FieldTextInput;