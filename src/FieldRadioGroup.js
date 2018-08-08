import React from 'react';
import PropTypes from 'prop-types'

const FieldSelect = ({ label = '', options = [], value, ...input }) => {
    return <div className="d-flex">
        {label}
        <div className="ml-2 d-flex flex-column">
            { 
                options.map(item => 
                    <label>
                        <input value={item.value} key={item.value} checked={value === item.value} type="radio" {...input} />
                        {item.name}
                    </label>
                )
            }
        </div>
    </div>
};

FieldSelect.propTypes = {
    label : PropTypes.string,
    onChange : PropTypes.func,
    value: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        name: PropTypes.string,
    })),
}

export default FieldSelect;