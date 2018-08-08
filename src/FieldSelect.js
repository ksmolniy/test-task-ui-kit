import React from 'react';
import PropTypes from 'prop-types'

const FieldSelect = ({ label = '', options = [], ...input }) => {
    return <label>
        {label}
        <select className="ml-2" {...input} >
            { options.map(item => <option value={item.value} key={item.value}>{item.name}</option>) }
        </select>
    </label>
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