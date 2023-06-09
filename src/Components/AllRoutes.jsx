import {Routes,Route} from "react-router-dom"
import {Home} from "../Pages/Home"
import {Registration} from "../Pages/Registration"
import { SignIn } from "../Pages/SignIn"
import { Courses } from "../Pages/Courses"
import { MyLearningPlan } from "../Pages/MyLearningPlan"
import { SingleCourse } from "../Pages/SingleCoursePage"
import PrivateRoute from "./PrivateRoutes"

  export const AllRoutes=()=>{
    return (
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
        <Route path='/courses' element={<PrivateRoute><Courses></Courses></PrivateRoute>}></Route>
        <Route path='/single_course' element={<PrivateRoute><SingleCourse></SingleCourse></PrivateRoute>}></Route>
        <Route path='/in_progess' element={<PrivateRoute><MyLearningPlan></MyLearningPlan></PrivateRoute>}></Route>
        {/* <Route path='/single_course' element={<SingleCourse></SingleCourse>}></Route> */}
      </Routes>
    )
    

  }