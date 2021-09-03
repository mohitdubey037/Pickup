import React from 'react'
import { ModuleContainerWrapper } from './style'

function ModuleContainer(props) {
    return (
        <ModuleContainerWrapper>
            {props.children}
        </ModuleContainerWrapper>
    )
}

export default ModuleContainer
