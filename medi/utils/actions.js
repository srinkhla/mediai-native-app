// actions.js
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
const username = localStorage.getItem('userName')

export const SET_PATIENT_DETAILS = 'SET_PATIENT_DETAILS';
export const SET_PATIENT_FIRST_NAME = 'SET_PATIENT_FIRST_NAME';
export const SET_PATIENT_LAST_NAME = 'SET_PATIENT_LAST_NAME';
// export const SET_PATIENT_MOBILENUMBER = 'SET_PATIENT_MOBILENUMBER';
export const SET_PATIENT_ORCAREGIVER = 'SET_PATIENT_ORCAREGIVER';
export const SET_PATIENT_GENDER = 'SET_PATIENT_GENDER';
export const SET_PATIENT_DOB = 'SET_PATIENT_DOB';
export const SET_PATIENT_AGE = 'SET_PATIENT_AGE';

export const SET_PATIENT_MARITIAL_STATUS = 'SET_PATIENT_MARITIAL_STATUS';
export const SET_PATIENT_ALTERNATE_NUMBER = 'SET_PATIENT_ALTERNATE_NUMBER';
export const SET_PATIENT_HOUSE = 'SET_PATIENT_HOUSE';
export const SET_PATIENT_LOCALITY = 'SET_PATIENT_LOCALITY';
export const SET_PATIENT_CITY = 'SET_PATIENT_CITY';
export const SET_PATIENT_DISTRICT = 'SET_PATIENT_DISTRICT';
export const SET_PATIENT_STATE = 'SET_PATIENT_STATE';
export const SET_PATIENT_PINCODE = 'SET_PATIENT_PINCODE';
export const SET_CAREGIVER_FIRST_NAME = 'SET_CAREGIVER_FIRST_NAME';
export const SET_CAREGIVER_LAST_NAME = 'SET_CAREGIVER_LAST_NAME';
export const SET_CAREGIVER_MOB_NO = 'SET_CAREGIVER_MOB_NO';
export const SET_CAREGIVER_RELATION = 'SET_CAREGIVER_RELATION';
export const SET_CAREGIVER_OR_OTHER = 'SET_CAREGIVER_OR_OTHER';
export const SET_OTHER_FIRST_NAME = 'SET_OTHER_FIRST_NAME';
export const SET_OTHER_LAST_NAME = 'SET_OTHER_LAST_NAME';
export const SET_OTHER_MOBILE_NUMBER = 'SET_OTHER_MOBILE_NUMBER';
export const SET_OTHER_RELATION = 'SET_OTHER_RELATION';
export const SET_KIN_HOUSE = 'SET_KIN_HOUSE';
export const SET_KIN_LOCALITY = 'SET_KIN_LOCALITY';
export const SET_KIN_CITY = 'SET_KIN_CITY';
export const SET_KIN_DISTRICT = 'SET_KIN_DISTRICT';
export const SET_KIN_STATE = 'SET_KIN_STATE';
export const SET_KIN_PINCODE = 'SET_KIN_PINCODE';

export const SET_TEST_NAME= 'SET_TEST_NAME';
export const SET_TEST_DATE= 'SET_TEST_DATE';
export const SET_USER_NAME= 'SET_USER_NAME';
export const SET_REPORT= 'SET_REPORT';

//export const SET_TEST_NAME= 'SET_TEST_NAME';
export const setPhoneNumber = (phoneNumber) => ({
  type: SET_PHONE_NUMBER,
  payload: phoneNumber,
});
export const setPatientDetails = (patientdetails) => ({
    type: SET_PATIENT_DETAILS,
    payload: patientdetails,
});
export const setPatientFirstName = (pFirstName) => ({
    type: SET_PATIENT_FIRST_NAME,
    payload: pFirstName,
});
export const setPatientLastName = (pLastName) => ({
    type: SET_PATIENT_LAST_NAME,
    payload: pLastName,
});
// export const setPatientMobileNumber = (pMobileNumber) => ({
//     type: SET_PATIENT_MOBILENUMBER,
//     payload: pMobileNumber,
// });
export const setPatientOrCareGiver = (pOrCaregiver) => ({
    type: SET_PATIENT_ORCAREGIVER,
    payload: pOrCaregiver,
});
export const setPatientGender = (pGender) => ({
    type: SET_PATIENT_GENDER,
    payload: pGender,
});
export const setPatientDob = (pDob) => ({
    type: SET_PATIENT_DOB,
    payload: pDob,
});
export const setPatientAge = (pAge) => ({
    type: SET_PATIENT_AGE,
    payload: pAge,
});

