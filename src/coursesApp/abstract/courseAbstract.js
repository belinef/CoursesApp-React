import React, {Component} from 'react';
import moment from 'moment';


export default class CourseAbstract extends Component {

    getPrettyDate(prop) {
        const {date} = this.props[prop];

        return moment(new Date(date)).format('DD-MMM-YY');
    }

    getPrettyCourseDuration(prop) {
        const {duration} = this.props[prop],
            hours = Math.floor(duration / 60),
            minutes = duration % 60;

        return duration ?
            `${hours || ''} ${hours ? 'hour' : ''}${hours > 1 ? 's' : ''} ${minutes || ''} ${minutes ? 'min.' : ''}`
            : 'not specified';
    }
}