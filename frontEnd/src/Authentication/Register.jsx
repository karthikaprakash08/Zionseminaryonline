import React from 'react'
import './Register.css'
import { useForm } from 'react-hook-form';
import Select from 'react-select';

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
  applyingFor: [
    { value: 'certificateFamilyCounselling', label: 'Certificate in Family Counselling' },
    { value: 'diplomaTheology', label: 'Diploma in Theology [Dip.Th]' },
    { value: 'bThFastTrack', label: 'B.Th [Bachelor of Theology] - Fast track [2 years]' },
    { value: 'bTh3Years', label: 'B.Th (3 Years)' },
    { value: 'mDivFastTrack', label: 'M.Div [Master of Divinity] - Fast track [2 years]' },
    { value: 'mDivRegular', label: 'M.Div [Master of Divinity] Regular 2 years' },
    { value: 'mTh', label: 'M.Th [Master of Theology]' },
    { value: 'phD', label: 'Ph.D [Doctor of Philosophy]' },
    { value: 'dMin', label: 'D.Min [Doctorate of Ministry]' },
    { value: 'dD', label: 'D.D [Doctor of Divinity]' },
    { value: 'bThMDivIntegrated', label: 'B.Th & M.Div [Integrated Course]' },
    { value: 'mDivMThIntegrated', label: 'M.Div & M.Th [Integrated Course]' },
    { value: 'mDivDMinIntegrated', label: 'M.Div & D.Min [Integrated Course]' },
    { value: 'mThPhDIntegrated', label: 'M.Th & Ph.D [Integrated Course]' }
  ]
};

function Register() {

    const { register, handleSubmit, setValue } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <div className='register'>
      <form className="my-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 style={
        {
          width:'100%',
          textAlign: 'center',
          marginBottom:"10px"
        }
      }>Registration form</h2>
      <div className="form-container">
        <div className="leftcolumn">
          <div className="form-group">
            <label>First Name *</label>
            <input type="text" placeholder="Enter First Name" {...register('firstName', { required: true })} />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Enter Last Name" {...register('lastName')} />
          </div>
          <div className="form-group">
            <label>Mobile No *</label>
            <input type="tel" placeholder="Enter Mobile Number" {...register('mobileNo', { required: true })} />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="Enter email address" {...register('email', { required: true })} />
          </div>
          <div className="form-group">
            <label>Marital Status *</label>
            <Select
              options={options.maritalStatus}
              onChange={(option) => setValue('maritalStatus', option.value)}
            />
          </div>
          <div className="form-group">
            <label>DOB *</label>
            <input type="date" {...register('dob', { required: true })} />
          </div>
          <div className="form-group">
            <label>Gender *</label>
            <Select
              options={options.gender}
              onChange={(option) => setValue('gender', option.value)}
            />
          </div>
          <div className="form-group">
            <label>Applying for *</label>
            <Select
              options={options.applyingFor}
              onChange={(option) => setValue('applyingFor', option.value)}
            />
          </div>
          <div className="form-group">
            <label>Educational Qualification *</label>
            <input type="text" placeholder="Enter Educational Qualification" {...register('educationalQualification', { required: true })} />
          </div>
        </div>
        <div className="rightcolumn">
          <div className="form-group">
            <label>Theological Qualification *</label>
            <input type="text" placeholder="Enter Theological Qualification" {...register('theologicalQualification', { required: true })} />
          </div>
          <div className="form-group">
            <label>Present Address *</label>
            <input type="text" placeholder="Enter Present Address" {...register('presentAddress', { required: true })} />
          </div>
          <div className="form-group">
            <label>Ministry Experience *</label>
            <input type="text" placeholder="Enter Ministry Experience" {...register('ministryExperience', { required: true })} />
          </div>
          <div className="form-group">
            <label>Salvation Experience *</label>
            <input type="text" placeholder="Enter Salvation Experience" {...register('salvationExperience', { required: true })} />
          </div>
          <div className="form-group">
            <label>Signature *</label>
            <input type="file" {...register('signature', { required: true })} />
          </div>
          <div className="form-group">
            <label>Passport Size Photo *</label>
            <input type="file" {...register('passportSizePhoto', { required: true })} />
          </div>
          <div className="form-group">
            <label>Education Certificate *</label>
            <input type="file" {...register('educationCertificate', { required: true })} />
          </div>
          <div className="form-group">
            <label>User Name *</label>
            <input type="text" placeholder="Enter username" {...register('userName', { required: true })} />
          </div>
          <div className="form-group">
            <label>Password *</label>
            <input type="password" placeholder="Enter password" {...register('password', { required: true })} />
          </div>
        </div>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  )
}

export default Register;