export const setPatientMaritialStatus = (pMaritialStatus) => ({
    type: SET_PATIENT_MARITIAL_STATUS,
    payload: pMaritialStatus,
});
export const setPatientAlternateNumber = (pAlternateNo) => ({
    type: SET_PATIENT_ALTERNATE_NUMBER,
    payload: pAlternateNo,
});
export const setPatientHouse = (pHouse) => ({
    type: SET_PATIENT_HOUSE,
    payload: pHouse,
});
export const setPatientLocality = (pLocality) => ({
    type: SET_PATIENT_LOCALITY,
    payload: pLocality,
});
export const setPatientCity = (pCity) => ({
    type: SET_PATIENT_CITY,
    payload: pCity,
});
export const setPatientDistrict = (pDistrict) => ({
    type: SET_PATIENT_DISTRICT,
    payload: pDistrict,
});
export const setPatientState = (pState) => ({
    type: SET_PATIENT_STATE,
    payload: pState,
});
export const setPatientPincode = (pPincode) => ({
    type: SET_PATIENT_PINCODE,
    payload: pPincode,
});

export const setCareFirstName = (cFirstName) => ({
    type: SET_CAREGIVER_FIRST_NAME,
    payload: cFirstName,
});
export const setCareLastName = (cLastName) => ({
    type: SET_CAREGIVER_LAST_NAME,
    payload: cLastName,
});
export const setCareMobNo = (cMobNo) => ({
    type: SET_CAREGIVER_MOB_NO,
    payload: cMobNo,
});
export const setCareRelation = (cRelation) => ({
    type: SET_CAREGIVER_RELATION,
    payload: cRelation,
});
export const setCareOrOther = (careGiverOrOther) => ({
    type: SET_CAREGIVER_OR_OTHER,
    payload: careGiverOrOther,
});
export const setOtherFirstName = (oFirstName) => ({
    type: SET_OTHER_FIRST_NAME,
    payload: oFirstName,
});
export const setOtherLastName = (oLastName) => ({
    type: SET_OTHER_LAST_NAME,
    payload: oLastName,
});
export const setOtherMobNo = (oMobileNumber) => ({
    type: SET_OTHER_MOBILE_NUMBER,
    payload: oMobileNumber,
});
export const setOtherRelation = (oRelation) => ({
    type: SET_OTHER_RELATION,
    payload: oRelation,
});
export const setKinHouse = (kinHouse) => ({
    type: SET_KIN_HOUSE,
    payload: kinHouse,
});
export const setKinLocality = (kinLocality) => ({
    type: SET_KIN_LOCALITY,
    payload: kinLocality,
});
export const setKinCity = (kinCity) => ({
    type: SET_KIN_CITY,
    payload: kinCity,
});
export const setKinDistrict = (kinDistrict) => ({
    type: SET_KIN_DISTRICT,
    payload: kinDistrict,
});
export const setKinState = (kinState) => ({
    type: SET_KIN_STATE,
    payload: kinState,
});
export const setKinPincode = (kinPincode) => ({
    type: SET_KIN_PINCODE,
    payload: kinPincode,
});
export const setTestName = (testName) => ({
    type: SET_TEST_NAME,
    payload: testName,
});
export const setTestdate = (testDate) => ({
    type: SET_TEST_DATE,
    payload: testDate,
});
export const setUserName = (userName) => ({
    type: SET_USER_NAME,
    payload: username,
});
export const setReport = (userReport) => ({
    type: SET_REPORT,
    payload: userReport,
});

