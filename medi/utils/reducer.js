// reducer.js
import { SET_PATIENT_DETAILS, SET_PHONE_NUMBER,SET_PATIENT_FIRST_NAME,SET_PATIENT_LAST_NAME,
    //SET_PATIENT_MOBILENUMBER,
SET_PATIENT_ORCAREGIVER,SET_PATIENT_GENDER,SET_PATIENT_DOB,SET_PATIENT_MARITIAL_STATUS,SET_PATIENT_ALTERNATE_NUMBER,
SET_PATIENT_HOUSE,SET_PATIENT_LOCALITY,SET_PATIENT_CITY,SET_PATIENT_DISTRICT,SET_PATIENT_STATE,SET_PATIENT_PINCODE,
SET_CAREGIVER_FIRST_NAME,SET_CAREGIVER_LAST_NAME,SET_CAREGIVER_MOB_NO,SET_CAREGIVER_RELATION,SET_CAREGIVER_OR_OTHER,
SET_OTHER_FIRST_NAME,SET_OTHER_LAST_NAME,SET_OTHER_MOBILE_NUMBER,SET_OTHER_RELATION,SET_KIN_HOUSE,SET_KIN_LOCALITY,
SET_KIN_CITY,SET_KIN_DISTRICT,SET_KIN_STATE,SET_KIN_PINCODE,SET_TEST_NAME,SET_TEST_DATE,SET_USER_NAME,SET_REPORT} from './actions';

const initialState = {
  phoneNumber: "",
  patientdetails: {name: "Bulbul",phone: "123"},
  pFirstName: "",
  pLastName: "",
  //pMobileNumber: "",
  pOrCaregiver: "",
  pDob: "",
  pGender: "",
  pMaritialStatus: "",
  pAlternateNo: "",
  pHouse: "",
  pLocality: "",
  pCity: "",
  pDisctrict: "",
  pState: "",
  cFirstName: "",
  cLastName: "",
  cMobNo: "",
  cRelation: "",
  careGiverOrOther: "",
  oFirstName: "",
  oLastName: "",
  oMobileNumber: "",
  oRelation: "",
  kinHouse: "",
  kinLocality: "",
  kinCity: "",
  kinDistrict: "",
  kinState: "",
  kinPincode: "",
  testName: "",
  testDate: "",
  userName: "",
  images: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.payload,
    };
    case SET_PATIENT_DETAILS:
        return {
          ...state,
          patientdetails: action.payload,
    };  
    case SET_PATIENT_FIRST_NAME:
        return {
            ...state,
            pFirstName: action.payload,
    }; 
    case SET_PATIENT_LAST_NAME:
        return {
          ...state,
          pLastName: action.payload,
    }; 
    // case SET_PATIENT_MOBILENUMBER:
    //     return {
    //         ...state,
    //         pMobileNumber: action.payload,
    // }; 
    case SET_PATIENT_ORCAREGIVER:
        return {
        ...state,
        pOrCaregiver: action.payload,
    }; 
    case SET_PATIENT_DOB:
        return {
        ...state,
        pDob: action.payload,
    }; 
    case SET_PATIENT_GENDER:
        return {
            ...state,
            pGender: action.payload,
        }; 
    case SET_PATIENT_MARITIAL_STATUS:
        return {
            ...state,
            pMaritialStatus: action.payload,
        }; 
    case SET_PATIENT_ALTERNATE_NUMBER:
        return {
            ...state,
            pAlternateNo: action.payload,
        }; 
    case SET_PATIENT_HOUSE:
        return {
            ...state,
            pHouse: action.payload,
        }; 
    case SET_PATIENT_LOCALITY:
        return {
            ...state,
            pLocality: action.payload,
        };  
    case SET_PATIENT_CITY:
        return {
            ...state,
            pCity: action.payload,
        }; 
    case SET_PATIENT_DISTRICT:
        return {
            ...state,
            pDistrict: action.payload,
        }; 
    case SET_PATIENT_STATE:
        return {
            ...state,
            pState: action.payload,
        };  
    case SET_PATIENT_PINCODE:
        return {
            ...state,
            pPincode: action.payload,
        };  
    case SET_CAREGIVER_FIRST_NAME:
        return {
            ...state,
            cFirstName: action.payload,
        }; 
    case SET_CAREGIVER_LAST_NAME:
        return {
            ...state,
            cLastName: action.payload,
        };
    case SET_CAREGIVER_MOB_NO:
        return {
            ...state,
            cMobNo: action.payload,
        }; 
    case SET_CAREGIVER_RELATION:
        return {
            ...state,
            cRelation: action.payload,
        }; 
    case SET_CAREGIVER_OR_OTHER:
        return {
            ...state,
            careGiverOrOther: action.payload,
        }; 
    case SET_OTHER_FIRST_NAME:
        return {
            ...state,
            oFirstName: action.payload,
        }; 
    case SET_OTHER_LAST_NAME:
        return {
            ...state,
            oLastName: action.payload,
        }; 
    case SET_OTHER_MOBILE_NUMBER:
        return {
            ...state,
            oMobileNumber: action.payload,
        };                 
    case SET_OTHER_RELATION:
        return {
            ...state,
            oRelation: action.payload,
        }; 
    case SET_KIN_HOUSE:
        return {
            ...state,
            kinHouse: action.payload,
        }; 
    case SET_KIN_LOCALITY:
        return {
            ...state,
            kinLocality: action.payload,
        }; 
    case SET_KIN_CITY:
        return {
            ...state,
            kinCity: action.payload,
        }; 
    case SET_KIN_DISTRICT:
        return {
            ...state,
            kinDistrict: action.payload,
        }; 
    case SET_KIN_STATE:
            return {
                ...state,
                kinState: action.payload,
            };
    case SET_KIN_PINCODE:
                return {
                    ...state,
                    kinPincode: action.payload,
                };
    case SET_TEST_NAME: 
                return {
                    ...state,
                    testName: action.payload
                }
    case SET_TEST_DATE: 
                return {
                    ...state,
                    testDate: action.payload
                } 
    case SET_USER_NAME: 
                return {
                    ...state,
                    userName: action.payload
                }   
    case SET_REPORT: 
    console.log("state",state);
                return {
                    ...state,
                    userReport: [...state.images, action.payload]
                }                                                   
    default:
      return state;
  }
};

export default reducer;