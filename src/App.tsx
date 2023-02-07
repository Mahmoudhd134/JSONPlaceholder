import Counter from "./Components/Counter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostsPage from "./Components/Posts/PostsPage";
import AddPost from "./Components/Posts/AddPost";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/counter'} element={<Counter/>}/>
                    <Route path={'/posts'}>
                        <Route index element={<PostsPage/>}/>
                        <Route path={'add'} element={<AddPost/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
