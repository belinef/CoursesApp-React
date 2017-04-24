import {AbstractEditable} from '../abstract';
import {browserHistory} from 'react-router';
export default class CreateCourse extends AbstractEditable {
    componentWillMount() {
        const {id} = this.props.params;
        this.props.clearCurrentCourse(id);
        const {currentCourse} = this.props;
        this.setState({currentCourse});
    }

    get prettyCourseDuration() {
        return this.getPrettyCourseDuration('currentCourse');
    }

    saveCourse() {
        const {currentCourse} = this.state;
        currentCourse.authors = this.authors;
        this.props.createCourse(currentCourse).then(({id}) => {
            browserHistory.push(`/details/${id}`);
            this.props.clearAuthors();
        });
    }
}