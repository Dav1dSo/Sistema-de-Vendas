import ContainerButton from "./Button.styles"
import { Button as BtnAntd} from "antd"

interface ButtonSubmit {
    title?: string,
}

const Button = ({ title }: ButtonSubmit) => {
    return (
        <ContainerButton>
            { title && <BtnAntd>{title}</BtnAntd> } 
        </ContainerButton>
    )
}

export default Button;

