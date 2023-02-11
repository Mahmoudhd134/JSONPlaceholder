import Counter from "./Components/Counter/Counter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostsPage from "./Components/Posts/PostsPage";
import AddPost from "./Components/Posts/AddPost";
import GlobalNavbar from "./Components/GlobalNavbar";
import Home from "./Components/Home";
import UsersPage from "./Components/Users/UsersPage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <GlobalNavbar/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/counter'} element={<Counter/>}/>
                    <Route path={'/posts'}>
                        <Route index element={<PostsPage/>}/>
                        <Route path={'add'} element={<AddPost/>}/>
                    </Route>
                    <Route path={'/users'}>
                        <Route index element={<UsersPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
