import React from 'react';
import PropTypes from 'prop-types';

const FieldSelect = ({ label = '', options = [], groupName, value, ...input }) => {
    return <div className="o-form__group">
        <div className="o-form__label">
            {label}
        </div>
        <div className="u-display-flex u-w-100">
            { 
                options.map(item => 
                    <React.Fragment key={item.value}>
                        <input id={`${groupName}-${item.value}}`} className="c-radio c-radio--blue" value={item.value} checked={value === item.value} type="radio" {...input} />
                        <label htmlFor={`${groupName}-${item.value}}`}>
                            {item.name}
                        </label>
                    </React.Fragment>
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
    groupName: PropTypes.string.isRequired,
}

export default FieldSelect;