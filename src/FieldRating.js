import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

const FieldRating = ({ label = '', value = 0, max = 5, ...input }) => {
    return <div className="o-form__group">
        <div className="o-form__label">{label} </div>
            <Rating className="u-m-r-auto" max={max} value={value} {...input} />
        </div>
}

FieldRating.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func,
};

export default FieldRating;