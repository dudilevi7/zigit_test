export const validateEmail = email => {
    let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegEx.test(email)) 
        return false;
    else    
        return true;
};

export const validatePassword = password => {
    return true;
}