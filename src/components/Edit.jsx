// import React, { useEffect, useState } from "react";

// const Edit = ({ showModal, handleClose, index }) => {
//   const [users, setUsers] = useState(() => {
//     const storedData = JSON.parse(localStorage.getItem("userData"));
//     return storedData || [];
//   });

//   useEffect(() => {
//     localStorage.setItem("userData", JSON.stringify(users));
//   }, [users]);
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "",
//     country: "",
//     hobbies: [],
//   });

//   const [errors, setErrors] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "",
//     country: "",
//     hobbies: "",
//   });

//   const [serial, setSerial] = useState();
//   useEffect(() => {
//     setSerial(index);
//   }, [index]);
//   const countries = {
//     India: "India",
//     USA: "USA",
//     Canada: "Canada",
//     UK: "UK",
//     other: "other",
//   };

//   const forValidation = () => {
//     let isValid = true;
//     if (user.firstName === "") {
//       setErrors((previous) => ({
//         ...previous,
//         firstName: "Enter Valid First Name",
//       }));
//       isValid = false;
//     } else {
//       setErrors((previous) => ({
//         ...previous,
//         firstName: "",
//       }));
//     }
//     if (user.country === "") {
//       setErrors((previous) => ({
//         ...previous,
//         country: "Error Select country",
//       }));
//       isValid = false;
//     } else {
//       setErrors((previous) => ({
//         ...previous,
//         country: "",
//       }));
//     }
//     if (user.lastName === "") {
//       setErrors((previous) => ({
//         ...previous,
//         lastName: "Error Enter last name",
//       }));
//       isValid = false;
//     } else {
//       setErrors((previous) => ({
//         ...previous,
//         lastName: "",
//       }));
//     }
//     if (user.phone === "") {
//       setErrors((previous) => ({
//         ...previous,
//         phone: "Error Enter valid phone number ",
//       }));
//       isValid = false;
//     } else {
//       setErrors((previous) => ({
//         ...previous,
//         phone: "",
//       }));
//     }
//     if (user.gender === "") {
//       setErrors((previous) => ({
//         ...previous,
//         gender: "Error Enter gender ",
//       }));
//       isValid = false;
//     } else {
//       setErrors((previous) => ({
//         ...previous,
//         gender: "",
//       }));
//     }
//     if (user.email === "") {
//       setErrors((previous) => ({
//         ...previous,
//         email: "Error Enter valid email ",
//       }));
//       isValid = false;
//     } else {
//       setErrors((previous) => ({
//         ...previous,
//         email: "",
//       }));
//     }
//     if (user.hobbies === "") {
//       setErrors((previous) => ({
//         ...previous,
//         hobbies: "Error Select hobbies ",
//       }));
//       isValid = false;
//     } else {
//       setErrors((previous) => ({
//         ...previous,
//         hobbies: "",
//       }));
//     }
//     return isValid;
//   };

//   const updateTable = (user, serial) => {
//     const str = localStorage.getItem("userData");
//     const data = JSON.parse(str);
//     data[serial].firstName = user.firstName;
//     data[serial].lastName = user.lastName;
//     data[serial].email = user.email;
//     data[serial].phone = user.phone;
//     data[serial].gender = user.gender;
//     data[serial].country = user.country;
//     data[serial].hobbies = user.hobbies;
//     // if((-1)>data.length){
//     //   alert("Enter valid serial number⚠️⚠️")
//     //   return false;
//     // }
//     localStorage.setItem("userData", JSON.stringify(data));
//   };

//   const clickHandler = (e) => {
//     if (!forValidation()) {
//       return false;
//     }
//     updateTable(user, serial);

//     //console.log("user updated");
//     alert("Data is Changed ✅👌");

//     setUser({
//       serialNumber: "",
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       gender: "",
//       country: "",
//       hobbies: [],
//     });
//     handleClose();
//   };
//   return (
//     <>
//       <div
//         className={`modal ${showModal ? "fade show" : ""}`}
//         id="editModal"
//         tabIndex={-1}
//         role="dialog"
//         aria-labelledby="editModalLabel"
//         aria-hidden={!showModal}
//         style={{ display: showModal ? "block" : "none" }}
//       >
//         <div className="modal-dialog modal-dialog-centered" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h2 className="modal-title">Change User Detail</h2>

