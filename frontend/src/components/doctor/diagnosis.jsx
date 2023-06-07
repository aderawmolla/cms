import {useEffect} from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Diagnosis = ({ isOpen, closeModal, patientId }) => {
  
let { patient_id } = useParams();
const diagnosises = useSelector((state) => state.diagnosises.diagnosises)

const patientDiagonisis = diagnosises.filter((item) => {
    if (patient_id === diagnosises.patient_id){
        return{
            item
        }
    }
})

useEffect(() => {
    console.log(patientDiagonisis)
    console.log(patientId)
}, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-black">
      <div className="fixed inset-0 bg-black opacity-50 "></div>
      <div className="bg-white p-6 rounded shadow-lg z-10 max-w-[1300px] h-[80vh] w-full mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Patient Diagnosis</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={closeModal}
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 10.586L17.293 5.293A1 1 0 0118.707 6.707L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707A1 1 0 016.707 5.293L12 10.586z" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 pt-32">
        {/* <div className='w-1/4'>
        <div class='w-full text-center mb-3'>
            </div>
          <div className="mb-4">
            <label className="font-bold">Doctor Name:</label>
            <p>{patientDiagonisis.doctorName}</p>
          </div>
          <div className="mb-4">
            <label className="font-bold">Patient Name:</label>
            <p>{patientDiagonisis.patientDiagonisisName}</p>
          </div>
          <div className="mb-4">
            <label className="font-bold">Disease:</label>
            <p>{patientDiagonisis.disease}</p>
          </div>
          <div className="mb-4">
            <label className="font-bold">Medications:</label>
            <ul>
              {patientDiagonisis.medications.map((medication) => (
                <li key={medication.id}>
                  {medication.name} - {medication.dosage}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <label className="font-bold">Lab Results:</label>
            <p>{patientDiagonisis.labResults}</p>
          </div>
        </div> */}
        <div class='px-2 py-3 w-3/4'>

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
        </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;

