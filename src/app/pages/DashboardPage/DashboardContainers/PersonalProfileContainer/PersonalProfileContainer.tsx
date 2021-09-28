import ModuleContainer from 'app/components/ModuleContainer'
import React from 'react'
import PersonalProfile from './PersonalProfile'


export default function PersonalProfileContainer({path:string}){

    return (<PersonalProfile 
       
        profile={{
            avatar:'string',
             firstName:"John",
            lastName :"jeo",
            phoneNumber: '9876543215',
            role:"Manager",
            email:"johnjeo@gmail.com"
        }}
    
    />

    )
}
