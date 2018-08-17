import React from 'react';
import PropTypes from 'prop-types';

const FieldTextarea = ({ label = '', ...input}) => {
    return <div className="o-form__group">
        <div className="o-form__label">{label}</div>
        <textarea className="c-textfield" rows={4} {...input} />
    </div>
};

FieldTextarea.propTypes = {
    label : PropTypes.string,
    onChange : PropTypes.func,
    value : PropTypes.string,
}

export default FieldTextarea;