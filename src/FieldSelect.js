import React from 'react';
import PropTypes from 'prop-types';

const FieldSelect = ({ label = '', options = [], ...input }) => {
    return <div className="o-form__group">
        <div className="o-form__label">{label}</div>
        <select className="c-select" {...input} >
            { options.map(item => <option value={item.value} key={item.value}>{item.name}</option>) }
        </select>
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