import React from 'react'
import { arrowUp, arrowUpWhite } from 'app/assets/Icons';
import { CardProps } from "./helper";
import { CardDiv, CardNumber, CardTitle, CardFooter } from "./style";


const Card: React.FC<CardProps> = ({ title, numberValue, label, onClick, type}) => {
    return (
            <CardDiv style={{background: type === 'secondary' ? '#F99746' : '#f7f7f7'}}>
                <CardTitle style={{color: type === 'secondary' ? '#fff' : '#000'}}>
                    {title}
                </CardTitle>
                <CardNumber style={{color: type === 'secondary' ? '#fff' : '#F99746'}}>
                    {numberValue}
                </CardNumber>
                <CardFooter>
                    <div style={{color: type === 'secondary' ? '#fff' : '#000'}}>
                        <img src={arrowUp} style={{marginRight: '5px'}}/>
                        {label}
                    </div>
                    <p onClick={onClick} style={{color:type === 'secondary' ? '#fff' : '#2D9CDB', cursor:'pointer', textDecoration:'underline'}}>View All</p>
                </CardFooter>
            </CardDiv>
        )
}

export default Card