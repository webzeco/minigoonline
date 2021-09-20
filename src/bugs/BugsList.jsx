import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBug, getUnresolvedBugs, loadBugs, resolveBug } from '../store/bugs';

export default function BugsList() {
const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const bugs = useSelector(getUnresolvedBugs);
    useEffect(() => {
        dispatch(loadBugs());
    }, []);
    const changeHandler = (e) => {
        setDescription(e.target.value);
    }
    return (
        <div>
            <h1 className='lean'>add Bug</h1>
            <div className='' >
                <label htmlFor="name" className='label'>description</label>
                <input type="text" className='form-control w-25' onChange={changeHandler} />
            </div>
            <button onClick={() => dispatch(addBug({description}))} className='btn-primary'>  AddBug</button>
            <ul>
                {bugs.map(bug => <div className='d-flex mx-3' key={bug.id}>
                    <li className='list-item  '>{bug.description}</li>
                    <button onClick={() => dispatch(resolveBug(bug.id))} className='btn-primary'> Resolve</button>
                </div>
                )}

            </ul>
        </div>
    )
}
