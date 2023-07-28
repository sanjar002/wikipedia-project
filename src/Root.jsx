import { Route, Routes } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Lesson from './pages/lesson/Lesson'

const Root = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path="lesson/:lessonId" element={<Lesson/>  } />
            </Route>
        </Routes>
    </div>
  )
}

export default Root
