import React from 'react';

const Field = ({ label = '', value = '' }) => {
    return <div className="row">
        <div className="col-4">{label}</div>
        <div className="col-8">{value}</div>
    </div>
}

export default Field;