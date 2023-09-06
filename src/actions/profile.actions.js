export const SET_USER_PROFILE = 'SET_USER_PROFILE';



export const sendLogin = data => dispatch=>{

    // dispatch()
    // instance.post
    //dispatch
}





//Pretty way of having actions for use by other files

export const setUserProfile = (data)=>(
    {
        type:SET_USER_PROFILE,
        payload:data
    }
)

