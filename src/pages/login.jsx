import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormLogin from '../components/Fragments/FormLogin'
import React from 'react'

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
        <FormLogin/>
    </AuthLayouts>
  )
}

export default LoginPage