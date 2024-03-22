import { useRef } from "react";


const UseRafe = () => {
    const nameref = useRef();
    const handelbuttononsubmit = (e) => {
        e.preventDefault();
        console.log(nameref.current.value)
    }
    return (
        <div>
            <div className="w-[40%] mx-auto border-2 rounded-xl p-10 mt-10 bg-[#c593932d]">
                <h3 className='text-3xl text-center font-bold mb-6'>Userafe from</h3>
                <form onSubmit={handelbuttononsubmit} >


                    <label className="input input-bordered flex items-center gap-2 mt-4">

                        <input type="text" ref={nameref} name="name" className="grow" placeholder="Your name" required />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        <input type="text" name="email" className="grow" placeholder="Email" />
                    </label>
                    <label className="input  input-bordered flex items-center gap-2 mt-4">

                        <input type="number" name="number" placeholder="number" className="grow" required />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-4">

                        <input type="password" name="password" placeholder="password" className="grow" required />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        <input type="submit" className="grow" value="Search" />

                    </label>
                </form>

            </div>
        </div>
    );
};

export default UseRafe;