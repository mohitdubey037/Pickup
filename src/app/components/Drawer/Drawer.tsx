import { ReactNode } from 'react'
import { useState } from 'react'
import { cross } from 'app/assets/Icons/index'
import { CustomDrawer, DrawerContent, DrawerFooter, DrawerTitleDiv } from './style'
import { Button } from '../Buttons'

interface DrawerProps{
    open:boolean;
    setDrawerOpen:Function
    closeIcon:boolean
    title:string
    children:ReactNode;
    actionButtons:boolean;
    cancelButtonText:string;
    actionButtonText:string;
}

export default function Drawer({open,setDrawerOpen,closeIcon,title,children,actionButtons,cancelButtonText,actionButtonText}:DrawerProps) {
    return (
        <div>
            <CustomDrawer open={open} anchor={'right'} onClose={()=>setDrawerOpen(false)}>
                <DrawerTitleDiv>
                    <h3 style={{margin:0}}>
                        {title}
                    </h3>
                    {closeIcon && <img style={{cursor:'pointer'}} onClick={()=>setDrawerOpen(false)} src={cross}/>}
                </DrawerTitleDiv>
                <DrawerContent>
                    {children}
                </DrawerContent>
                {actionButtons && (
                    <DrawerFooter>
                        <div>
                            <Button label={cancelButtonText} size='small'/>
                        </div>
                        <div>
                            <Button label={actionButtonText} size='small'/>
                        </div>
                    </DrawerFooter>
                )}
            </CustomDrawer>
        </div>
    )
}
