import CommentDto from "../../DTOs/Posts/CommentDto";

const Comment = (props: { comment: CommentDto }) => {
    const {comment} = props
    const defaultImg = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIcAhwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EAC4QAAICAQIFAwEIAwAAAAAAAAABAgMEBRESITFBURNhcZEiMjNCUoGh0SNisf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD62AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACLzdVVbdeNtKS6zfQirci+5t2Wze/bfkBaN15PSpqUoveMpJ+zO7F1W2lbXL1Y+W+aAngaMXKqyocVb+U+qN4AAAAAAAAAAAAAAIzWMt1xVFb2lJbya7Ikys51nq5lst/zbL4QHOAAAAA2UXzx7FZW9mv59iy410cimNkOj7eGVYltBsfFbVvy24kBMAAAAAAAAAAAAABVLk1dNPrxP/paytaioLNuVfTi/kDmAAAAACT0KLeRZLso7EYSuh2pTsp4ecvtcXwBMgAAAAAAAAAAAABA6xR6eVxrpYt/37k8c+bjQyqeCXKS5xl4YFZBlODhOUJLaUXs0YgAAAJzRKFCiVz6z6fBwaZhrKsk7Pw49du7LBGMYRUYpJLokB6AAAAAAAAAAAAAAACF1yjhsjfH8/KXyRZN67NLHrh3ct/oQgAAAT+ix4cLf9UmzvIzQ7d6J1N84vf8AZkmAAAAAAAAAAAAHkmoptvZLuzgv1aituNadrXjkvqBIGnJyasaHFbLbwu7Ie7Vr58q1Gte3NnDOUpycpycpPu2Bty8mWVc5y5LsvCNAAAAAbca+ePcrIdV1XlFixcqvJhxVv5i+qKwZQnKuSnXJxkujQFsBD42sNbRyIb/7R/okqMmm/wDCsjL27gbgAAAAAwtshTW7LHtFdWZkDq+V613pQf8Ajg/qwNWdnWZUtvu1p8o/2cgAAAAAAAAAAAAD1cnuuT8ngAkcPVLKmo3tzr890TcJRnFSi94tbpoqZJ6NlcFnoTf2Zfd9mBNgADXkT9Kiyz9MWyq778wAAAAAAAAAAAAAAAAABlCbhKM11i90eAC1VTVlcZrpJJgAD//Z'
    return (
        <section style={{backgroundColor: '#eee'}}>
            <div className="container py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 col-lg-10 col-xl-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-start align-items-center">
                                    <img className="rounded-circle shadow-1-strong me-3"
                                         src={defaultImg} alt="avatar"
                                         width="60"
                                         height="60"/>
                                    <div>
                                        <h6 className="fw-bold text-primary mb-1">{comment.name}</h6>
                                        <p className="text-muted small mb-0">
                                            {comment.email}
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-3 mb-4 pb-2">{comment.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comment;