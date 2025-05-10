import React from 'react'
import './Form.css'
import { useForm } from 'react-hook-form'

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors , isSubmitting },
    } = useForm()

    async function dataHandle(data){
        await new Promise((res,rej)=>setTimeout(res,2000))
        console.log(data);
    }
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(dataHandle)}>
                <div>
                    <label htmlFor="">First Name:</label>
                    <input type="text" {...register("firstName", {required:true,maxLength:{value:7,message:"Max Length is 7"},minLength:{value:3,message:"Min length is 3"}})}/>
                    <br />
                    <span className={(errors.firstName?"error":"")}>{(errors.firstName)? errors.firstName.message : "" }</span>
                </div>

                <div>
                    <label htmlFor="">Last Name:</label>
                    <input type="text" {...register("secondName", {required:true,maxLength:{value:7,message:"Max Length is 7"},minLength:{value:3,message:"Min length is 3"}})}/>
                
                <br />
                    <span className={(errors.secondName?"error":"")}>{(errors.secondName)? errors.secondName.message : "" }</span>
                </div>
                <input type="Submit" disabled={isSubmitting} value={isSubmitting?"Processing....":"Submit"}/>
            </form>
        </div>
    )
}

export default Form
