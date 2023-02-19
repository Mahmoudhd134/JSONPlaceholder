import {useNavigate, useParams} from "react-router-dom";
import {Quote, useEditQuoteMutation, useGetTodoQuery} from "../../features/Api/apiSlice";
import React, {useEffect, useState} from "react";
import {nanoid} from "@reduxjs/toolkit";

const Edit = () => {
    const {id} = useParams()
    const {data, isFetching, isError, error} = useGetTodoQuery(id!)
    const [edit, result] = useEditQuoteMutation()
    const [quote, setQuote] = useState<Quote>({quote: '', author: '', id: nanoid()})
    const navigator = useNavigate()

    useEffect(() => {
        if (data != undefined)
            setQuote(data)
    }, [data])

    const addNew = (e: React.FormEvent) => {
        e.preventDefault()
        edit(quote)
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget
        setQuote(p => ({...p, [name]: value}))
    }

    if (isFetching)
        return <h1>Loading...</h1>

    if (result.isSuccess)
        navigator('/quotes/' + quote.id)

    return (
        <form onSubmit={addNew}>
            {isError && <h1>{JSON.stringify(error)}</h1>}
            {result.isError && <h1>{JSON.stringify(result.error)}</h1>}
            {result.isLoading && <h1>Loading...</h1>}
            <div className={'row justify-content-center'}>
                <div className={'col-7'}>
                    <label htmlFor="quote" className={'col-form-label'}>Quote</label>
                    <input type="text" className={'form-control'} id={'quote'} value={quote.quote} name={'quote'}
                           onChange={changeHandler}/>
                </div>

                <div className={'col-7'}>
                    <label htmlFor="author" className={'col-form-label'}>Author</label>
                    <input type="text" className={'form-control'} id={'author'} value={quote.author}
                           name={'author'} onChange={changeHandler}/>
                </div>

                <button className={'col col-6 mt-4 btn btn-outline-primary'}>Save</button>
            </div>
        </form>
    );
};

export default Edit;