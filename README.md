
## User Login & Registration Using React Hooks

This application is built in React.js to illustrate user login and registration using React Hooks :)

### Brief Explanation on how this works

> Here we see the useState hook being used to store user input from the user. We proceed to connect the state to our two fields in the form using setEmail and setPassword within the handleEmailChange & handlePasswordChange functions to store what the user types in — e.target.value. Once we set the new state, our component gets re-rendered. The variables email and password now have the new values.


>We have set the form controls to read the value of our two state variables email and password. In React, this pattern of displaying the current form value as a state variable and setting the new one when a user types something, is called a Controlled Component.

>The autoFocus flag in our email field, sets focus to this field once the form loads.


> The formValidate function is linked to our form in order to check that the fields are not empty.

>Lastly, we trigger our callback handleSubmit when the form is submitted. For now we are simply suppressing the browser’s default behavior on submit but we’ll do more here later.
