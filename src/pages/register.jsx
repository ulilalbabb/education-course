import AuthLayouts from "../Components/Layouts/AuthLayouts"
import FormRegister from "../Components/Fragments/FormRegister"

const Register = () => {
    return (
        <AuthLayouts title="Daftar akun" type="register">
           <FormRegister></FormRegister> 
        </AuthLayouts>
    )
}

export default Register