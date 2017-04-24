import {AbstractEditable} from '../abstract';
import { browserHistory } from 'react-router';

export default class EditCourse extends AbstractEditable {

    componentWillMount() {
        const {id} = this.props.params;
        this.props.fetchCourseById(id);
        const {currentCourse} = this.props;
        this.setState({currentCourse});
    }

    get prettyCourseDuration() {
        return this.getPrettyCourseDuration('currentCourse');
    }

    saveCourse() {
        const {currentCourse} = this.state;
        currentCourse.authors = this.authors;
        this.props.updateCourse(currentCourse).then(() => {
            browserHistory.push(`/details/${currentCourse.id}`);
            this.props.clearAuthors();
        });
    }
}