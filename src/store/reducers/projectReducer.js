const initState = {
    projects: [
        { id: '1', title: 'Help me find Peach', content: 'ksdlfj slkd fslk dfl sdkjf slkdfj kdfjls dfjl s' },
        { id: '2', title: 'Collect all the stars', content: 'jlsdkfj sldkjfk djfkdjf ljjfj fl sdlkfj dk ' },
        { id: '3', title: 'Egg hunt with Yoshi', content: 'fllskdjf sldkjfs dkfjd kdjf sldkjdk kjflsdk' }
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Created Project:', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;