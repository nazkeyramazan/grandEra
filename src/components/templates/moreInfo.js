import React from 'react';
import {Link} from 'react-router-dom';

function moreInfo({id}){
    const state = {id};
    return(
        <div>
            <Link to={`/details/${id}`}  state={state}>
                Подробнее 
            </Link>
        </div>
    );
}

export default moreInfo;