import { ValidityType } from "./type";

export const ValidityConditions:ValidityType[] = [
    {regex:['(?=.*?[A-Z])'],label:'Uppercase alphabets',example:'ABC'},
    {regex:['(?=.*?[a-z])'],label:'Lowercase alphabets',example:'abc'},
    {regex:['(?=.*?[0-9])'],label:'Number',example:'123'},
    {regex:['(?=.*?[:;.#?!@`_,"~+(){}\\[\\]/<=>$%^&*-])'],label:'Special characters',example:'@#$%'},
    {regex:['.{8,}'],label:'Atleast 8 characters'}
]

