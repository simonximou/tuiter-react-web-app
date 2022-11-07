import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import React, { useState } from 'react';
import { updateUser } from '../reducers/profile-reducer';
import "./index.css"

const EditProfile = () => {
    const profile = useSelector((state) => state.profile);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({ ...profile, name: profile.firstName + ' ' + profile.lastName });
    const [editB, setEditB] = useState(false);
    let b = new Date(form.dateOfBirth);
    const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const update = () => {
        dispatch(updateUser({
            firstName: form.name.split(' ')[0] || '',
            lastName: form.name.split(' ')[1] || '',
            bio: form.bio,
            website: form.website,
            location: form.location,
            dateOfBirth: form.dateOfBirth,
        }));
        navigate('/tuiter/profile');
    };

    function time(n) {
        return n >= 10 ? n : '0' + n;
    }

    return (
        <form onSubmit={e => {
            e.preventDefault();
            update();
        }}>
            <div className={'p-3 d-flex align-items-center'}>
                <i className={'bi bi-x-lg me-5 cursor-pointer'} onClick={() => navigate('/tuiter/profile')}></i>
                <div>
                    <h4 className={'m-0'}>Edit Profile</h4>
                </div>
                <div className={'wd-flex'}/>
                <button type={'submit'} className={'btn btn-dark button-round'} onClick={ () => update()}>Save</button>
            </div>
            <div>
                <img className="w-100 position-relative" height="300" src={`${profile.bannerPicture}`} alt=""/>
                <img className="wd-profile-edit rounded-circle position-relative " height="150" width="150" src={`${profile.profilePicture}`} alt=""/>
            </div>
            <div className='mb-5'>
                <div className='wd-forms'>
                    <label className='text-secondary'>Name</label>
                    <input onChange={e => setForm({ ...form, name: e.target.value })} required value={form.name}/>
                </div>
                <div className='wd-forms'>
                    <label className='text-secondary'>Bio</label>
                    <textarea onChange={e => setForm({ ...form, bio: e.target.value })} required value={form.bio}></textarea>
                </div>
                <div className='wd-forms'>
                    <label className='text-secondary'>Location</label>
                    <input onChange={e => setForm({ ...form, location: e.target.value })} required value={form.location}/>
                </div>
                <div className='wd-forms'>
                    <label className='text-secondary'>Website</label>
                    <input onChange={e => setForm({ ...form, website: e.target.value })} required value={form.website}/>
                </div>
                {
                    editB ? <div className='wd-forms'>
                        <label className='text-secondary'>Birth Date</label>
                        <input onChange={e => setForm({ ...form, dateOfBirth: e.target.value })} required type={'date'}
                               value={`${b.getFullYear()}-${time(b.getMonth() + 1)}-${time(b.getDate())}`}/>
                    </div> : <div>
                        <div>
                            <span className='text-secondary'>Birth date</span>
                            <span className='ms-2'>&middot;</span>
                            <button onClick={() => setEditB(true)} type={'button'} className='btn btn-link'>Edit</button>
                        </div>
                        <div>{month_names[b.getMonth()]} {b.getDate()}, {b.getFullYear()}</div>
                    </div>
                }

            </div>
        </form>
    );
};

export default EditProfile;