import {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import diseases from "../../models/disease.json"

const Diagnosis = ({  }) => {
  
let { patientId } = useParams();
const diagnosises = useSelector((state) => state.diagnosises.diagnosises)
const [disease, setDisease] = useState([]);

const diagonisis = diagnosises.filter((item) => {
    if (patientId === item.patient_id){
        return{
            item
        }
    }
})
const patientDiagonisis = diagnosises[0];

useEffect(() => {
    // console.log(disease)
}, [disease])

  return (
    <div className=" text-black">
      <div className=" "></div>
      <div className="bg-white p-6 rounded shadow-lg z-10 max-w-[1300px] h-[80vh] w-full mx-auto">
        <div className="flex justify-center items-center mb-4 pt-8">
          <h2 className="text-2xl font-bold">Patient Diagnosis</h2>

        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 pt-8">
        <div className=''>
        <div class='w-full text-center mb-3'>
            </div>
          <div className="mb-4 flex gap-8">
            <label className="font-bold">Doctor Id: </label>
            <p>{patientDiagonisis.docId}</p>
          </div>
          <div className="mb-4 flex gap-8">
            <label className="font-bold">Patient Id:</label>
            <p>{patientDiagonisis.patient_id}</p>
          </div>
          <div className="mb-4 flex gap-8">
            <label className="font-bold">Disease:</label>
            <select
                className='border-gray-400 border rounded-lg h-8 focus:border-blue-500 focus:border-2'
                value={disease}  // Set the value of the select to the current disease state
                onChange={(e) => setDisease(e.target.value)} // Update the disease state on change
                >
                <option value="">Choose a disease</option>
                {diseases.map((disease, index) => (
                    <option key={index} value={disease.name}>
                    {disease.name}
                    </option>
                ))}
                </select>
          </div>
          <div className="mb-4 flex gap-8">
            <label className="font-bold">Medications:</label>
            <ul>
                <div className='flex justify-between gap-6 font-semibold rounded-lg py-2 px-4'>
                    <p>Medicine</p>
                    <p>Doze</p>
                </div>
              {diseases.map((diag, index) => diag.name === disease && 
              (
                <div>{console.log(diag.name)}
                {diag.medications.map((item, index) => (
                <li key={index} className='flex justify-between gap-6 border border-gray-200 rounded-lg py-2 px-4'>
                    <label htmlFor="">{item.name}</label>
                    <input className='w-20 h-6 bg-gray-100 px-4 ' type="number" />
                </li>
                ))}
                </div>
              )
              )}
            </ul>
          </div>
        </div>
        {/* <div class='px-2 py-3 w-3/4'>

            <table class="w-full border">
                <thead>
                    <tr class="border-t-2 font-bold">
                        <td class="p-2 border-r w-1/12">Sr#</td>
                        <td class="p-2 border-r w-6/12">Item</td>
                        <td class="p-2 border-r w-1/12">Qty</td>
                        <td class="p-2 text-right w-4/12">Total</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t text-sm">
                        <td class="p-1 pl-2 border-r ">1</td>
                        <td class="p-1 pl-2 border-r">Coffee</td>
                        <td class="p-1 pl-2 border-r">1</td>
                        <td class="p-1 text-right">42.00 <small class="font-bolder text-lg pr-2 text-gray-300">$</small></td>
                    </tr>
                    <tr class="border-t text-sm">
                        <td class="p-1 pl-2 border-r">2</td>
                        <td class="p-1 pl-2 border-r">Cerial</td>
                        <td class="p-1 pl-2 border-r">1</td>
                        <td class="p-1 text-right">10.00 <small class="font-bolder text-lg pr-2 text-gray-300">$</small></td>
                    </tr>
                    <tr class="border-t text-sm">
                        <td class="p-1 pl-2 border-r">3</td>
                        <td class="p-1 pl-2 border-r">Fresher (6/1)</td>
                        <td class="p-1 pl-2 border-r">1</td>
                        <td class="p-1 text-right">100.00 <small class="font-bolder text-lg pr-2 text-gray-300">$</small></td>
                    </tr>
                </tbody>
                <thead>
                    <tr class="border-t-2 text-sm">
                        <td class="p-2" colspan="2"></td>
                        <td class="p-2 text-right border-r">Sub Total</td>
                        <td class="p-1 text-right">152.00 <small class="font-bolder text-lg pr-2 text-gray-300">$</small></td>
                    </tr>
                    <tr class="border-t-2 text-sm">
                        <td class="p-2" colspan="2"></td>
                        <td class="p-2 text-right border-r">Tax</td>
                        <td class="p-1 text-right">15.20 <small class="font-bolder text-lg pr-2 text-gray-300">$</small></td>
                    </tr>
                    <tr class="border-t-2 text-sm">
                        <td class="p-2" colspan="2"></td>
                        <td class="p-2 text-right border-r font-bold">Total</td>
                        <td class="p-1 text-right">15.20 <small class="font-bolder text-lg pr-2 text-gray-300">$</small></td>
                    </tr>
                </thead>
            </table>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;

