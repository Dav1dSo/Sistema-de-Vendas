import { Input as InputAntd, InputProps as InputAttributesAntd } from "antd";
import { BoxInputs } from "./inputs-login.styles";
import { LabelInput } from "./inputs-login.styles";

interface InputProps extends InputAttributesAntd {
    title?: string;
}

const InputLogin = ({ title }: InputProps) => {
    return (
        <BoxInputs>
            {title && <LabelInput>{title}</LabelInput>}
            <InputAntd />
        </BoxInputs>
    )
}

export default InputLogin;

