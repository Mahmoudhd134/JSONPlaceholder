import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Hooks/ReduxHook";
import UserTodos from "./UserTodos";
import {fetchTodos} from "../../features/Users/UsersSlice";
import {useEffect} from "react";

const User = () => {
    const {id} = useParams()
    if (id == undefined || isNaN(+id))
        return <h1>Wrong Id</h1>

    const defaultImg = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIcAhwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EAC4QAAICAQIFAwEIAwAAAAAAAAABAgMEBRESITFBURNhcZEiMjNCUoGh0SNisf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD62AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACLzdVVbdeNtKS6zfQirci+5t2Wze/bfkBaN15PSpqUoveMpJ+zO7F1W2lbXL1Y+W+aAngaMXKqyocVb+U+qN4AAAAAAAAAAAAAAIzWMt1xVFb2lJbya7Ikys51nq5lst/zbL4QHOAAAAA2UXzx7FZW9mv59iy410cimNkOj7eGVYltBsfFbVvy24kBMAAAAAAAAAAAAABVLk1dNPrxP/paytaioLNuVfTi/kDmAAAAACT0KLeRZLso7EYSuh2pTsp4ecvtcXwBMgAAAAAAAAAAAABA6xR6eVxrpYt/37k8c+bjQyqeCXKS5xl4YFZBlODhOUJLaUXs0YgAAAJzRKFCiVz6z6fBwaZhrKsk7Pw49du7LBGMYRUYpJLokB6AAAAAAAAAAAAAAACF1yjhsjfH8/KXyRZN67NLHrh3ct/oQgAAAT+ix4cLf9UmzvIzQ7d6J1N84vf8AZkmAAAAAAAAAAAAHkmoptvZLuzgv1aituNadrXjkvqBIGnJyasaHFbLbwu7Ie7Vr58q1Gte3NnDOUpycpycpPu2Bty8mWVc5y5LsvCNAAAAAbca+ePcrIdV1XlFixcqvJhxVv5i+qKwZQnKuSnXJxkujQFsBD42sNbRyIb/7R/okqMmm/wDCsjL27gbgAAAAAwtshTW7LHtFdWZkDq+V613pQf8Ajg/qwNWdnWZUtvu1p8o/2cgAAAAAAAAAAAAD1cnuuT8ngAkcPVLKmo3tzr890TcJRnFSi94tbpoqZJ6NlcFnoTf2Zfd9mBNgADXkT9Kiyz9MWyq778wAAAAAAAAAAAAAAAAABlCbhKM11i90eAC1VTVlcZrpJJgAD//Z'
    const dispatch = useAppDispatch()
    const user = useAppSelector(s => s.users.find(u => u.id == +id!))


    useEffect(() => {
        if (user != undefined && user.todos == undefined)
            dispatch(fetchTodos(user.id))
    }, [user])

    if (user === undefined)
        return <h1>Wrong Id</h1>
    return (
        <>
            <div className={'container'} style={{fontWeight: 'bold'}}>
                <div className={'row justify-content-center'}>
                    <img src={defaultImg} alt="userImage" className={'w-25 rounded rounded-5 img-thumbnail'}/>
                </div>

                <div className={'row justify-content-center text-primary'}>@{user.username}</div>
                <div className={'row justify-content-center'}>{user.name}</div>

                <div className={'row justify-content-center mt-3'}><b className={'w-auto'}>Company</b></div>
                <div className={'row justify-content-center'}>{user.company.name}</div>
                <div className={'row justify-content-center'}>{user.company.catchPhrase}</div>
                <div className={'row justify-content-center'}>{user.company.bs}</div>

                <div className={'row justify-content-center mt-3'}><b className={'w-auto'}>Lives in</b></div>
                <div className={'row justify-content-center'}>
                    <div className={'d-flex justify-content-between w-50'}><span>city:</span> {user.address.city}</div>
                </div>
                <div className={'row justify-content-center'}>
                    <div className={'d-flex justify-content-between w-50'}><span>street:</span> {user.address.street}
                    </div>
                </div>
                <div className={'row justify-content-center'}>
                    <div className={'d-flex justify-content-between w-50'}><span>suite:</span> {user.address.suite}
                    </div>
                </div>
                <div className={'row justify-content-center'}>
                    <div className={'d-flex justify-content-between w-50'}><span>zip-code:</span> {user.address.zipcode}
                    </div>
                </div>
                <div className={'row justify-content-center'}>
                    <div className={'d-flex justify-content-between w-50'}><span>lat:</span> {user.address.geo.lat}
                    </div>
                </div>
                <div className={'row justify-content-center'}>
                    <div className={'d-flex justify-content-between w-50'}><span>lng:</span> {user.address.geo.lng}
                    </div>
                </div>

                <div className={'row justify-content-center mt-3'}><b className={'w-auto'}>Communication</b></div>
                <div className={'row justify-content-center'}>
                    <div className={'d-flex justify-content-between w-50'}><span>email:</span> {user.email}</div>
                </div>
                <div className={'row justify-content-center'}>
                    <div className={'d-flex justify-content-between w-50'}><span>phone:</span> {user.phone}</div>
                </div>
                <div className={'row justify-content-center'}>
                    <div className={'d-flex justify-content-between w-50'}><span>website</span>
                        <a target={'_blank'} href={'https://www.' + user.website}>click here</a>
                    </div>
                </div>
            </div>

            {user.todos ?
                <>
                    <div className={'container'}>
                        <UserTodos todos={user.todos}/>
                    </div>
                </> :
                <>
                    <h1>Loading...</h1>
                </>
            }

        </>
    );
};

export default User;