//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//                 onClick={handleClose}
//               >
//                 <span aria-hidden="true">×</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <>
//                 <div className="container">
//                   <div className="card col-12">
//                     <div className="card-body col-12">
//                       <div className="form-group row">
//                         <div className="col">
//                           <form>
//                             <div className="form-group row">
//                               <div className="col">
//                                 <label htmlFor="firstName">First Name</label>
//                                 <input
//                                   type="text"
//                                   id="firstName"
//                                   className="form-control"
//                                   name="fname"
//                                   style={{
//                                     borderColor:
//                                       errors.firstName !== "" ? "red" : "",
//                                   }}
//                                   value={user.firstName}
//                                   placeholder="Enter your first name"
//                                   onChange={(e) => {
//                                     setUser((prevUser) => ({
//                                       ...prevUser,
//                                       firstName: e.target.value,
//                                     }));
//                                   }}
//                                 />
//                                 {errors.firstName !== "" && (
//                                   <label
//                                     htmlFor="firstName"
//                                     style={{
//                                       color: "red",
//                                       fontSize: "15px",
//                                       className: "form-control",
//                                     }}
//                                   >
//                                     {errors.firstName}
//                                   </label>
//                                 )}
//                               </div>
//                             </div>
//                             <div className="form-group row">
//                               <div className="col">
//                                 <label htmlFor="lname">Last Name</label>
//                                 <input
//                                   type="text"
//                                   className="form-control"
//                                   id="lname"
//                                   name="lname"
//                                   value={user.lastName}
//                                   placeholder="Enter your last name"
//                                   onChange={(e) => {
//                                     setUser((prevUser) => ({
//                                       ...prevUser,
//                                       lastName: e.target.value,
//                                     }));
//                                   }}
//                                   // required
//                                   style={{
//                                     borderColor:
//                                       errors.lastName !== "" ? "red" : "",
//                                   }}
//                                 />
//                                 {errors.lastName !== "" && (
//                                   <label
//                                     htmlFor="lname"
//                                     style={{ color: "red" }}
//                                   >
//                                     {errors.lastName}
//                                   </label>
//                                 )}
//                               </div>
//                             </div>
//                             <div className="form-group row">
//                               <div className="col">
//                                 <label htmlFor="email">Email</label>
//                                 <input
//                                   type="email"
//                                   className="form-control"
//                                   id="email"
//                                   name="email"
//                                   value={user.email}
//                                   placeholder="Enter your email"
//                                   onChange={(e) => {
//                                     setUser((prevUser) => ({
//                                       ...prevUser,
//                                       email: e.target.value,
//                                     }));
//                                   }}
//                                   // required
//                                   style={{
//                                     borderColor: errors.email ? "red" : "",
//                                   }}
//                                 />
//                                 {errors.email !== "" && (
//                                   <label
//                                     htmlFor="email"
//                                     style={{ color: "red" }}
//                                   >
//                                     {errors.email}
//                                   </label>
//                                 )}
//                               </div>
//                             </div>
//                             <div className="form-group row">
//                               <div className="col">
//                                 <label htmlFor="mob">Phone number</label>
//                                 <input
//                                   type="number"
//                                   className="form-control"
//                                   id="mob"
//                                   name="mob"
//                                   value={user.phone}
//                                   placeholder="Enter your phone number "
//                                   onChange={(e) => {
//                                     setUser((prevUser) => ({
//                                       ...prevUser,
//                                       phone: e.target.value,
//                                     }));
//                                   }}
//                                   // required
//                                   style={{
//                                     borderColor:
//                                       errors.phone !== "" ? "red" : "",
//                                   }}
//                                 />
//                                 {errors.phone !== "" && (
//                                   <label htmlFor="mob" style={{ color: "red" }}>
//                                     {errors.phone}
//                                   </label>
//                                 )}
//                               </div>
//                             </div>
//                             <div className="form-group row">
//                               <div className="col">
//                                 <label>Gender</label>
//                                 <div className="d-flex">
//                                   <div className="form-check mr-3">
//                                     <input
//                                       type="radio"
//                                       className="form-check-input"
//                                       id="male"
//                                       name="gender"
//                                       value="male"
//                                       checked={user.gender === "male"}
//                                       onChange={(e) => {
//                                         setUser((prevUser) => ({
//                                           ...prevUser,
//                                           gender: e.target.value,
//                                         }));
//                                       }}
//                                     />
//                                     <label
//                                       className="form-check-label"
//                                       htmlFor="male"
//                                     >
//                                       Male
//                                     </label>
//                                   </div>
//                                   <div className="form-check">
//                                     <input
//                                       type="radio"
//                                       className="form-check-input"
//                                       id="female"
//                                       name="gender"
//                                       value="female"
//                                       checked={user.gender === "female"}
//                                       onChange={(e) => {
//                                         setUser((prevUser) => ({
//                                           ...prevUser,
//                                           gender: e.target.value,
//                                         }));
//                                       }}
//                                     />
//                                     <label
//                                       className="form-check-label"
//                                       htmlFor="female"
//                                     >
//                                       Female
//                                     </label>
//                                   </div>
//                                 </div>
//                                 {errors.gender !== "" && (
//                                   <label style={{ color: "red" }}>
//                                     {errors.gender}
//                                   </label>
//                                 )}
//                               </div>
//                             </div>
//                             <div className="form-group row">
//                               <div className="col">
//                                 <label>Country</label>
//                                 <select
//                                   className="form-control"
//                                   value={user.country}
//                                   placeholder="Enter the name of Country"
//                                   onChange={(e) => {
//                                     setUser((prevUser) => ({
//                                       ...prevUser,
//                                       country: e.target.value,
//                                     }));
//                                   }}
//                                   style={{
//                                     borderColor:
//                                       errors.country !== "" ? "red" : "",
//                                   }}
//                                 >
//                                   <option value="">Please select</option>
//                                   {Object.keys(countries).map(
//                                     (country, index) => (
//                                       <option key={index} value={country}>
//                                         {country}
//                                       </option>
//                                     )
//                                   )}
//                                 </select>
//                                 {errors.country !== "" && (
//                                   <label style={{ color: "red" }}>
//                                     {errors.country}
//                                   </label>
//                                 )}
//                               </div>
//                             </div>
//                             <div className="form-group row">
//                               <div className="col">
//                                 <label>Hobbies</label>
//                                 <div className="d-flex">
//                                   <div className="form-check mr-3">
//                                     <input
//                                       type="checkbox"
//                                       className="form-check-input"
//                                       id="reading"
//                                       name="hobbies"
//                                       value="reading"
//                                       checked={user.hobbies.includes("reading")}
//                                       onChange={(e) => {
//                                         const { checked, value } = e.target;
//                                         setUser((prevUser) => {
//                                           const updatedHobbies = [
//                                             ...prevUser.hobbies,
//                                           ];

