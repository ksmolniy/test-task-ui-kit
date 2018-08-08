import React from 'react';
import PropTypes from 'prop-types'

function selectChanged(e, onChange) {
    const checkedOptions = e.target.querySelectorAll('option:checked');

    onChange({
        target: {
            value: Array.prototype.map.call(checkedOptions, (item) => {
                return item.value;
            }),
        }
    });
}

const FieldMultiSelect = ({ label = '', value=[], options = [], onChange ,...input }) => {
    return <label>
        {label}
        <select className="ml-2" multiple onChange={e => selectChanged(e,onChange)} {...input} >
            { options.map(item => <option value={item.value} key={item.value} selected={value.includes(item.value)}>{item.name}</option>) }
        </select>
    </label>
};

FieldMultiSelect.propTypes = {
    label : PropTypes.string,
    onChange : PropTypes.func,
    value: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        name: PropTypes.string,
    })),
}

export default FieldMultiSelect;