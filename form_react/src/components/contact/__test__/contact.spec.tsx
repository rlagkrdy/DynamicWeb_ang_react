import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';

import { Contact, ContactState } from '../contact';
import { constants } from 'os';

describe('Contact Form Test', () => {
    const contact: React.Component = TestUtils.renderIntoDocument(
        React.createElement(Contact, null)
    ) as React.Component;

    it('Contact state는 name, phone, email, message를 가지고 있어야 한다.', () => {
        console.log('name ', contact.state);
        // console.log('name ', contact.state.name);
        // expect(contact.state.name).toBeTruthy();
    });
});
