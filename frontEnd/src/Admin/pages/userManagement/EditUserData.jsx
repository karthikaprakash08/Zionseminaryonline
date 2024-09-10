import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { getAllDegrees } from "../../firebase/degreeApi";

const options = {
  maritalStatus: [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married' },
    { value: 'divorced', label: 'Divorced' },
    { value: 'widowed', label: 'Widowed' }
  ],
  gender: [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ],
};

const EditUserData = ({ closeEditUser, currentData }) => {
  const [userData, setUserData] = useState(null);
  const [courseOptions, setCourseOptions] = useState([]);

  useEffect(() => {
    setUserData(currentData);
  }, [currentData]);


  useEffect(() => {
    const fetchCourses = async () => {
      const coursesSnapshot = await getAllDegrees();
      const coursesList = coursesSnapshot?.map((doc) => ({
        value: doc?.id,
        label: doc.data()?.domain,
      }));
      setCourseOptions(coursesList);
    };

    fetchCourses();
  }, []);

  const handleValueChange = (type, value) => {
    setUserData({ ...userData, [type]: value });
  };

  const updateData = async () => {
    try {

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-new-user-cover">
      <div className="add-new-user-cnt">
        <>
          <h2>Edit User </h2>
          <p>Update User Details</p>
        </>
        <form className="user-details-from">
          <div className="course-name-cnt user-input">
            <p>First Name *</p>
            <input
              type="text"
              className="name-input "
              value={userData?.firstName}
              placeholder="Enter user first name"
              onChange={(e) => handleValueChange("firstName", e.target.value)}
            />
          </div>
          <div className="course-name-cnt user-input">
            <p>Last Name *</p>
            <input
              type="text"
              className="name-input "
              value={userData?.lastName}
              placeholder="Enter user last name"
              onChange={(e) => handleValueChange("lastName", e.target.value)}
            />
          </div>
          <div className="course-name-cnt user-input">
            <p>Mobile No *</p>
            <input
              type="number"
              value={userData?.mobileNo}
              placeholder="Enter mobile number"
              className="name-input "
              onChange={(e) => handleValueChange("mobileNo", e.target.value)}
            />
          </div>
          <div className="course-name-cnt user-input">
            <p>Theological Qualification *</p>
            <input
              type="text"
              className="name-input "
              value={userData?.theologicalQualification}
              placeholder="Enter theological Qualification"
              onChange={(e) => handleValueChange("theologicalQualification", e.target.value)}
            />
          </div>
          <div className="course-name-cnt user-input">
            <p>Present Address *</p>
            <input
              type="text"
              className="name-input "
              value={userData?.presentAddress}
              placeholder="Enter Present Address"
              onChange={(e) => handleValueChange("presentAddress", e.target.value)}
            />
          </div>
          <div className="course-name-cnt user-input">
            <p>Gender *</p>
            <Select
              placeholder="Select Gender "
              options={options.gender}
              value={userData?.gender}
              // className="name-input"
              onChange={(e) => handleValueChange("gender", e.target.value)}
            />
          </div>
          <div className="course-name-cnt user-input">
            <p>Ministry Experience *</p>
            <input
              type="text"
              placeholder="Enter ministry experience"
              value={userData?.ministryExperience || ''}
              className="name-input "
              onChange={(e) => handleValueChange("ministryExperience", e.target.value)}
            />
          </div>
          <div className="course-name-cnt user-input">
            <p>Email *</p>
            <input
              type="text"
              placeholder="Enter user email"
              value={userData?.email || ''}
              className="name-input "
              onChange={(e) => handleValueChange("email", e.target.value)}
            />
          </div>
          <div className="course-name-cnt user-input">
            <p>Salvation Experience *
            </p>
            <input
              type="text"
              placeholder="Enter salvation experience"
              value={userData?.salvationExperience || ''}
              className="name-input "

              onChange={(e) => handleValueChange("salvationExperience", e.target.value)}
            />
          </div>
          <div className="course-name-cnt user-input">
            <p>Marital Status *</p>
            <Select
              options={options.maritalStatus}
              defaultValue={userData?.maritalStatus}
              onChange={(e) => handleValueChange("maritalStatus", e.value)}
            />
          </div>
          <div className="course-name-cnt user-input">
            <p>Educational Qualification *</p>
            <input
              type="text"
              className="name-input "
              value={userData?.educationalQualification}
              placeholder="Enter Educational Qualification"
              onChange={(e) => handleValueChange("educationalQualification", e.target.value)}
            />
          </div>
          <div className="course-name-cnt user-input">
            <p>User Name *</p>
            <input
              type="text"
              className="name-input "
              placeholder="Enter user name"
            // onChange={(e) => handleChnageData("", e.target.value)}
            />
          </div>
          <div className="course-name-cnt user-input">
            <p>DOB *</p>
            <input
              type="date"
              className="name-input "
              value={userData?.dob}
              onChange={(e) => handleValueChange("dob", e.target.value)}
            />
          </div>
          <div className="course-name-cnt user-input">
            <p>Applying for *</p>
            <Select
              options={courseOptions}
              defaultValue={userData?.applyingFor}
              onChange={(e) => handleValueChange("applyingFor", e.value)}
            />
          </div>
          <div className="course-name-cnt user-input">
            <p>Password *</p>
            <input
              type="password"
              className="name-input "
              value={userData?.password}
              placeholder="Enter user password"
              onChange={(e) => handleValueChange("password", e.target.value)}
            />
          </div>
          <div
            className="course-name-cnt name-input user-input "
            style={{ position: "relative" }}
          >
            <p className="file-upload ">{userData?.signatureURL?.name ? userData?.signatureURL?.name.slice(0, 20) : "Upload Signature *"}</p>
            <input
              type="file"
              className="name-input file-input-hide "
              onChange={(e) =>
                handleValueChange('signatureURL', e.target.files[0],)
              }
            />
          </div>
          <div
            className="course-name-cnt name-input user-input "
            style={{ position: "relative" }}
          >
            <p className="file-upload ">{userData?.passportPhotoURL?.name ? userData?.passportPhotoURL?.name.slice(0, 20) : "Upload Passport Size Photo *"}</p>
            <input
              type="file"
              className="name-input file-input-hide "
              onChange={(e) =>
                handleValueChange('passportPhotoURL', e.target.files[0],)
              }
            />
          </div>
          <div
            className="course-name-cnt name-input user-input "
            style={{ position: "relative" }}
          >
            <p className="file-upload ">{userData?.educationCertURL?.name ? userData?.educationCertURL?.name.slice(0, 20) : "Upload Education Certificate *"}</p>
            <input
              type="file"
              className="name-input file-input-hide "
              onChange={(e) =>
                handleValueChange('educationCertURL', e.target.files[0],)
              }
            />
          </div>
        </form>
        <div className="bottom-btn-cnt">
          <div className=" course-delete-btn " onClick={() => closeEditUser()}>
            Cancel
          </div>
          <div className="add-new-lesson-btn" onClick={() => updateData()}>
            Add User
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserData;
