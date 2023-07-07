import { FiPlus, FiX} from 'react-icons/fi'
import { Container } from './styles'
import { useState } from 'react'


export function TagItem({isNew, value, onClick,  ...rest}){

    const [newTag, setNewTag] = useState("fd")
    
 
    return(
        <Container isNew={isNew}>
    
        <input
        type='text'
        id='AddTag'
        readOnly={!isNew}
        placeholder={isNew ? "Adicionar" : newTag}
        {...rest}
        value={value}
        />

        {isNew ? "" : value}
        
        <button
            type='button'
            className={isNew ? 'button-add' : 'button-delete'}
            onClick={onClick}
        >
            {isNew ? <FiPlus/> : <FiX/> }
        </button>
        
        </Container>
    )
}