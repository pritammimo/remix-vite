import { zodResolver } from "@hookform/resolvers/zod";
import { Form, redirect } from "@remix-run/react";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import * as zod from "zod"; 
import { useNavigate } from "@remix-run/react";
const schema = zod.object({
    name: zod.string().min(1),
    email: zod.string().email().min(1),
  });
  
  type FormData = zod.infer<typeof schema>;
export default function MyForm() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        getValues
      } = useForm<FormData>({
        mode: "onSubmit",
        resolver: zodResolver(schema),
      });
  const onSubmit = async(data: FormData) => {
    await Cookies.set('token', '12345678', { expires: 7, path: '/',sameSite:"Lax",secure:true })
    navigate('/dashboard')
    //await redirect('/dashboard')
  }
    return (
      <Form onSubmit={handleSubmit(onSubmit)} >
        <label>
          Name:
          <input type="text" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </label>
        <label>
          Email:
          <input type="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <button type="submit">Submit</button>
      </Form>
    );
  }