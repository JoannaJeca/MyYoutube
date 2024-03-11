import {createBrowserRouter} from "react-router-dom"
import HomeLayout from "../Common/HomeLayout"
import DetailedPageLayout from "../Common/DetailedPageLayout"
import DetailedPages from "../DetailedPage/DetailedPages"
export const MainRouter =createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout/>
    },
    {
        path:"/detailedpage",
        element:<DetailedPageLayout/>,
        children:([ 
            {
            index:true,
            element:<DetailedPages/>
            }
        ])
    }
])