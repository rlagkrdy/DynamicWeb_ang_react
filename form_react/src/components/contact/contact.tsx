import * as React from 'react';
import './Contact.scss';

export interface ContactState {
    name: string;
    phone: string;
    email: string;
    message: string;
}

export class Contact extends React.Component<{}, ContactState> {
    constructor(props?: {}) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            message: ''
        };
    }

    render() {
        return (
            <div>
                <section className="contact-section">
                    <div className="container flex-space">
                        <h2 className="sec-tit" id="contact_section">
                            CONTACT
                        </h2>
                        <div className="form-box">
                            <form action="" method="">
                                <div className="fieldset cfixed">
                                    <legend className="blind">
                                        CONTACT US
                                    </legend>
                                    <div className="form">
                                        <label htmlFor="name" className="blind">
                                            name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Name"
                                        />
                                        <label
                                            htmlFor="phone"
                                            className="blind"
                                        >
                                            phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="Phone"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="blind"
                                        >
                                            email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="textarea">
                                        <label
                                            htmlFor="message"
                                            className="blind"
                                        >
                                            message
                                        </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder="Message"
                                        />
                                    </div>
                                </div>
                                <div className="send-btn">
                                    <button>SEND MASSAGE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
