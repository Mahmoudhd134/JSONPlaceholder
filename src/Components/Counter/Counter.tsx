import {useAppDispatch, useAppSelector} from '../../Hooks/ReduxHook'
import {increment, decrement, incrementBy} from '../../features/Counter/counterSlice'
import {useState} from "react";

const Counter = () => {
    const count = useAppSelector(state => state.counter.count)
    const [inc, setInc] = useState(0)
    const dispatch = useAppDispatch()
    return (
        <div className={'container d-flex justify-content-center'}>
            <div className={'w-50'}>
                <h1 className={'text-center'}>{count}</h1>

                <div className={'row justify-content-around my-2'}>
                    <button className={'col-3 btn btn-outline-primary'} onClick={() => dispatch(increment())}>+</button>
                    <button className={'col-3 btn btn-outline-primary'} onClick={() => dispatch(decrement())}>-</button>
                </div>

                <form onSubmit={e => e.preventDefault()}>
                    <div className={'row'}>
                        <div className={'input-group'}>
                            <span className={'input-group-text'}>number</span>
                            <input type="number" className={'form-control'}
                                   onChange={e => setInc(+e.currentTarget.value || 0)}/>
                        </div>
                    </div>

                    <div className={'row justify-content-center my-2'}>
                        <button className={'col-5 btn btn-outline-primary'}
                                type={"submit"}
                                onClick={e => dispatch(incrementBy(inc))}>
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Counter;