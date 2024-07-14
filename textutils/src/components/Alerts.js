import React from 'react';
import PropTypes from 'prop-types';

export default function Alerts(props) {
    const capitalize = (str) => {
        let s = str.toLowerCase();
        return s.charAt(0).toUpperCase() + s.substring(1);
    }

    return (
        <div style={{height:'50px'}}>
            {props.alert && (
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}: </strong>{props.alert.message}
            </div>)}
        </div>
    );
}

Alerts.propTypes = {
    alert: PropTypes.shape({
        type: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
    }),
};
