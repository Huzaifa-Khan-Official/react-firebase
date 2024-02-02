import React from 'react'
import AppForm from '../Components/Form'

export default function Login() {
  const getData = (values) => {
    console.log(values);
  }
  return (
    <div>
      <AppForm data={getData}/>
    </div>
  )
}
