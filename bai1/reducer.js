const initState = {
    dem: 0
}

const demReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TANG':
            return { ...state, dem: state.dem + 1 };
        case 'GIAM':
            return { ...state, dem: state.dem - 1 };
        case 'BINH PHUONG':
            return { ...state, dem: state.dem * state.dem };
        case 'RESET':
            return initState;
        default:
            return state; // mac dinh khong co thay doi
    }
}
export default demReducer;