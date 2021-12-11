export const validateSignUp = (data) => {
  let errors = {
    email: false,
    mobile: false,
    password: false,
    confirmPassword: false,
    name: false,
  };
  if (data.name === "") {
    errors.name = "Name is required";
  }
  if (data.email === "") {
    errors.email = "Email is required";
  }
  //   else if ( !validateEmail( data.email ) ) {
  //     errors.email = "Email is invalid";
  //   }
  //   if (data.mobile === "") {
  //     errors.mobile = "Mobile is required";
  //   }
  //   else if (data.mobile.length < 10) {
  //     errors.mobile = "Mobile is invalid";
  //   }
  if (data.password === "") {
    errors.password = "Password is required";
  }
  if (data.confirmPassword === "") {
    errors.confirmPassword = "Confirm Password is required";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Password and Confirm Password must match";
  }

  return errors;
};
