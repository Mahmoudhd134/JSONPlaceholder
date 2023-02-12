import {Link, useLocation, useNavigate} from "react-router-dom";
import AlbumDto from "../../DTOs/Albums/AlbumDto";
import React, {useRef} from "react";
import {useAppSelector} from "../../Hooks/ReduxHook";

const Img = (props: { album: AlbumDto }) => {
    const users = useAppSelector(s => s.users)
    const div = useRef() as React.MutableRefObject<HTMLDivElement>
    const navigator = useNavigate()
    const loc = useLocation()
    const {album: a} = props
    return (
        <>
            <div key={a.id}
                 className={'col-3 border border-3 rounded rounded-3 d-flex justify-content-center align-items-center p-3 text-center flex-column position-relative'}
                 style={{minHeight: '100px'}}
                 onMouseEnter={e => div.current.style.display = 'flex'}
                 onMouseLeave={e => div.current.style.display = 'none'}
            >
                <div
                    className={`position-absolute w-100 h-75 top-0 bg-primary opacity-75 flex-column justify-content-center text-center text-white rounded rounded-3`}
                    style={{display: 'none', cursor: 'pointer'}}
                    ref={div}
                    onClick={e => navigator('/albums/' + a.id, {state: loc.state})}
                >
                    <b>See Details...</b>
                </div>
                <div className={'mb-2'}>{a.title}</div>
                <div
                    className={'mt-auto'}>by <b><Link
                    to={'/users/' + a.userId}>{users.find(u => u.id == a.userId)?.username ?? 'unknown'}</Link></b>
                </div>
            </div>
        </>
    )
};

export default Img;