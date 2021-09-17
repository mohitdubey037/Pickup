import ModuleContainer from 'app/components/ModuleContainer'
import React from 'react'
import PersonalProfile from './PersonalProfile'


export default function PersonalProfileContainer({path:string}){

    return (<PersonalProfile 
        imgSrc=""
        title="Personal Profile"
        FirstName= "John"
        LastName ="jeo"
        PhoneNumber= {9876543215}
        Role="Manager"
        emailid="johnjeo@gmail.com"
    
    />

    )
}
