import { useQuery } from '@tanstack/react-query';
import Loddingbtn from '../Login/Loddingbtn';
import { toast } from 'react-toastify';

const AddDoctor = () => {

    const { data, isLoading,isPending } = useQuery({
        queryKey: ['servises'],
        queryFn: () => fetch('https://doctors-portal-server-dufg.onrender.com/services')
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loddingbtn></Loddingbtn>
    }
    if(isPending){
        return <Loddingbtn></Loddingbtn>
    }
    const imageBbKey = "cb65c7ecf3dd703b3d6d93dc8f607da8"

    const hendelSing = async (event) => {
        event.preventDefault();
        const displayName = event.target.name.value
        const email = event.target.email.value;
        const specialty = event.target.specialty.value;
        const from = new FormData(event.target);
        const image = from.get('image');
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageBbKey}`
        await fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctorInfo = {
                        name: displayName,
                        email: email,
                        specialty: specialty,
                        image: img
                    }
                    // console.log(doctorInfo);
                    fetch('https://doctors-portal-server-dufg.onrender.com/doctor', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctorInfo)
                    })
                        .then(res => res.json())
                        .then(d => {
                            if (d.insertedId) {
                                toast.success('successfully added')
                                event.target.reset()
                            }
                            else {
                                toast.error('fail to added')
                            }
                        })

                }
            })


        // console.log(imageInfo)

    }
    return (
        <div className='p-9 w-full'>
            <h1 className='text-2xl font-bold capitalize pb-7'>Add Doctor</h1>
            <div>
                <form onSubmit={hendelSing} className="card-body py-0">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input required type="text" name='name' placeholder="Name" className="input input-bordered input-primary"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input required type="email" name='email' placeholder="email" className="input input-bordered input-primary"  />
                    </div>
                    <div className='from-control'>
                        <label className='label'>
                            <span className="label-text">Specialty</span>
                        </label>
                    </div>
                    <select name='specialty' className="select select-bordered w-full select-primary " required>
                        {/* <option disabled selected>Who shot first?</option> */}
                        {
                            data.map(d => <option
                                key={d._id}
                                value={d.service}
                            >{d.service}</option>)
                        }
                    </select>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input required name='image' type="file" className="file-input file-input-bordered file-input-primary w-full " /></div>


                    <div className="form-control ">
                        <button className="btn btn-primary uppercase ">Add</button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default AddDoctor;