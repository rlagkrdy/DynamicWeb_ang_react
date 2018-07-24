import * as React from 'react';

interface FormProps {
    fetchForm: (data: any) => void;
    options: any;
    id: string;
    name: string;
    placeholder: string;
    valid: boolean;
}
export const FormMaker = (Component: React.ComponentType) => {
    class Form extends React.Component<FormProps> {
        isTouched: boolean = false;

        handleChange = (e: React.FormEvent<any>) => {
            if (!this.isTouched) {
                this.isTouched = !this.isTouched;
            }
            const data = {
                key: e.currentTarget.id,
                value: e.currentTarget.value
            };
            this.props.fetchForm(data);
        };

        addClass = (valid: boolean): string => {
            let invalid: string = this.isTouched
                ? 'invalid touched'
                : 'invalid';
            return valid ? 'valid' : invalid;
        };

        state = {
            form: this.props,
            addClass: this.addClass,
            handleChange: this.handleChange
        };

        render() {
            return <Component {...this.state} {...this.props} />;
        }
    }
    return Form;
};

interface FormItemProps {
    id: string;
    name: string;
    placeholder: string;
    valid: boolean;
    addClass: (valid: boolean) => string;
    handleChange: (e: React.FormEvent<any>) => void;
}

export class FormInput extends React.Component<FormItemProps> {
    render() {
        return (
            <div>
                <label htmlFor={this.props.id} className="blind">
                    {this.props.name}
                </label>
                <input
                    type="text"
                    id={this.props.id}
                    name={this.props.id}
                    className={this.props.addClass(this.props.valid)}
                    placeholder={this.props.placeholder}
                    onChange={this.props.handleChange}
                />
            </div>
        );
    }
}

export class FormText extends React.Component<FormItemProps> {
    render() {
        return (
            <div>
                <label htmlFor={this.props.id} className="blind">
                    {this.props.name}
                </label>
                <textarea
                    id={this.props.id}
                    name={this.props.id}
                    className={this.props.addClass(this.props.valid)}
                    placeholder={this.props.placeholder}
                    onChange={this.props.handleChange}
                />
            </div>
        );
    }
}
