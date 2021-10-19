import Input from "./Input";
import Button from "./Button";
import useForm from "../hooks/useForm";

const UserForm = ({submit}) => {
    const [form, handleChange, reset] = useForm({
        name: "",
        lastname: "",
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(form)
        reset()
    }
    
    return (
        <form onSubmit={handleSubmit}>
                        <Input
                            label="Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                        <Input
                            label="Last Name"
                            name="lastname"
                            value={form.lastname}
                            onChange={handleChange}
                        />
                        <Input
                            label="Email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        <Button>Enviar</Button>
                    </form>
    )
}

export default UserForm;