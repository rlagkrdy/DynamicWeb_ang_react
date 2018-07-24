import { handleActions } from 'redux-actions';

const FETCH_FORM = 'form/FETCH_FORM';

const fetchFromActionCreator = (data: any) => {
    return {
        type: FETCH_FORM,
        data
    };
};

const reducer = handleActions(
    {
        [FETCH_FORM]: (state: any, action: any) => {
            const form = action.data,
                currentTarget = state.formObj.filter(
                    item => item.id === form.key
                )[0];

            currentTarget.value = form.value;

            if (currentTarget.required) {
                currentTarget.valid = currentTarget.value.trim() !== '';
            }
            if (currentTarget.pattern) {
                currentTarget.valid = currentTarget.pattern.test(
                    currentTarget.value
                );
            }

            state.formValid = state.formObj.every(item => item.valid === true);

            return { ...state };
        }
    },
    {
        formObj: [
            {
                id: 'name',
                name: 'Name',
                placeholder: 'Name(한글만 가능)',
                value: '',
                valid: false,
                required: true,
                pattern: /^[가-힣]{2,3}$/
            },
            {
                id: 'phone',
                name: 'Phone',
                placeholder: 'Phone(Ex: 01000000000)',
                value: '',
                valid: false,
                required: true,
                pattern: /[0-9]{10,11}/
            },
            {
                id: 'email',
                name: 'Email',
                placeholder: 'Email Address(Ex: xxx@xx.xx)',
                value: '',
                valid: false,
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            },
            {
                id: 'message',
                name: 'Message',
                placeholder: 'Message',
                value: '',
                valid: false,
                required: true
            }
        ],
        formValid: false
    }
);
export { fetchFromActionCreator, reducer };
