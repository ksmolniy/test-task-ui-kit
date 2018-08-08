import React from 'react';

import PropTypes from 'prop-types';

const starChar = '★';

const Rating = ({ value, max, onChange }) => {
    return <div className="d-flex">
        {
            Array(max)
                .fill(null)
                .map((item, i) =>
                    <div
                        data-value={i+1}
                        key={i}
                        className={`btn ${i > (value - 1) && 'text-muted'}`}
                            // seems like every map iteration + every rerender = new function
                            onClick={(e) => {
                                const dataValue = +e.target.dataset.value;
                                const returnedValue = value === dataValue ? value - 1 : dataValue;

                                onChange({
                                    target: {
                                        value: returnedValue
                                    },
                                });
                            }}
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