//                                           const index =
//                                             updatedHobbies.indexOf(value);

//                                           if (checked && index === -1) {
//                                             updatedHobbies.push(value);
//                                           } else if (!checked && index !== -1) {
//                                             updatedHobbies.splice(index, 1);
//                                           }

//                                           return {
//                                             ...prevUser,
//                                             hobbies: updatedHobbies,
//                                           };
//                                         });
//                                       }}
//                                     />
//                                     <label
//                                       className="form-check-label"
//                                       htmlFor="reading"
//                                     >
//                                       Reading
//                                     </label>
//                                   </div>
//                                   <div className="form-check">
//                                     <input
//                                       type="checkbox"
//                                       className="form-check-input"
//                                       id="traveling"
//                                       name="hobbies"
//                                       value="traveling"
//                                       checked={user.hobbies.includes(
//                                         "traveling"
//                                       )}
//                                       onChange={(e) => {
//                                         const { checked, value } = e.target;
//                                         setUser((prevUser) => {
//                                           const updatedHobbies = [
//                                             ...prevUser.hobbies,
//                                           ];

//                                           const index =
//                                             updatedHobbies.indexOf(value);

//                                           if (checked && index === -1) {
//                                             updatedHobbies.push(value);
//                                           } else if (!checked && index !== -1) {
//                                             updatedHobbies.splice(index, 1);
//                                           }

//                                           return {
//                                             ...prevUser,
//                                             hobbies: updatedHobbies,
//                                           };
//                                         });
//                                       }}
//                                     />
//                                     <label
//                                       className="form-check-label"
//                                       htmlFor="traveling"
//                                     >
//                                       Traveling
//                                     </label>
//                                   </div>
//                                 </div>
//                                 {errors.hobbies !== "" && (
//                                   <label style={{ color: "red" }}>
//                                     {errors.hobbies}
//                                   </label>
//                                 )}
//                               </div>
//                             </div>
//                           </form>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             </div>

