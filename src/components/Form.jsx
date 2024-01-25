import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Filtering } from "./Table/ReactTableFilter";

const Form = () => {
  const [userList, setUserList] = useState([]);
  const [inputFields, setInputFields] = useState([
    {
      language: "",
    },
  ]);
  const [file, setFile] = useState();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    setUserList(storedData || []);
  }, []);

  useEffect(() => {
    if (userList.length > 0) {
      localStorage.setItem("userData", JSON.stringify(userList));
    }
  }, [userList]);

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
    toast.success("Form stored successfully", {
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

  const countries = {
    India: "India",
    USA: "USA",
    Canada: "Canada",
    Japan: "Japan",
    other: "other",
  };

  const handleChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.id]: e.target.value,
    }));
  };

  const renderTable = () => {
    // return <Table info={userList} />;
    // return <ReactTable info={userList} />;
    return <Filtering info={userList} />;
  };

  const handleFieldChange = (index, e) => {
    let formValues = [...inputFields];
    formValues[index][e.target.name] = e.target.value;
    setInputFields(formValues);
    setUser((previous) => ({
      ...previous,
      languages: [...inputFields],
    }));
  };

  let removeFormFields = (i) => {
    let newFormValues = [...inputFields];
    console.log("i", i.target.id);
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
      setInputFields([...inputFields, { language: "" }]);
    } else {
      setErrors((previous) => ({
        ...previous,
        languages:
          "Please enter atleast one programming language in last give field",
      }));
    }
  };

  const addTextfield = () => {
    console.log("in add text field");
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
              value={inputFields[index].language}
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

  const handleImage = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    if (forValidation()) {
      verified();
      setUserList((previous) => [
        ...previous,
        {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          gender: user.gender,
          country: user.country,
          hobbies: user.hobbies,
          languages: user.languages,
        },
      ]);

      // localStorage.setItem("userData", JSON.stringify(userList));
      // alert("Form submitted✅👍");

      setUser({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        country: "",
        hobbies: [],
      });
      setInputFields([{ language: "" }]);
      setFile();
    } else {
      notify();
      return false;
    }
  };

  return (
    <React.Fragment>
      <div className="jumbotron">
        <div className="container">
          <h1>Welcome to My Form</h1>
          <p>This is a simple form layout using Bootstrap.</p>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">
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
                    <label htmlFor="firstName" className="text-danger">
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
                    <label htmlFor="lname" className="text-danger">
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
                    <label htmlFor="email" className="text-danger">
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
                    <label htmlFor="mob" className="text-danger">
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
                      <label className="form-check-label" htmlFor="male">
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
                      <label className="form-check-label" htmlFor="female">
                        Female
                      </label>
                    </div>
                  </div>
                  {errors.gender !== "" && (
                    <label className="text-danger">{errors.gender}</label>
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
                        checked={user.hobbies.includes("reading")}
                        onChange={(e) => {
                          const { checked, value } = e.target;
                          setUser((prevUser) => {
                            const updatedHobbies = [...prevUser.hobbies];

                            const index = updatedHobbies.indexOf(value);

                            if (checked && index === -1) {
                              updatedHobbies.push(value);
                            } else if (!checked && index !== -1) {
                              updatedHobbies.splice(index, 1);
                            }

                            return { ...prevUser, hobbies: updatedHobbies };
                          });
                        }}
                      />
                      <label className="form-check-label" htmlFor="reading">
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
                        checked={user.hobbies.includes("traveling")}
                        onChange={(e) => {
                          const { checked, value } = e.target;
                          setUser((prevUser) => {
                            const updatedHobbies = [...prevUser.hobbies];

                            const index = updatedHobbies.indexOf(value);

                            if (checked && index === -1) {
                              updatedHobbies.push(value);
                            } else if (!checked && index !== -1) {
                              updatedHobbies.splice(index, 1);
                            }

                            return { ...prevUser, hobbies: updatedHobbies };
                          });
                        }}
                      />
                      <label className="form-check-label" htmlFor="traveling">
                        Traveling
                      </label>
                    </div>
                  </div>
                  {errors.hobbies !== "" && (
                    <label className="text-danger">{errors.hobbies}</label>
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
                    {Object.keys(countries).map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  {errors.country !== "" && (
                    <label className="text-danger">{errors.country}</label>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <div className="col">
                  <label htmlFor="email">Programing languages</label>
                  {addTextfield()}
                  {errors.languages !== "" && (
                    <label htmlFor="email" className="text-danger">
                      {errors.languages}
                    </label>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <div className="col">
                  <input type="file" onChange={handleImage} />
                </div>
                <div className="col">
                  <img
                    alt="description"
                    src={file}
                    height="200px"
                    width="400px"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-group row">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        {renderTable()}
      </div>
    </React.Fragment>
  );
};

export default Form;
