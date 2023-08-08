import Index from "./Pages/Index/Index"
import Courses from './Pages/Courses/Courses'
import CourseInfo from './Pages/CourseInfo/CourseInfo'
import Gallery from './Pages/Gallery/Gallery'
import Contac from './Pages/Contac/Contac'
import NotFind from './Pages/NotFind/NotFind'
const routes=[
   {path:'/' ,element:<Index/> },
   {path:'/music/*' ,element:<Courses/>,
   children:[
      {path:':name' ,element:<CourseInfo/>},
    ]
   },  
  
   {path:'/gallery' ,element:<Gallery/> },
   {path:'/contac' ,element:<Contac/> },
   {path:'/error' ,element:<NotFind/> },
   {path:'/*' ,element:<NotFind/> },
]
export default routes