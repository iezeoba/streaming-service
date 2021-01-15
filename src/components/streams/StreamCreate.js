import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = (formProps) => {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : ""
    }`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input
          onChange={formProps.input.onChange}
          value={formProps.input.value}
          autoComplete="off"
        />
        {this.renderError(formProps.meta)}
      </div>
    );
  };
  //***short code using destructuring and the spread operator***//
  // renderInput = ({ input, label, meta }) => {
  //   const className = `field ${meta.error && meta.touched ? "error" : ""}`;
  //   return (
  //     <div className={className}>
  //       <label>{label}</label>
  //       <input {...input} autoComplete="off" />
  //       {this.renderError(meta)}
  //     </div>
  //   );
  // };

  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

export default reduxForm({ form: "streamCreate", validate })(StreamCreate);

//the prop 'component' passed to <Field /> is the element to be rendered//
//<Field /> on its own will not render any element to the screen. throws error//
//in the short code above, we destructured 'input' from 'formProps'//
//then we used the spread operator to assign a copy of 'formProps.input' as props//
//using the spread operator, we do not have to use a key/value pair to assign props//
//this.props.handleSubmit is a redux-form inbuilt function//
