import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../Hooks/ReduxHook";
import {fetchAlbumsById, fetchPhotos} from "../../features/Albums/AlbumsSlice";

const Album = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
    const [showAll, setShowAll] = useState(false)
    const show = selectedPhoto != null
    if (id == undefined)
        return <h1>Wrong Id</h1>
    const album = useAppSelector(s => s.albums.albums).find(a => a.id == +id)
    const user = useAppSelector(s => s.users).find(u => u.id == album?.userId)

    useEffect(() => {
        if (album == undefined)
            dispatch(fetchAlbumsById(+id))

        if (album != undefined && album.photos == undefined)
            dispatch(fetchPhotos(album.id))
    }, [album])

    if (album == undefined)
        return <h1>Loading...</h1>
    return (
        <div className={'container'} style={{fontWeight: 'bold'}}>
            <div className={'row justify-content-center'}>{album.title}</div>
            {user == undefined ? <span>By: unknown</span> :
                <div className={'row justify-content-center'}><b className={'d-inline text-center'}>By: <Link
                    to={'/users/' + album.userId}>{user.username}</Link></b></div>}

            {show && <div style={{width: '40%'}}
                          className={'position-fixed end-0 text-center d-flex flex-column justify-content-center'}>
                <img src={selectedPhoto ?? ''} alt="selectedPhoto" className={'img-thumbnail'}/>
            </div>}
            {album.photos == undefined ? <h1>Loading...</h1> :
                <div className={'container'} style={show ? {width: '60%', marginRight: '60%'} : {}}>
                    <div className={'row justify-content-center gap-3'}>
                        {album.photos.slice(0, showAll ? -1 : 10).map(p => <div key={p.id} className={'col-3'}>
                            <img src={p.thumbnailUrl} alt="img" className={'img-thumbnail'}
                                 onClick={e => setSelectedPhoto(p.thumbnailUrl)}/>
                        </div>)}
                        {!showAll && <button className={'btn btn-outline-primary'} onClick={e => setShowAll(true)}>See
                            All</button>}
                    </div>
                </div>}
        </div>
    );
};

export default Album;