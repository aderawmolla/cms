import React, { useState, useEffect } from 'react'
import doctors from "../../models/doctors.json"
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addPatient, updatePatient } from '../../redux/patientSlice.jsx';



export default function UpdatePatient({ showModal, handleClose, patientToBeUpdated }){

  // const [firstName, setFirstName] = useState(patientToBeUpdated.firstName);
  // const [lastName, setLastName] = useState(patientToBeUpdated.lastName);
  // const [description, setDescription] = useState(patientToBeUpdated.description);
  // const [assignedDoctor, setAssignedDoctor] = useState(patientToBeUpdated.doctorId);
  // const [gender, setGender] = useState(patientToBeUpdated.gender);
  // const [age, setAge] = useState(0);
  // const [password, setPassword] = useState(patientToBeUpdated.password);
  // const [phone, setPhone] = useState(patientToBeUpdated.contact);
  // const [userName, setUserName] = useState(patientToBeUpdated.userName);
  // const [email, setEmail] = useState(patientToBeUpdated.email);
  // const [date, setDate] = useState(patientToBeUpdated.date);
  // const [state, setState] = useState(patientToBeUpdated.state);
  // const [wereda, setWereda] = useState(patientToBeUpdated.wereda);
  // const [kebele, setKebele] = useState(patientToBeUpdated.kebele);
  // const [cardNumber, setCardNumber] = useState(patientToBeUpdated.cardNumber);
  // const [selectedImage, setSelectedImage] = useState(patientToBeUpdated.photo);
  // const [imagePreview, setImagePreview] = useState(patientToBeUpdated.photo);

  const dispatch = useDispatch();


  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedImage(file);
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setImagePreview(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };

//   const patient =     {
//     firstName: firstName,
//     lastName: lastName,
//     description: description,
//     photo: selectedImage.name,
//     doctorId: assignedDoctor,
//     gender: gender,
//     id:uuidv4(),
//     password: password,
//     contact: phone,
//     username: userName,
//     email: email,
//     date: date,
//     state: state,
//     wereda: wereda,
//     kebele: kebele,
//     cardNumber: cardNumber       
// };

  // const handleSubmit = (event) => {
  //   event.preventDefault(); 
  //   console.log(uuidv4())
  //   console.log(firstName)
  //   console.log(lastName)
  //   console.log(description)
  //   console.log(selectedImage.name)
  //   console.log(assignedDoctor)
  //   console.log(gender)
  //   console.log(password)
  //   console.log(phone)
  //   console.log(userName)
  //   console.log(email)
  //   console.log(date)
  //   console.log(state)
  //   console.log(wereda)
  //   console.log(kebele)
  //   console.log(cardNumber)
  //   dispatch(updatePatient(patient))
  // }

  useEffect(() => {
    console.log(patientToBeUpdated)
  }, [])


return(
<>        
{showModal && 
<div>modal</div>
}
</>


);

}