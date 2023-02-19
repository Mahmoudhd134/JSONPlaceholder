import {Link, useParams} from "react-router-dom";
import {useGetTodoQuery} from "../../features/Api/apiSlice";
import React from "react";

const Quote = () => {
    const {id} = useParams()
    const {data, isFetching, isError, error} = useGetTodoQuery(id!)


    if (data == undefined)
        return <h1>There are some thing wrong</h1>
    return (
        <div className={'container'}>
            <div className={'card my-3'}>
                {isFetching && <h1>Loading...</h1>}
                {isError && <h1>{JSON.stringify(error)}</h1>}
                <div className={'card-header text-center d-flex'}>
                    {data.id}
                    <div className={'ms-auto'}><Link to={'/quotes/edit/' + data.id}>edit</Link></div>
                </div>
                <div className={'card-body text-center'}>
                    <div className={'card-text'}>{data.quote}</div>
                    <div className={'card-text mt-3'}>By: {data.author}</div>
                </div>
            </div>
        </div>
    );
};

export default Quote;