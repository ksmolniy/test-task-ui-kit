import React from 'react';
import PropTypes from 'prop-types';

const FieldDate = ({ label = '', ...input}) => {
    return <label>
        {label}
        <input className="ml-2" {...input} type="date" />
    </label>
};

FieldDate.propTypes = {
    label : PropTypes.string,
    onChange : PropTypes.func,
    value : PropTypes.string,
}

export default FieldDate;