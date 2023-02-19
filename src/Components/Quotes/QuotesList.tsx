import {useGetTodosQuery} from "../../features/Api/apiSlice";
import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";

const QuotesList = () => {
    const navigator = useNavigate()
    const {data, isLoading, isFetching, isSuccess, isError, error} = useGetTodosQuery()
    const loc = useLocation()

    if (isLoading || isFetching)
        return <h1>Loading...</h1>
    if (isError)
        return <h1>Error: {JSON.stringify(error)}</h1>

    return (
        <div className={'container'}>
            <button className={'btn btn-outline-primary'}
                    onClick={e => navigator('/quotes/add', {state: {prev: loc}})}>Add New
            </button>
            {data?.map((q, i) => <div className={'card my-3'} key={q.id}>
                <div className={'card-header text-center d-flex'}>
                    {i + 1}/{data.length}
                    <div className={'ms-auto'}><Link to={'/quotes/' + q.id}>more</Link></div>
                </div>
                <div className={'card-body text-center'}>
                    <div className={'card-text'}>{q.quote}</div>
                </div>
            </div>)}
        </div>
    )
};

export default QuotesList;