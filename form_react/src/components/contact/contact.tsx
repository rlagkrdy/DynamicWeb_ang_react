import * as React from 'react';
import './Contact.scss';
import { connect } from 'react-redux';
import { fetchFromActionCreator } from '../../model/form';
import { FormMaker, FormInput, FormText } from './Form';

export interface FormValid {
    value: any;
    valid: boolean;
    required: boolean;
    pattern?: RegExp;
}

export interface ContactState {
    name: FormValid;
    phone: FormValid;
    email: FormValid;
    message: FormValid;
}
export interface ContactProps {
    fetchForm: any;
    formObj: any;
    formValid: boolean;
}
const FormInputComponent = FormMaker(FormInput);
const FormTextComponent = FormMaker(FormText);
class Contact extends React.Component<ContactProps> {
    state = {
        form: this.props.formObj,
        valid: this.props.formValid
    };

    fetchForm = (data: any) => {
        this.props.fetchForm(data);

        setTimeout(() => {
            this.setState({
                form: this.props.formObj,
                valid: this.props.formValid
            });
        }, 0);
    };

    submit = (e: React.FormEvent<any>) => {
        const valueArr = this.state.form.map(item => {
            const obj = {};
            obj[item.name] = item.value;
            return obj;
        });
        const obj: Object = Object.assign({}, ...valueArr);
        alert(JSON.stringify(obj));
        e.preventDefault();
    };

    render() {
        return (
            <div>
                <section className="contact-section">
                    <div className="container flex-space">
                        <h2 className="sec-tit" id="contact_section">
                            CONTACT
                        </h2>
                        <div className="form-box">
                            <form id="contactForm" onSubmit={this.submit}>
                                <div className="fieldset cfixed">
                                    <legend className="blind">
                                        CONTACT US
                                    </legend>
                                    <div className="form">
                                        {this.state.form.map(item => {
                                            if (item.id === 'message') {
                                                return false;
                                            }
                                            return (
                                                <FormInputComponent
                                                    fetchForm={this.fetchForm}
                                                    {...item}
                                                />
                                            );
                                        })}
                                    </div>
                                    <div className="textarea">
                                        <FormTextComponent
                                            fetchForm={this.fetchForm}
                                            {...this.state.form[3]}
                                        />
                                    </div>
                                </div>
                                <div className="send-btn">
                                    <button disabled={!this.state.valid}>
                                        SEND MASSAGE
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default connect(
    ({ formReducer }: any) => {
        return {
            formObj: formReducer.formObj,
            formValid: formReducer.formValid
        };
    },
    {
        fetchForm: fetchFromActionCreator
    }
)(Contact);
