import { useParams } from "react-router-dom";
import prsc from "../../models/prescription.json"

export default function DoctorPrescription(){
    let { prescriptionId } = useParams();
    return(
    <>
        {/* {prsc.map((item, index) => item.id === prescriptionId && ( */}
            <div className="px-[5%] flex flex-col justify-center items-center py-16 font-mono">
            <div className="bg-blue-400 px-12 py-16 flex justify-between gap-16">
                <div>
                <h1 className="text-3xl font-bold tracking-widest">KIDANE MIHRET CLINIC</h1>
                <p>This is an officail Kidane Mihret Clinic Prescription Card, It is the only communication medium between a Doctor and a Laboratoriest.</p>
                </div>
                <div>
                <img className="w-32 h-32" src="/icons/lg.png" alt="" />
                </div>
            </div>
        </div>
        {/* )) } */}
        </>
    )

}