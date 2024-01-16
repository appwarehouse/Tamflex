import React from "react";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required().label("Company Name"),
  email: Yup.string().required().email().label("Email"),
  fullName: Yup.string().required().label("Full Name"),
  password: Yup.string().required().min(8).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{
          companyName: "",
          email: "",
          fullName: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField icon="account" name="fullName" placeholder="Full Name" />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormField
          icon="domain"
          name="companyName"
          placeholder="Company Name"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

export default RegisterScreen;
