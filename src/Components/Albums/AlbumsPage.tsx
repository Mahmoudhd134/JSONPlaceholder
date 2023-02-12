import {useAppDispatch, useAppSelector} from "../../Hooks/ReduxHook";
import {useEffect} from "react";
import {fetchAlbums, increaseCurrentAlbumsShowedNumber} from "../../features/Albums/AlbumsSlice";
import Img from "./Img";

const AlbumsPage = () => {
    const albums = useAppSelector(s => s.albums.albums).slice(0, useAppSelector(s => s.albums.currentShowedNumber))
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAlbums())
    }, [])

    if (albums.length == 0)
        return <h1>Loading...</h1>
    return (
        <div className={'container'}>
            <div className={'d-flex row gap-3 justify-content-center'}>
                {albums.map(a => <Img key={a.id} album={a}/>)}
            </div>
            <div className={'row justify-content-center my-3'}>
                <button className={'btn btn-outline-primary w-50'}
                        onClick={e => dispatch(increaseCurrentAlbumsShowedNumber())}
                >See More
                </button>
            </div>
        </div>
    );
};

export default AlbumsPage;