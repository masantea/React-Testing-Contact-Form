import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";

import ContactForm from "./components/ContactForm";
import { act } from "react-dom/test-utils";

test("renders App without crashing", () => {
  render(<App />);
});

test('input with placeholder bill is in the dom', ()=> {
 const {getByPlaceholderText} =  render (<App/>) //arrange
 const lastNameInput = getByPlaceholderText('bill') //act

expect(lastNameInput).toBeTruthy()//assert
expect(lastNameInput).toBeInTheDocument();
})

test ('name input', ()=>{
  const {getByLabelText} = render (<ContactForm/>)
  const input = getByLabelText('First Name*');//testing for input

  expect (input).toBeInTheDocument()
})

test ('input unchange', async() =>{
  const mockTwo= jest.fn()

  const {getByLabelText} = render (<ContactForm/>)
  const input = await waitForElement(()=> getByLabelText('First Name*'));

  fireEvent.change(input, {target: {value: 'mercy'}})

  expect (input.value).toBe('mercy')//should fail
})

test ('submit button', ()=> {
  const {getByText} = render (<ContactForm/>)
  const submitButton = getByText(/submit/i)

  expect (submitButton).toBeInTheDocument();
  // act(()=> {
  //   fireEvent.click(submitButton);
  // })
 
})