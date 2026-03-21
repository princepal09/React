import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
  const [loading, setLoading] = useState(false)
  const submitOnHandler = async (data) => {
    try {
      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(data)
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstname: "",
        lastname: "",
        email: ""
      })
    }
  }, [reset, isSubmitSuccessful])


  return (
    <div className='min-h-screen p-30 w-full flex justify-center bg-[#313131] '>
      <form onSubmit={handleSubmit(submitOnHandler)} className='flex gap-10 flex-col'>

        <div className='flex gap-x-3 items-center'>
          <label className='text-white'>First Name</label>
          <input type="text" className='bg-white px-4 outline-none py-1'
            {...register("firstname", {
              required: { value: true, message: "Firstname is mandatory" },
              minLength: { value: 1, message: "Name should be greater than 1" },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only Letters are allowed"
              }
            })}
          />
          {errors.firstname &&
            <span>{errors.firstname.message}</span>
          }
        </div>

        <div className='flex gap-x-3 items-center'>
          <label className='text-white'>Last Name</label>
          <input type="text" className='bg-white px-4 outline-none py-1'
            {...register("lastname", {
              required: { value: true, message: "Last name is mandatory" },
              minLength: { value: 1, message: "Name should be greater than 1" },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only Letters are allowed"
              }

            })}

          />
          {errors.lastname &&
            <span>{errors.lastname.message}</span>
          }

        </div>

        <div className='flex gap-x-3 items-center'>
          <label className='text-white'>Email</label>
          <input type="email" className='bg-white px-4 outline-none py-1'
            {...register("email", {
              required: { value: true, message: "Email is mandatory" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },

            })}

          />
          {errors.email &&
            <span>{errors.email.message}</span>
          }

        </div>

        <button disabled={loading}
          className='bg-yellow-500 w-fit px-4 py-2 rounded-md cursor-pointer'>{loading ? 'Submitting....' : 'Submit'}</button>

      </form>
    </div>
  )
}

export default App
