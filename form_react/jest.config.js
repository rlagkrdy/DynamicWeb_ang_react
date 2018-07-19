module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    // tsx에 css파일이 import 되어 있으면 error가 발생해서 추가해줘야함
    // npm install --save-dev identity-obj-proxy
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'identity-obj-proxy'
    }
};
