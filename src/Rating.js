import React from 'react';

import PropTypes from 'prop-types';

const starChar = '★';

const Rating = ({ value, max, onChange, className }) => {
    const changeRating = e => {
        const dataValue = +e.target.dataset.value;
        const returnedValue = value === dataValue ? value - 1 : dataValue;

        onChange({
            target: {
                value: returnedValue
            },
        });
    };

    return <div className={`c-rating ${className}`}>
        {
            Array(max)
                .fill(null)
                .map((item, i) =>
                    <div
                        data-value={i+1}
                        key={i}
                        className={`c-rating__star ${i > (value - 1) && 'c-rating__star--inactive'}`}
                        onClick={changeRating}
                    >
                        {starChar}
                    </div>
                )
        }
    </div>
}

Rating.propTypes = {
    value: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func,
}

export default Rating;