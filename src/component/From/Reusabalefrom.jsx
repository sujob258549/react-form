
import './input.css'
import { Acontext } from '../../App';
import { useContext } from 'react';

const Reusabalefrom = ({ fromtitle, handelsubmit, inputbutton = "submit" }) => {
    const handelUpdatdata = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handelsubmit(data);
    }
    // contex resive
    
    const context = useContext(Acontext)


    return (
        <div>

            <div className="mb-10 p-10 border-2 w-[40%] h-[40%] mx-auto">
                <p className='text-2xl font-bold'>{context}</p>
                <h2 className="text-3xl font-bold pb-4">{fromtitle}</h2>

                <form className="flex flex-col gap-2" onChange={handelUpdatdata}>

                    <input type="text" name='name' className="input-bordered border-2 border-black" /><br />
                    <input type="email" name='email' className="input-bordered border-2 border-black" /><br />
                    <input type="password" name='password' className="input-bordered border-2 border-black" /><br />
                    <input type="submit" value={inputbutton} className="border-2 border-black" />

                </form>
            </div>
        </div>
    );
};

export default Reusabalefrom;