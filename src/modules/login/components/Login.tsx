import { BackGroundContainer, ContainerLogin, IconLogin } from "../styles/Login.styles";
import { LimitedContainer } from "../styles/Login.styles";
import  InputLogin from "../../../shared/inputs/inputs-login"

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
                </LimitedContainer>
            </ContainerLogin>
        </div>
    )
}

export default LoginHome;