const counterReducers = (initialState='',action) => {
    switch (action.type) {
        case 'TEST':
            console.log('hello')
            return {
                test:'test'
            };
        default:
            return initialState;
    }
}

export default counterReducers;
