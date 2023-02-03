import { MenuItem } from "@mui/material";

export const DEFAULT_FORM = {
  defaultValues: {
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  },
};

export const textInputsConfigArray = [
  {
    key: 0,
    name: "name",
    rules: {
      required: "*Full Name is Required",
      maxLength: {
        value: 40,
        message: "*Max length is 40 characters",
      },
      minLength: {
        value: 3,
        message: "*Min length is 3 characters",
      },
    },
    type: "text",
    label: "Full Name",
  },
  {
    key: 1,
    name: "email",
    rules: {
      required: "*Email is Required",
      maxLength: {
        value: 40,
        message: "*Max length is 40 characters",
      },
      pattern: {
        value: /^\S+@\S+$/gm,
        message: "*Has to be in email format (name@mail.com)",
      },
    },
    type: "text",
    label: "Email",
  },
  {
    key: 2,
    name: "password",
    rules: {
      required: "*Password is Required",
      maxLength: {
        value: 40,
        message: "*Max length is 40 characters",
      },
      pattern: {
        value:
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/gm,
        message:
          "*Has to include 8 character, 1 capitalized letter, 1 number and 1 special character.",
      },
    },
    type: "password",
    label: "Password",
  },
];

export const selectsConfigArray = (data) => [
  {
    key: 0,
    name: "occupation",
    label: "Occupation",
    optionsComponent: data?.occupations.map((el) => (
      <MenuItem key={el} value={el}>
        {el}
      </MenuItem>
    )),
  },
  {
    key: 1,
    name: "state",
    label: "State",
    optionsComponent: data?.states.map((el) => (
      <MenuItem key={el.name} value={el.name}>
        {el.name} - {el.abbreviation}
      </MenuItem>
    )),
  },
];
