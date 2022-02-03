import React from 'react';
import {useLocation} from 'react-router';
import {Link} from 'react-router-dom';

function Details() {
    const {state} = useLocation();

    return(
    <>
        <div>
          Details of user with ID: {state.id}
        </div>
        <button>
            <Link to={'/'}>
                Назад 
            </Link>
        </button>
    </>
    )
}

export default Details;
