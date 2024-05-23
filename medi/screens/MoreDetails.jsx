import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, CheckBox, StyleSheet, Picker, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assuming you're using React Navigation for navigation
import { useDispatch, useSelector } from 'react-redux';
import back from '../assets/images/back.svg'; // Ensure you have the image in the correct path

import {
  selectCFirstName,
  selectCLastName,
  selectCMobNo,
  selectCRelation,
  selectPAge,
  selectPAlternateNo,
  selectPatientDetails,
  selectPCity,
  selectPDistrict,
  selectPDob,
  selectPFirstName,
  selectPGender,
  selectPhoneNumber,
  selectPHouse,
  selectPLastName,
  selectPLocality,
  selectPMaritialStatus,
  selectPOrCaregiver,
  selectPPincode,
  selectPState,
} from '../utils/selector';
import { setUserName } from '../utils/actions';

const MoreDetails = ({ formData }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let phoneNumber = useSelector(selectPhoneNumber);

  const patientDetails = useSelector(selectPatientDetails);
  const pFirstName = useSelector(selectPFirstName);
  const pLastName = useSelector(selectPLastName);
  const pOrCaregiver = useSelector(selectPOrCaregiver);
  const pDob = useSelector(selectPDob);
  const pAge = useSelector(selectPAge);
  const pGender = useSelector(selectPGender);
  const pMaritialStatus = useSelector(selectPMaritialStatus);
  const pAlternateNo = useSelector(selectPAlternateNo);
  const pHouse = useSelector(selectPHouse);
  const pLocality = useSelector(selectPLocality);
  const pCity = useSelector(selectPCity);
  const pDistrict = useSelector(selectPDistrict);
  const pState = useSelector(selectPState);
  const pPincode = useSelector(selectPPincode);
  const pCFirstName = useSelector(selectCFirstName);
  const pCLastName = useSelector(selectCLastName);
  const pMobNo = useSelector(selectCMobNo);

  const cFirstName = useSelector(selectCFirstName);
  const cLastName = useSelector(selectCLastName);
  const cMobNo = useSelector(selectCMobNo);
  const cRelation = useSelector(selectCRelation);

  const [otherFormData, setOtherFormData] = useState({
    caregiverOrOther: '',
    otherFirstName: '',
    otherLastName: '',
    othermobileNumber: '',
    otherRelation: '',
    kinHouse: '',
    kinLocality: '',
    kinCity: '',
    kinDistrict: '',
    kinState: '',
    kinPincode: '',
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleCheckboxChange = (newValue) => {
    setIsChecked(newValue);
  };

  useEffect(() => {
    console.log("pFirstName---", pFirstName);
    console.log("pLastName---", pLastName);
    phoneNumber = localStorage.getItem('phoneNumber');
    console.log("pMobileNumber---", phoneNumber);
    console.log("pOrCaregiver---", pOrCaregiver, pDob);
  }, []);

  const handleChange = (name, value) => {
    setOtherFormData({ ...otherFormData, [name]: value });
  };

  const backButtonHandler = () => {
    navigation.navigate('RegistrationForm');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs here (e.g., check if all inputs are filled)
    // const otp = inputs.join('');

    // Make API call to verify OTP
    // Example: api.verifyOTP(otp)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   })
  };

  const handleKeyPress = (event) => {
    const keyCode = event.nativeEvent.key;
    // Allow only numeric input (0-9) and certain special keys like Backspace, Delete, etc.
    if (!/[0-9]/.test(keyCode) && keyCode !== 'Backspace') {
      event.preventDefault();
    }
  };

  const disableCheck = () => {
    if (isChecked && (otherFormData.caregiverOrOther === 'Same as Care giver' || (otherFormData.kinHouse.trim() === '' ||
      otherFormData.kinLocality.trim() === '' || otherFormData.kinCity.trim() === '' || otherFormData.kinState.trim() === '' ||
      otherFormData.kinState.trim() === '' || otherFormData.kinPincode.trim() === ''))) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const registerFormSubmit = () => {
    const fullName = `${pFirstName} ${pLastName}`;
    localStorage.setItem('fullName', fullName);
    console.log("form details-", otherFormData);
    if (true) {
      fetch('http://34.131.227.229:8081/patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number: phoneNumber,
          first_name: pFirstName,
          last_name: pLastName,
          date_of_birth: pDob,
          age: pAge,
          gender: pGender,
          marital_status: pMaritialStatus,
          alternate_mobile_number: pAlternateNo,
          p_house_no: pHouse,
          p_locality: pLocality,
          p_pin_code: pPincode,
          p_state: pState,
          p_city: pCity,
          p_district: pDistrict,
          address: pHouse + pLocality + pState + pCity + pDistrict,
          care_giver_first_name: cFirstName,
          care_giver_last_name: cLastName,
          care_giver_mobile_number: cMobNo,
          care_giver_relation: cRelation,
          c_house_no: otherFormData.kinHouse,
          c_locality: otherFormData.kinLocality,
          c_pin_code: otherFormData.kinPincode,
          c_state: otherFormData.kinState,
          c_city: otherFormData.kinCity,
          c_district: otherFormData.kinDistrict,
        }),
        referrerPolicy: 'strict-origin-when-cross-origin',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          localStorage.setItem('userName', data.userName);
          dispatch(setUserName(data.userName));
          navigation.navigate('FirstPasswordCreation');
          console.log(data);
        })
        .catch(error => {
          console.error('There was a problem with the login request:', error);
        });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={backButtonHandler}>
          <Image source={back} style={styles.backImage} />
        </TouchableOpacity>
        <Text style={styles.title}>Medi.ai</Text>
      </View>
      <Text style={styles.subtitle}>Please share more details</Text>
      <Text style={styles.sectionTitle}>Patient's Next of Kin</Text>
      <View style={styles.radioGroup}>
        <View style={styles.radioButton}>
          <RadioButton
            value="Same as Care giver"
            status={otherFormData.caregiverOrOther === 'Same as Care giver' ? 'checked' : 'unchecked'}
            onPress={() => handleChange('caregiverOrOther', 'Same as Care giver')}
          />
          <Text>Same as Care giver</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="Other"
            status={otherFormData.caregiverOrOther === 'Other' ? 'checked' : 'unchecked'}
            onPress={() => handleChange('caregiverOrOther', 'Other')}
          />
          <Text>Other</Text>
        </View>
      </View>

      {otherFormData.caregiverOrOther === 'Other' && (
        <View>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={otherFormData.otherFirstName}
              onChangeText={(value) => handleChange('otherFirstName', value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={otherFormData.otherLastName}
              onChangeText={(value) => handleChange('otherLastName', value)}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="numeric"
            maxLength={10}
            value={otherFormData.othermobileNumber}
            onChangeText={(value) => handleChange('othermobileNumber', value)}
          />
          <Picker
            selectedValue={otherFormData.otherRelation}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => handleChange('otherRelation', itemValue)}
          >
            <Picker.Item label="Relationship with Kin" value="" />
            <Picker.Item label="Spouse" value="spouse" />
            <Picker.Item label="Son" value="son" />
            <Picker.Item label="Daughter" value="daughter" />
            <Picker.Item label="Cousin" value="cousin" />
            <Picker.Item label="Brother-in-law" value="brotherInLaw" />
            <Picker.Item label="Sister-in-law" value="sisterInLaw" />
            <Picker.Item label="Father" value="father" />
            <Picker.Item label="Mother" value="mother" />
            <Picker.Item label="Brother" value="brother" />
            <Picker.Item label="Sister" value="sister" />
            <Picker.Item label="Friend" value="friend" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>
      )}

      <Text style={styles.sectionTitle}>Kin's Address</Text>
      <TextInput
        style={styles.input}
        placeholder="House No, Road or Street"
        value={otherFormData.kinHouse}
        onChangeText={(value) => handleChange('kinHouse', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Locality"
        value={otherFormData.kinLocality}
        onChangeText={(value) => handleChange('kinLocality', value)}
      />
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="City"
          value={otherFormData.kinCity}
          onChangeText={(value) => handleChange('kinCity', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="District"
          value={otherFormData.kinDistrict}
          onChangeText={(value) => handleChange('kinDistrict', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="State"
          value={otherFormData.kinState}
          onChangeText={(value) => handleChange('kinState', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Pincode"
          keyboardType="numeric"
          maxLength={6}
          value={otherFormData.kinPincode}
          onChangeText={(value) => handleChange('kinPincode', value)}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={handleCheckboxChange}
        />
        <Text style={styles.checkboxLabel}>I agree to the Terms & Conditions</Text>
      </View>
      <Button
        title="Submit"
        onPress={registerFormSubmit}
        disabled={!isChecked || (otherFormData.caregiverOrOther === 'Same as Care giver' && (otherFormData.kinHouse.trim() === '' ||
          otherFormData.kinLocality.trim() === '' || otherFormData.kinCity.trim() === '' || otherFormData.kinState.trim() === '' ||
          otherFormData.kinState.trim() === '' || otherFormData.kinPincode.trim() === ''))}
        color="#008080"
      />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.laterText}>Do it Later</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backImage: {
    height: 20,
    width: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#008080',
    textAlign: 'center',
    flex: 1,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  radioGroup: {
    flexDirection: 'row',
    marginTop: 16,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    padding: 8,
    marginTop: 8,
    width: '100%',
  },
  picker: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    marginTop: 8,
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  laterText: {
    color: '#008080',
    textAlign: 'center',
    marginTop: 16,
    textDecorationLine: 'underline',
  },
});

export default MoreDetails;
