import React from 'react';
import PropTypes from 'prop-types';

const checkChar = '✔';
const xChar = '✖';

const CheckIcon = ({checked = false}) => <span>{checked ? checkChar : xChar}</span>

CheckIcon.propTypes = {
    checked: PropTypes.bool,
}

export default CheckIcon;