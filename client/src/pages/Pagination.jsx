import React from 'react';
import {usePlagination} from "../hooks/usePlagination";
import MyButtons from "../UI/buttons/MyButtons";


const Pagination = ({totalPage,page,changePage}) => {
    const pagesArray = usePlagination(totalPage)
    return (
         <div >
            {pagesArray.map(p =>
                <MyButtons onClick={() => changePage(p)} key={p}>{p}</MyButtons>
            )} </div>
    );
};

export default Pagination;