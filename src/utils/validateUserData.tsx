interface Props {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const validateUserData = ({ firstName, lastName, email, password }: Props) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const errors: Partial<Props> = {};

  if (firstName === "") {
    errors.firstName = "First Name cannot be empty";
  }
  if (lastName === "") {
    errors.lastName = "Last Name cannot be empty";
  }

  if (email === "") {
    errors.email = "Email cannot be empty";
  } else if (!emailPattern.test(email)) {
    errors.email = "Looks like this is not an email";
  }

  if (password === "") {
    errors.password = "password cannot be empty";
  }

  return errors;
};

export default validateUserData;
