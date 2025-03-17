import AuthLayouts from "../Components/Layouts/AuthLayouts"
import FormLogin from "../Components/Fragments/FormLogin"

const Login = () => {
    return (
        <AuthLayouts title="Masuk ke akun" type="login">
            <FormLogin></FormLogin>
        </AuthLayouts>
    )
}

export default Login