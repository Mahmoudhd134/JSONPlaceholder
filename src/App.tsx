import Counter from "./Components/Counter/Counter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostsPage from "./Components/Posts/PostsPage";
import AddPost from "./Components/Posts/AddPost";
import GlobalNavbar from "./Components/GlobalNavbar";
import Home from "./Components/Home";
import UsersPage from "./Components/Users/UsersPage";
import User from "./Components/Users/User";
import Post from "./Components/Posts/Post";
import AlbumsPage from "./Components/Albums/AlbumsPage";
import Album from "./Components/Albums/Album";
import QuotesList from "./Components/Quotes/QuotesList";
import AddNew from "./Components/Quotes/AddNew";
import Quote from "./Components/Quotes/Quote";
import Edit from "./Components/Quotes/Edit";

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
                        <Route path={':id'} element={<Post/>}/>
                        <Route path={'add'} element={<AddPost/>}/>
                    </Route>

                    <Route path={'/users'}>
                        <Route index element={<UsersPage/>}/>
                        <Route path={':id'} element={<User/>}/>
                    </Route>

                    <Route path={'/albums'}>
                        <Route index element={<AlbumsPage/>}/>
                        <Route path={':id'} element={<Album/>}/>
                    </Route>

                    <Route path={'/quotes'}>
                        <Route index element={<QuotesList/>}/>
                        <Route path={':id'} element={<Quote/>}/>
                        <Route path={'add'} element={<AddNew/>}/>
                        <Route path={'edit/:id'} element={<Edit/>}/>
                    </Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
