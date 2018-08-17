import React from 'react';
import PropTypes from 'prop-types';
import CustomMutliSelect from './CustomMutliSelect';

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
    return <div className="o-form__group">
        <div className="o-form__label">{label}</div>
        <CustomMutliSelect multiple value={value} onChange={onChange} {...input} options={options} />
    </div>
};

FieldMultiSelect.propTypes = {
    label : PropTypes.string,
    onChange : PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        name: PropTypes.string,
    })),
}

export default FieldMultiSelect;