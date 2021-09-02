import Input from "./Input";
import PasswordInput from "./PasswordInput";

export default {title:'Input'};

export const byDefault = () => (
    <Input label={'Email'} placeholder={'Start typing'}/>
)

export const PassInput = () => (
    <PasswordInput label='Password' placeholder='Start typing' validate/>
)