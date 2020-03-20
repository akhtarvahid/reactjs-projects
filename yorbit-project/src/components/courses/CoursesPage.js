import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class CoursesPage extends React.Component {
  state = {
    redirectToAddCoursePage: false,
    filtered:[],
    errors:{}
  };

  componentDidMount() {
    const { courses, authors, actions } = this.props;

    if (courses.length === 0) {
      actions.loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }

  handleDeleteCourse = async course => {
    toast.success("Course deleted");
    try {
      await this.props.actions.deleteCourse(course);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };
  filterList=(event)=> {
    const { errors } = this.state;
    let filteredCourses = this.props.courses.filter(function({title}){
      return title.toLowerCase().indexOf(
        event.target.value.toLowerCase()) !== -1;
    });
    if(filteredCourses.length<1)
     errors.notFound = 'Match not found...'
    else
     errors.notFound = undefined; 

    this.setState({filtered: filteredCourses, errors})
  }
  

  render() {
    const { filtered, errors } = this.state; 
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h2>Courses</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-success add-course"
              onClick={() => this.setState({ redirectToAddCoursePage: true })}
            >
              Add Course
            </button>
            <div className="filter-list">
              <form>
              <fieldset className="form-group">
              <input type="text" className={errors.notFound===undefined?'form-control':'form-control is-invalid'}
               placeholder="Filter your choice" 
               onChange={this.filterList}/>
              </fieldset>
              </form>
            </div>
            <CourseList
              onDeleteClick={this.handleDeleteCourse}
              courses={filtered.length>0?filtered:this.props.courses}
            />
          </>
        )}
      </>
    );
  }
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  function compare(a,b){
    const title1 = a.title.toUpperCase();
    const title2 = b.title.toUpperCase();
  
    if(title1>title2)
    return 1;
    else if(title1<title2)
    return -1;
  
    return 0;
  }
  let courses = state.authors.length === 0
        ? []
        : state.courses.map(course => {
            return {
              ...course,
              authorName: state.authors.find(a => a.id === course.authorId).name
            };
          })
  courses.sort(compare)      

  return {
    courses,
    authors: state.authors,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
