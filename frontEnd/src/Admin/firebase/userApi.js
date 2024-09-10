import { addDoc, collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db } from "./firebase";

export const addUser = async (data) => {
    try {
        const signatureFile = data.signature[0];
        const signatureRef = ref(storage, `signatures/${signatureFile.name}`);
        await uploadBytes(signatureRef, signatureFile);
        const signatureURL = await getDownloadURL(signatureRef);

        const passportPhotoFile = data.passportSizePhoto[0];
        const passportPhotoRef = ref(storage, `photos/${passportPhotoFile.name}`);
        await uploadBytes(passportPhotoRef, passportPhotoFile);
        const passportPhotoURL = await getDownloadURL(passportPhotoRef);

        const educationCertFile = data.educationCertificate[0];
        const educationCertRef = ref(storage, `certificates/${educationCertFile.name}`);
        await uploadBytes(educationCertRef, educationCertFile);
        const educationCertURL = await getDownloadURL(educationCertRef);

        await addDoc(collection(db, 'users'), {
            firstName: data.firstName,
            lastName: data.lastName,
            mobileNo: data.mobileNo,
            email: data.email,
            maritalStatus: data.maritalStatus,
            dob: data.dob,
            gender: data.gender,
            applyingFor: data.applyingFor,
            educationalQualification: data.educationalQualification,
            theologicalQualification: data.theologicalQualification,
            presentAddress: data.presentAddress,
            ministryExperience: data.ministryExperience,
            salvationExperience: data.salvationExperience,
            signatureURL: signatureURL,
            passportPhotoURL: passportPhotoURL,
            educationCertURL: educationCertURL,
            joinedDate: Date.now()
        });

        console.log('Data successfully saved to Firestore and files uploaded to Storage!');
        return true
    } catch (error) {
        console.error('Error saving data or uploading files:', error);
    }
};

export const getAllUsers = async () => {
    try {
        const data = await getDocs(collection(db, 'users'))
        console.log(data?.docs)
        const users = data?.docs?.map((doc) => { return { id: doc.id, ...doc.data() } })
        return users
    } catch (error) {
        console.log(error)
    }
    return docRef
}
