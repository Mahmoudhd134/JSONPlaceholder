import { useAppSelector} from "../../Hooks/ReduxHook";
import {Link} from "react-router-dom";

const UsersPage = () => {
    const users = useAppSelector(s => s.users)

    const defaultImg = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIcAhwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EAC4QAAICAQIFAwEIAwAAAAAAAAABAgMEBRESITFBURNhcZEiMjNCUoGh0SNisf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD62AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACLzdVVbdeNtKS6zfQirci+5t2Wze/bfkBaN15PSpqUoveMpJ+zO7F1W2lbXL1Y+W+aAngaMXKqyocVb+U+qN4AAAAAAAAAAAAAAIzWMt1xVFb2lJbya7Ikys51nq5lst/zbL4QHOAAAAA2UXzx7FZW9mv59iy410cimNkOj7eGVYltBsfFbVvy24kBMAAAAAAAAAAAAABVLk1dNPrxP/paytaioLNuVfTi/kDmAAAAACT0KLeRZLso7EYSuh2pTsp4ecvtcXwBMgAAAAAAAAAAAABA6xR6eVxrpYt/37k8c+bjQyqeCXKS5xl4YFZBlODhOUJLaUXs0YgAAAJzRKFCiVz6z6fBwaZhrKsk7Pw49du7LBGMYRUYpJLokB6AAAAAAAAAAAAAAACF1yjhsjfH8/KXyRZN67NLHrh3ct/oQgAAAT+ix4cLf9UmzvIzQ7d6J1N84vf8AZkmAAAAAAAAAAAAHkmoptvZLuzgv1aituNadrXjkvqBIGnJyasaHFbLbwu7Ie7Vr58q1Gte3NnDOUpycpycpPu2Bty8mWVc5y5LsvCNAAAAAbca+ePcrIdV1XlFixcqvJhxVv5i+qKwZQnKuSnXJxkujQFsBD42sNbRyIb/7R/okqMmm/wDCsjL27gbgAAAAAwtshTW7LHtFdWZkDq+V613pQf8Ajg/qwNWdnWZUtvu1p8o/2cgAAAAAAAAAAAAD1cnuuT8ngAkcPVLKmo3tzr890TcJRnFSi94tbpoqZJ6NlcFnoTf2Zfd9mBNgADXkT9Kiyz9MWyq778wAAAAAAAAAAAAAAAAABlCbhKM11i90eAC1VTVlcZrpJJgAD//Z'

    const content: JSX.Element[] = users.map(u => <div key={u.id}
                                                       className={'container d-flex gap-2 border border-3 rounded rounded-3 p-3'}>
        <div style={{width: '30%'}} className={'ps-0'}>
            <img src={defaultImg} alt="UserImage" className={'img-thumbnail w-100 h-100'}/>
        </div>

        <div style={{width: '70%'}} className={'d-flex flex-column justify-content-center align-items-center'}>
            <h3>{u.username}</h3>
            <h5>{u.company.name}</h5>
            <p>{u.address.city}</p>
            <Link to={'/users/' + u.id} className={'mt-auto'}>more...</Link>
        </div>
    </div>)

    return (
        <div className={'container d-flex flex-column gap-3'}>
            {content}
        </div>
    );
};

export default UsersPage;