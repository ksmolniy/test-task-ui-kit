import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from './CheckIcon';

const Field = ({ label = '', value = '' }) => {
    return <div className="o-form__group">
        <div className="o-form__label">{label}</div>
        { 
            Array.isArray(value)
                ? value.length === 0 
                    ? <div className="u-border-bottom u-min-height-3 u-w-100" >Empty</div> 
                    : <div className="u-w-100">{value.map(item => <div className="mb-2 u-border-bottom u-min-height-3 u-m-b-2" key={item}>{item}</div>)}</div> 
                : <div className="u-border-bottom u-min-height-3 u-min-height-3 u-w-100">
                    { typeof value === typeof true ? <CheckIcon checked={value} /> : value }
                </div>
        }
    </div>
};

Field.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string,
    ]),
};

export default Field;