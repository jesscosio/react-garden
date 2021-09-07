import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostForm extends React.Component {
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }
    renderInput = ({input, label, meta}) =>{
        const className = `field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input autoComplete="off" {...input} />
                { this.renderError(meta) }
            </div>
        );
    }

    onSubmit = (formValues)=> {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Post Title" />
                <Field name="post_text" component={this.renderInput} label="Post Content" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title) {
        // user did not enter title
        errors.title = 'You must enter a title';
    }
    if(!formValues.description) {
        // user did not enter title
        errors.description = 'You must enter content';
    }

    return errors;
}

export default reduxForm({form:'postForm'})(PostForm);

