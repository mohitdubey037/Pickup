 
import PersonalProfile from './PersonalProfile'


export default function PersonalProfileContainer({path:string}){

    return (<PersonalProfile 
       
        profile={{
            avatar:'https://i.pravatar.cc/300',
             firstName:"John",
            lastName :"jeo",
            phoneNumber: '9876543215',
            role:"Manager",
            email:"johnjeo@gmail.com"
        }}
    
    />

    )
}
