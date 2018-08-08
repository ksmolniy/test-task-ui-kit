import React from 'react';
import PropTypes from 'prop-types'

const FieldTextarea = ({ label = '', ...input}) => {
    return <label>
        {label}
        <textarea className="ml-2" rows={4} {...input} />
    </label>
};

FieldTextarea.propTypes = {
    label : PropTypes.string,
    onChange : PropTypes.func,
    value : PropTypes.string,
}

export default FieldTextarea;