// import React from 'react';
import s from './Notification.module.css';

const Notification = ({message}) => {
    return <p className={s.notification}>
        <i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp;
        {message}
    </p>
}

export default Notification;