import cl from "./form.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, setErrors, submitFormFailure, submitFormSuccess, updateField, submitForm } from '../../../features/formSlice';

export default function Form() {
const dispatch = useDispatch()
const {values, errors, status, isSubmitted, submitError} = useSelector((state) => state.form)

const handleChange = (e) => {
    const {name, value} = e.target
    dispatch(updateField({field: name, value}))
}

const validateEmail = (email) => {
    if(!email) return "Email обязательное поле"
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        return 'Invalid email format';
      }
}

const validatePhone = (phone) => {
    if(!phone) return "Phone обязательное поле"
    if (!/^(\+7|7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/.test(phone)) {
        return 'Invalid phone number';
      }
}

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(clearErrors())

    const formErrors = {}
    if(!values.name) formErrors.name = "Имя обязательное поле"

    const emailError = validateEmail(values.email)
    if(emailError) formErrors.email = emailError

    const phoneError = validatePhone(values.phone)
    if(phoneError) formErrors.phone = phoneError

    if(!values.message) formErrors.message = "Сообщение обязательное поле"

    if(Object.keys(formErrors).length > 0){
        dispatch(setErrors(formErrors))
        return
    }

    dispatch(submitForm(values))

    setTimeout(() => {
        const success = Math.random() > 0.3
        if(success){
            dispatch(submitFormSuccess())
        } else{
            dispatch(submitFormFailure("Ошибка при отправке"))
        }
    }, 1000)
}

    return (
        <>
            <section className={cl.form} onSubmit = {handleSubmit} >
                <form className={cl.form__container}>
                    <input
                        className={cl.form__name}
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Name"
                        name = "name"
                    />
                    {errors.name && <p style = {{color: "red"}}>{errors.name}</p>}
                    <input
                        className={cl.form__name}
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Email"
                        name = "email"
                    />
                    {errors.email && <p style = {{color: "red"}}>{errors.email}</p>}
                    <input
                        className={cl.form__name}
                        value={values.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        name = "phone"
                    />
                    {errors.phone && <p style = {{color: "red"}}>{errors.phone}</p>}
                    <textarea
                        className={cl.form__name}
                        value={values.message}
                        onChange={handleChange}
                        placeholder="Message"
                        name = "message"
                    />
                    {errors.message && <p style = {{color: "red"}}>{errors.message}</p>}
                    <button type = "submit" disabled = {status === "loading"} className={cl.btn__name}>
                        {status === "loading" ? "sending..." : "submit"}
                    </button>

                    {isSubmitted && <p style = {{color: "green"}}>form success</p>}
                    {submitError && <p style = {{color: "red"}}>{submitError }</p>}
                    
                </form>
            </section>
        </>
    );
}