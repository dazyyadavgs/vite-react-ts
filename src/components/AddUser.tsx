import {z} from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from './ui/form'
import { Button } from './ui/button'
import type { Control,FieldPath} from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema=z.object({
  name:z.string().min(1).max(50),
  email:z.string().email(),
  dob:z.string().date()
})

const AddUser = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
      dob:"2002-04-03"
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <AddUserFormfield
            name="name"
            label="Name"
            placeholder="Daisy"
            inputType="text"
            formControl={form.control}

          />
          <AddUserFormfield
              name="email"
              label="email"
              placeholder="abc@gmail.com"
              inputType="email"
              formControl={form.control}

          />
          <AddUserFormfield
            name="dob"
            label="D.O.B"
            placeholder="YYYY-MM-DD"
            inputType="date"
            formControl={form.control}

          />


          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </>
  )
}

interface AddUserFormfieldProps {
  name:  FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  inputType?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formControl:Control<z.infer<typeof formSchema>, any>;
}

const AddUserFormfield: React.FC<AddUserFormfieldProps> = ({ name, label, placeholder, inputType, formControl }) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={inputType || "text"}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default AddUser
