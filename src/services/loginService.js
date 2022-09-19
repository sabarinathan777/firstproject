const ListService = {

    loginUsers(dispatch,input) {
        dispatch({
            type: 'success',
            payload: input
        })
    },

    logoutUsers(dispatch) {
        dispatch({
            type: 'logout',
            payload: ''
        })
    }

}
export default ListService;