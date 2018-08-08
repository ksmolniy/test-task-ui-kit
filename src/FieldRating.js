import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

const FieldRating = ({ label = '', value = 0, max = 5, ...input }) => {
    return <label className="d-flex">
        {label}
        <Rating max={max} value={value} {...input} />
        </label>
}

FieldRating.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func,
};

export default FieldRating;