//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-dismiss="modal"
//                 onClick={handleClose}
//               >
//                 Close
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-primary"
//                 onClick={clickHandler}
//               >
//                 Save changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Edit;
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Edit = ({ showModal, handleClose, index, getData }) => {
  // const [users, setUsers] = useState([]);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    country: "",
    hobbies: [],
    languages: [],
  });

  const [inputFields, setInputFields] = useState([
    {
      language: "",
    },
  ]);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    country: "",
    hobbies: "",
    languages: "",
  });
  // const [serial, setSerial] = useState();
  useEffect(() => {
    let existingData = JSON.parse(localStorage.getItem("userData"));
    const userData = existingData[index];
    if (userData) {
      setUser(userData);
      const languagesList = userData.languages.map((language) => ({
        language,
      }));
      console.log("Language list:", languagesList);
      // Initialize inputFields with the languages from userData
      setInputFields(languagesList);
    }
  }, [index]);

  const countries = {
    India: "India",
    USA: "USA",
    Canada: "Canada",
    UK: "UK",
    other: "other",
  };

  const forValidation = () => {
    let isValid = true;
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      country: "",
      hobbies: "",
      languages: "",
    });

    if (user.firstName === "") {
      setErrors((previous) => ({
        ...previous,
        firstName: "Please enter your First Name",
      }));
      isValid = false;
    }

    if (user.country === "") {
      setErrors((previous) => ({
        ...previous,
        country: "Pease Select a country",
      }));
      isValid = false;
    }

    if (user.lastName === "") {
      setErrors((previous) => ({
        ...previous,
        lastName: "Please enter your last name",
      }));
      isValid = false;
    }

    if (user.phone === "" || user.phone.length !== 10) {
      setErrors((previous) => ({
        ...previous,
        phone: "Please enter valid phone number ",
      }));
      isValid = false;
    }

    if (user.gender === "") {
      setErrors((previous) => ({
        ...previous,
        gender: "Please enter your gender ",
      }));
      isValid = false;
    }

    if (
      user.email !== "" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)
    ) {
      setErrors((previous) => ({
        ...previous,
        email: "Please enter a valid email address.",
      }));
      isValid = false;
    }
    if (!user.email) {
      setErrors((previous) => ({
        ...previous,
        email: "Please enter a email address.",
      }));
      isValid = false;
    }

    if (user.hobbies.length === 0) {
      setErrors((previous) => ({
        ...previous,
        hobbies: "Please Select atleast one hobbies ",
      }));
      isValid = false;
    } else if (user.hobbies.length > 0) {
      setErrors((previous) => ({
        ...previous,
        hobbies: "",
      }));
    }
    if (user.languages.length === 0) {
      setErrors((previous) => ({
        ...previous,
        languages: "Please enter atleast one programming language ",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleFieldChange = (index, e) => {
    let formValues = [...inputFields];
    console.log("formValues: ", formValues);
    formValues[index].language = e.target.value;
    setInputFields(formValues);
    console.log("Form values", formValues);
    setUser((previous) => ({
      ...previous,
      languages: [...formValues],
    }));
  };
  // const handleFieldChange = (index, e) => {
  //   let formValues = [...inputFields];
  //   formValues[index][e.target.name] = e.target.value;
  //   setInputFields(formValues);
  //   const languageValues = formValues.map((field) => field.language);
  //   console.log("Language values:", languageValues);
  //   setUser((previous) => ({
  //     ...previous,
  //     languages: languageValues,
  //   }));
  // };

  let removeFormFields = (i) => {
    let newFormValues = [...inputFields];

    newFormValues.splice(i.target.id, 1);
    setInputFields(newFormValues);
  };

  const addFields = (e) => {
    if (
      inputFields[inputFields.length - 1].language !== "" &&
      inputFields.length < 10
    ) {
      setErrors((previous) => ({
        ...previous,
        languages: "",
      }));

      setInputFields([...inputFields, { language: ""}]);
    } else {
      setErrors((previous) => ({
        ...previous,
        languages:
          "Please enter atleast one programming language in last give field",
      }));
    }
  };

  const addTextfield = () => {
    console.log("input fields", inputFields);
    return inputFields.map((value, index) => {
      return (
        <div className="form-group row" key={index}>
          <div className="col">
            <input
              type="text"
              className={
                errors.languages !== ""
                  ? "form-control border-danger"
                  : "form-control"
              }
              id={`${index}`}
              name="language"
              // value={inputFields[index].language.language}
              value={value.language}
              placeholder="Enter your programming languages...."
              onChange={(e) => handleFieldChange(index, e)}
            />
          </div>
          <div className="col">
            {index === 0 ? (
              <i
                className="fa fa-plus-circle"
                onClick={addFields}
                id={`${index}`}
                style={{ color: "#74C0FC", fontSize: "25px" }}
              />
            ) : (
              <i
                className="fa fa-minus-circle fa-2xl"
                id={`${index}`}
                onClick={removeFormFields}
                style={{ color: "#ff0000", fontSize: "25px" }}
              />
            )}
          </div>
        </div>
      );
    });
  };

  const updateTable = () => {
    // setUsers(JSON.parse(localStorage.getItem("userData")));
    // console.log("This is users in update tabel" + users);
    let existingData = JSON.parse(localStorage.getItem("userData"));
    existingData[index] = user;
    localStorage.setItem("userData", JSON.stringify(existingData));
    verified();
    getData(existingData);
    // const updatedUsers = users;
    // setUsers(() => {
    //   updatedUsers[serial] = user;
    //   console.log("This is updated user :" + updatedUsers);
    //   localStorage.setItem("userData", JSON.stringify(updatedUsers));
    //   getData(updatedUsers);
    //   return updatedUsers;
    // });
  };
  const notify = () =>
    toast.error("Enter valid input!!!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const verified = () => {
    toast.success("Data Changed successfully", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    if (!forValidation()) {
      notify();
      return false;
    }

    updateTable();
    // alert("Data is Changed ✅👌");
  };

  return (
    <>
      {showModal && (
        <div
          className={`modal ${showModal ? "fade show" : ""}`}
          id={`editModal-${index}`} // Unique ID based on the index
          tabIndex={-1}
          role="dialog"
          aria-labelledby={`editModalLabel-${index}`} // Unique ID based on the index
          aria-hidden={!showModal}
          style={{ display: showModal ? "block" : "none" }}
        >
          {console.log("In edit modal's JSX :" + showModal)}
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Change User Detail</h2>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClose}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <>
                  <div className="container">
                    <div className="card col-12">
                      <div className="card-body col-12">
                        <div className="form-group row">
                          <div className="col">
                            <form>
                              <div className="form-group row">
                                <div className="col">
                                  <label htmlFor="firstName">First Name</label>
                                  <input
                                    type="text"
                                    className={
                                      errors.firstName !== ""
                                        ? "form-control border-danger"
                                        : "form-control"
                                    }
                                    id="firstName"
                                    value={user.firstName}
                                    placeholder="Enter your first name"
                                    onChange={(e) => handleChange(e)}
                                  />
                                  {errors.firstName !== "" && (
                                    <label
                                      htmlFor="firstName"
                                      className="text-danger"
                                    >
                                      {errors.firstName}
                                    </label>
                                  )}
                                </div>
                                <div className="col">
                                  <label htmlFor="lastName">Last Name</label>
                                  <input
                                    type="text"
                                    className={
                                      errors.lastName !== ""
                                        ? "form-control border-danger"
                                        : "form-control"
                                    }
                                    id="lastName"
                                    value={user.lastName}
                                    placeholder="Enter your last name"
                                    onChange={(e) => handleChange(e)}
                                  />
                                  {errors.lastName !== "" && (
                                    <label
                                      htmlFor="lname"
                                      className="text-danger"
                                    >
                                      {errors.lastName}
                                    </label>
                                  )}
                                </div>
                              </div>
                              {/* Second Row */}
                              <div className="form-group row">
                                <div className="col">
                                  <label htmlFor="email">Email</label>
                                  <input
                                    type="email"
                                    className={
                                      errors.email !== ""
                                        ? "form-control border-danger"
                                        : "form-control"
                                    }
                                    id="email"
                                    name="email"
                                    value={user.email}
                                    placeholder="Enter your email"
                                    onChange={(e) => handleChange(e)}
                                  />
                                  {errors.email !== "" && (
                                    <label
                                      htmlFor="email"
                                      className="text-danger"
                                    >
                                      {errors.email}
                                    </label>
                                  )}
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="col">
                                  <label htmlFor="mob">Phone number</label>
                                  <input
                                    type="number"
                                    className={
                                      errors.phone !== ""
                                        ? "form-control border-danger"
                                        : "form-control"
                                    }
                                    id="phone"
                                    name="mob"
                                    value={user.phone}
                                    placeholder="Enter your phone number "
                                    onChange={(e) => handleChange(e)}
                                  />
                                  {errors.phone !== "" && (
                                    <label
                                      htmlFor="mob"
                                      className="text-danger"
                                    >
                                      {errors.phone}
                                    </label>
                                  )}
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="col">
                                  <label>Gender</label>
                                  <div className="d-flex">
                                    <div className="form-check mr-3">
                                      <input
                                        type="radio"
                                        className="form-check-input"
                                        id="gender"
                                        name="gender"
                                        value="male"
                                        checked={user.gender === "male"}
                                        onChange={(e) => handleChange(e)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="male"
                                      >
                                        Male
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        type="radio"
                                        className="form-check-input"
                                        id="gender"
                                        name="gender"
                                        value="female"
                                        checked={user.gender === "female"}
                                        onChange={(e) => handleChange(e)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="female"
                                      >
                                        Female
                                      </label>
                                    </div>
                                  </div>
                                  {errors.gender !== "" && (
                                    <label className="text-danger">
                                      {errors.gender}
                                    </label>
                                  )}
                                </div>
                                <div className="col">
                                  <label>Hobbies</label>
                                  <div className="d-flex">
                                    <div className="form-check mr-3">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="hobbies"
                                        name="hobbies"
                                        value="reading"
                                        checked={user?.hobbies?.includes(
                                          "reading"
                                        )}
                                        onChange={(e) => {
                                          const { checked, value } = e.target;
                                          setUser((prevUser) => {
                                            const updatedHobbies = [
                                              ...prevUser.hobbies,
                                            ];

                                            const index =
                                              updatedHobbies.indexOf(value);

                                            if (checked && index === -1) {
                                              updatedHobbies.push(value);
                                            } else if (
                                              !checked &&
                                              index !== -1
                                            ) {
                                              updatedHobbies.splice(index, 1);
                                            }

                                            return {
                                              ...prevUser,
                                              hobbies: updatedHobbies,
                                            };
                                          });
                                        }}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="reading"
                                      >
                                        Reading
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="hobbies"
                                        name="hobbies"
                                        value="traveling"
                                        checked={user.hobbies.includes(
                                          "traveling"
                                        )}
                                        onChange={(e) => {
                                          const { checked, value } = e.target;
                                          setUser((prevUser) => {
                                            const updatedHobbies = [
                                              ...prevUser.hobbies,
                                            ];

                                            const index =
                                              updatedHobbies.indexOf(value);

                                            if (checked && index === -1) {
                                              updatedHobbies.push(value);
                                            } else if (
                                              !checked &&
                                              index !== -1
                                            ) {
                                              updatedHobbies.splice(index, 1);
                                            }

                                            return {
                                              ...prevUser,
                                              hobbies: updatedHobbies,
                                            };
                                          });
                                        }}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="traveling"
                                      >
                                        Traveling
                                      </label>
                                    </div>
                                  </div>
                                  {errors.hobbies !== "" && (
                                    <label className="text-danger">
                                      {errors.hobbies}
                                    </label>
                                  )}
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="col">
                                  <label>Country</label>
                                  <select
                                    className={
                                      errors.country !== ""
                                        ? "form-control border-danger"
                                        : "form-control"
                                    }
                                    value={user.country}
                                    id="country"
                                    placeholder="Enter the name of Country"
                                    onChange={(e) => handleChange(e)}
                                  >
                                    <option value="">Please select</option>
                                    {Object.keys(countries).map(
                                      (country, index) => (
                                        <option key={index} value={country}>
                                          {country}
                                        </option>
                                      )
                                    )}
                                  </select>
                                  {errors.country !== "" && (
                                    <label className="text-danger">
                                      {errors.country}
                                    </label>
                                  )}
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="col">
                                  <label htmlFor="email">
                                    Programing languages
                                  </label>
                                  {addTextfield()}
                                  {errors.languages !== "" && (
                                    <label
                                      htmlFor="email"
                                      className="text-danger"
                                    >
                                      {errors.languages}
                                    </label>
                                  )}
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Edit;
