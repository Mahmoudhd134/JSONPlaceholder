import React, {useState} from 'react';
import {Quote, useAddQuoteMutation} from "../../features/Api/apiSlice";
import {nanoid} from "@reduxjs/toolkit";
import {useLocation, useNavigate} from "react-router-dom";

const AddNew = () => {
    const navigator = useNavigate()
    const [newQuote, setNewQuote] = useState<Quote>({quote: '', author: '', id: nanoid()})
    const [send, {isLoading, isSuccess, isError, error}] = useAddQuoteMutation()
    const loc = useLocation()
    const addNew = (e: React.FormEvent) => {
        e.preventDefault()
        send(newQuote)
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget
        setNewQuote(p => ({...p, [name]: value}))
    }

    if (isSuccess)
        navigator(loc?.state?.prev ?? '/')

    return (
        <form onSubmit={addNew}>
            {isLoading && <h1>Loading...</h1>}
            {isError && <h1>{JSON.stringify(error)}</h1>}
            <div className={'row justify-content-center'}>
                <div className={'col-7'}>
                    <label htmlFor="quote" className={'col-form-label'}>Quote</label>
                    <input type="text" className={'form-control'} id={'quote'} value={newQuote.quote} name={'quote'}
                           onChange={changeHandler}/>
                </div>

                <div className={'col-7'}>
                    <label htmlFor="author" className={'col-form-label'}>Author</label>
                    <input type="text" className={'form-control'} id={'author'} value={newQuote.author}
                           name={'author'} onChange={changeHandler}/>
                </div>

                <button className={'col col-6 mt-4 btn btn-outline-primary'}>Add</button>
            </div>
        </form>
    );
};

export default AddNew;