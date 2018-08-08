import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ label = '', value = '' }) => {
    return <div className="row py-2">
        <div className="col-4">{label}</div>
        { 
            Array.isArray(value)
                ? <div className="col-8" >{value.map(item => <div className="mb-2 border-bottom" key={item}>{item}</div>)}</div> 
                : <div className="col-8 border-bottom">{value}</div>
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