import React from 'react';
import { compose, withStateHandlers, withState, lifecycle, setPropTypes, } from 'recompose';
import PropTypes from 'prop-types';

const CustomMutliSelect = ({ selected = [], options, selectRow, isOpen, selectedObjects, changeIsOpen }) => {
    const listItem = item => <li 
                                className={`c-custom-select__options-item ${selected.includes(item.value) ? 'c-custom-select__options-item--selected' : ''}`} 
                                data-value={item.value} 
                                onClick={selectRow} 
                                key={item.value} > 
                                    {item.name} 
                                </li>;

    const selectedValueStr = selectedObjects.map(item => item.name).join(', ');

    return <div className="c-custom-select" onFocus={()=>changeIsOpen(true)} >

        <input className="c-custom-select__selected-list" value={selectedValueStr} readOnly/>
        <ul className={`c-custom-select__options-list ${!isOpen ? 'c-custom-select__options-list--closed' : ''}`}>
            {options.map(listItem)}
        </ul>
    </div>
}



export default compose(
    withStateHandlers(
        ({ value, options }) => ({
            selected: value,
            selectedObjects: options.filter(item => value.includes(item.value)),
        }),
        {
            selectRow: ({ selected, selectedObjects }, { options, onChange }) => (e) => {
                const selectedValue = e.target.dataset.value;

                const isAdding = !selected.includes(selectedValue);

                if (isAdding) {
                    const value = [...selected, selectedValue]

                    onChange({
                        target: {
                            value,
                        }
                    });
                    return {
                        selected: [...value],
                        selectedObjects: [...selectedObjects, options.find(item=>item.value===selectedValue)],
                    }
                }
                const value = [...selected.filter(item=>item!==selectedValue)];

                onChange({
                    target: {
                        value,
                    }
                });
                return {
                    selected: [...value],
                    selectedObjects: [...selectedObjects.filter(item=>item.value!==selectedValue)],
                }
            }
        },
    ),
    withState('isOpen', 'changeIsOpen', false),
    lifecycle({
        componentDidMount() {
            this.clickListener = document.addEventListener('click', (e) => {
                const selectElement = e.target.closest('.c-custom-select');
                if (selectElement === null || selectElement.querySelector('.c-custom-select__options-list:not(.c-custom-select__options-list--closed)') === null) {
                    if(this.props.isOpen) {
                        this.props.changeIsOpen(false);
                    }
                }
            })
        },
        componentWillUnmount() {
            document.removeEventListener('click',this.clickListener);
        }
    }),
    setPropTypes({
        options: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
        })).isRequired,
        value: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
)(CustomMutliSelect)