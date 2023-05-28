import Button from '../Elements/Button/Index'
import InputForm from '../Elements/Input/Index'
import React from 'react'

const FormLogin = () => {
  return (
    <form>
    <InputForm
      label="Email"
      type="email"
      placeholder="Example@gmail.com"
      name="email"
    />
    <InputForm
      label="Password"
      type="password"
      placeholder="********"
      name="password"
    />
    <Button classname="bg-blue-500 w-full">Login</Button>
  </form>
  )
}

export default FormLogin