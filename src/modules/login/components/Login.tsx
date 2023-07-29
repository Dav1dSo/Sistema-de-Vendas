import { BackGroundContainer, ContainerLogin, IconLogin } from "../styles/Login.styles";
import { LimitedContainer } from "../styles/Login.styles";
import  InputLogin from "../../../shared/inputs/inputs-login"
import ButtonSubmit from "../../../shared/Button/Button";

const LoginHome = () => {
    return (
        <div>
            {/* <BackGroundImage src="./public\background-login.jpg" /> */}
            <BackGroundContainer/>
            <ContainerLogin>
                <LimitedContainer>
                    <IconLogin src="./public\icon-login.png" />
                    <InputLogin title="User:"/>
                    <InputLogin title="Password:"/>
                    <ButtonSubmit title="Enviar"/>
                </LimitedContainer>
            </ContainerLogin>
        </div>
    )
}

export default LoginHome;