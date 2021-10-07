const validation = (user) => {
    
    let errors = {};

    if (!user.email) {
        errors.email = "Email is required";
    } 
    else if (!/\S+@\S+.\S+/.test(user.email)) {
        errors.email = "Invalid Email Address. Try again"
    }

    if (!user.password) {
        errors.password = "Password is required."
    } 
    else if (user.password.length < 6 ) {
        errors.password = "Password must be atleast 6 characters"
    }

    return errors;

}

export default validation;