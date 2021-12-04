import {useMemo} from "react";

export const usePlagination=(totalPages)=>{
    let pagesArray = []
    return useMemo(()=>{

        for (let i = 0; i < totalPages; i++) {
            pagesArray.push(i + 1)
        }
        return pagesArray
    },[totalPages])


}