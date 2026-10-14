import { useState } from 'react'
import type { ChangeEvent, SubmitEvent } from 'react'
import Button from '../components/ui/Button'
import { validateRegistration } from '../lib/validateRegistration'
import type { RegistrationValues } from '../lib/validateRegistration'

const initialValues: RegistrationValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
}

function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>(initialValues)
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [registered, setRegistered] = useState(false)

  // errors are computed on every render, not stored in state
  const errors = validateRegistration(values)
  const shown = submitAttempted ? errors : {}

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)
    if (Object.keys(errors).length === 0) {
      setRegistered(true)
    }
  }

  if (registered) {
    return (
      <section className="page">
        <p role="status">Thanks, {values.fullName.trim()}. You are registered.</p>
      </section>
    )
  }

  return (
    <section className="page">
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={values.fullName}
            onChange={handleChange}
            aria-invalid={shown.fullName ? true : undefined}
          />
          {shown.fullName && <p className="field-error">{shown.fullName}</p>}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={shown.email ? true : undefined}
          />
          {shown.email && <p className="field-error">{shown.email}</p>}
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            aria-invalid={shown.password ? true : undefined}
          />
          {shown.password && <p className="field-error">{shown.password}</p>}
        </div>

        <div className="field">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            aria-invalid={shown.confirmPassword ? true : undefined}
          />
          {shown.confirmPassword && <p className="field-error">{shown.confirmPassword}</p>}
        </div>

        <div className="field">
          <label className="check" htmlFor="acceptTerms">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
            />
            I accept the terms
          </label>
          {shown.acceptTerms && <p className="field-error">{shown.acceptTerms}</p>}
        </div>

        <Button type="submit">Create account</Button>
      </form>
    </section>
  )
}

export default RegisterPage