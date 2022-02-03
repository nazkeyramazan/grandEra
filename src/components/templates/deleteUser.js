import React, {useContext} from 'react';
import { Context } from '../context';

function deleteUser({id}){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [context, setContext] = useContext(Context);

    function handleClick(){
        const usersDeleted = context.filter((row) => row.id !== id);
        setContext(usersDeleted);
    };
    return(
        <button onClick={()=>handleClick()}> X</button>
    );
}

export default deleteUser;