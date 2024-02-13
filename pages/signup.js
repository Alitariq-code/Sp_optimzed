import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useRouter } from 'next/router';

const Signup = () => {
  const router = useRouter();
  const [userType, setUserType] = useState('individual');
  const [error, setError] = useState('');
  const [file, setFile] = useState(null);
  const [formFields, setFormFields] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    country: null,
    city: null,
    state: null,
    Contact_Number: '',
    Organization: '',
    Address: '',
    Upload_credentials: file,
    // Add other organization fields here
  });
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    setFile(selectedFile);
  };
  async function submitHandler() {
    setError('');
    let formData;
    if (file) {
      formData = new FormData();
      formData.append('file', file);
    }
    try {
      const {
        first_name,
        last_name,
        email,
        password,
        country,
        // city,
        // state,
        // Contact_Number,
        // Organization,
        // Address,
        // Upload_credentials,
      } = formFields;
      // console.log(
      //   city.value,
      //   state.value,
      //   Contact_Number,
      //   Organization,
      //   Address
      // );
      // Check if required fields are not empty
      if (!first_name || !last_name || !email || !password || !country) {
        console.error('Please fill in all required fields.');
        return;
      }

      // Your backend API endpoint URL
      const apiUrl = 'http://178.16.142.39:8000/api/v1/signup/';

      // Data to be sent in the request body
      const cutomUser = {
        first_name,
        last_name,
        email,
        password,
        country: country.value, // Assuming country is an object with 'value' property
      };
      // const organizationUser = {
      //   first_name,
      //   last_name,
      //   email,
      //   password,
      //   country: country.value,
      //   city: city.value,
      //   state: state.value,
      //   Contact_Number,
      //   Organization,
      //   Address,
      //   Upload_credentials,
      // };
      // // let object = userType === 'organization' ? organizationUser : cutomUser;
      // let object;
      // if (userType === 'organization') {
      //   object = organizationUser;
      // } else {
      //   object = cutomUser;
      // }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cutomUser),
      });
      console.log(response);

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Parse the response JSON if needed
        const responseData = await response.json();
        console.log('API Response:', responseData);
        router.push('/');

        // Optionally, you can perform additional actions based on the response
      } else {
        // If the response status is not ok, throw an error
        const errorData = await response.json();
        // console.log(errorData);

        if (errorData.password && errorData.password.length > 0) {
          console.log(errorData.password[0]);
          console.log(typeof errorData.password[0]);
          const passwordErrorString = errorData.password.join(' ');
          console.log(passwordErrorString); // Log the concatenated string
          setError(passwordErrorString); // Set the concatenated string as the error
        } else if (errorData.email && errorData.email.length > 0) {
          setError(errorData.email[0]);
        } else {
          // Handle other errors
          setError('An error occurred');
        }

        throw new Error(
          `API request failed: ${response.statusText}. ${errorData.detail}`
        );
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  }

  const countriesApi = 'https://restcountries.com/v3.1/all';

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  async function fetchStates(country) {
    const apiUrl = 'https://countriesnow.space/api/v0.1/countries/states';
    const requestData = {
      country: country,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      // Process the data here
      const data = await response.json();

      return data.data.states;
    } catch (error) {
      console.error('Error:', error);

      // Handle errors or return an error object
      throw new Error('Failed to fetch states');
    }
  }
  async function fetchCities(country) {
    const apiUrl = 'https://countriesnow.space/api/v0.1/countries/cities';

    // Create a JSON object with the required parameter
    const requestData = {
      country: country,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      return data.data;
    } catch (error) {
      console.error('Error:', error);

      // Handle errors or return an error object
      throw new Error('Failed to fetch cities');
    }
  }

  useEffect(() => {
    // Fetch countries
    fetch(countriesApi)
      .then((response) => response.json())
      .then((data) => {
        console.log('countries', data);

        // Log the number of objects in the array
        console.log('Number of countries:', data.length);

        let countryOptions = [];
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          let newData = {};
          newData['label'] = element.name.common;
          newData['value'] = element.name.common;
          countryOptions.push(newData);
        }

        setCountries(countryOptions);
        console.log(countries.length);
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, [countriesApi]);

  const handleCountryChange = (selectedOption) => {
    setFormFields((prevFields) => ({
      ...prevFields,
      country: selectedOption,
      city: null, // Reset city when changing country
    }));

    // Fetch cities for the selected country
    if (selectedOption) {
      console.log(countries);

      if (userType === 'organization') {
        const cites = fetchCities(selectedOption.value);
        const sates = fetchStates(selectedOption.value);
        sates
          .then((data) => {
            console.log(data);
            let sateOptions = [];
            for (let i = 0; i < data.length; i++) {
              const element = data[i];
              let newData = {};
              newData['label'] = element.name;
              newData['value'] = element.name;
              //   console.log(newData);
              sateOptions.push(newData);
              // console.log(countries);
            }
            console.log('satte', sateOptions);
            setStates(sateOptions);
          })
          .catch((err) => {
            console.log(err);
          });

        cites
          .then((data) => {
            let citesOptions = [];
            for (let i = 0; i < data.length; i++) {
              const element = data[i];
              let newData = {};
              newData['label'] = element;
              newData['value'] = element;

              citesOptions.push(newData);
            }
            console.log('cites', citesOptions);
            setCities(citesOptions);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      setCities([]);
    }
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };
  const handleCityChange = (selectedOption) => {
    setFormFields((prevFields) => ({
      ...prevFields,
      city: selectedOption,
    }));
  };

  const handleStateChange = (selectedOption) => {
    setFormFields((prevFields) => ({
      ...prevFields,
      state: selectedOption,
    }));
  };

  return (
    <div
      style={{
        textAlign: 'center',
        maxWidth: '400px',
        margin: 'auto',
        color: 'white',
      }}
    >
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Signup</h2>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '20px' }}>
          <input
            type="radio"
            name="userType"
            value="individual"
            checked={userType === 'individual'}
            onChange={() => handleUserTypeChange('individual')}
          />
          Individual
        </label>
        <label>
          <input
            type="radio"
            name="userType"
            value="organization"
            checked={userType === 'organization'}
            onChange={() => handleUserTypeChange('organization')}
          />
          Organization
        </label>
      </div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <label style={{ marginBottom: '15px' }}>
          FirstName:
          <input
            type="text"
            name="first_name"
            value={formFields.first_name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label style={{ marginBottom: '15px' }}>
          LastName:
          <input
            type="text"
            name="last_name"
            value={formFields.last_name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label style={{ marginBottom: '15px' }}>
          Email:
          <input
            type="email"
            name="email"
            value={formFields.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label style={{ marginBottom: '15px' }}>
          Password:
          <input
            type="password"
            name="password"
            value={formFields.password}
            onChange={handleInputChange}
            required
          />
        </label>

        <label style={{ marginBottom: '15px' }}>
          Country:
          <Select
            value={formFields.country}
            onChange={handleCountryChange}
            options={countries}
            styles={{
              control: (styles) => ({
                ...styles,
                backgroundColor: 'black',
                color: 'white',
              }),
              option: (styles, { isFocused, isSelected }) => ({
                ...styles,
                backgroundColor: isSelected
                  ? 'blue'
                  : isFocused
                  ? 'gray'
                  : 'black',
                color: isSelected ? 'white' : 'white',
              }),
              singleValue: (styles) => ({
                ...styles,
                color: 'white',
              }),
            }}
            required
          />
        </label>

        {userType === 'organization' && (
          <div style={{ marginBottom: '20px' }}>
            <label style={{ marginBottom: '15px' }}>
              Number::::::
              <input
                type="text"
                name="Contact_Number"
                value={formFields.Contact_Number}
                onChange={handleInputChange}
              />
            </label>
            <label style={{ marginBottom: '15px' }}>
              Organization:
              <input
                type="text"
                name="Organization"
                value={formFields.Organization}
                onChange={handleInputChange}
              />
            </label>
            <br></br>
            <label style={{ marginBottom: '15px' }}>
              Address:
              <input
                type="text"
                name="Address"
                value={formFields.Address}
                onChange={handleInputChange}
              />
            </label>
            <br></br>
            <label style={{ marginBottom: '15px' }}>
              City:
              <Select
                options={cities}
                styles={{
                  control: (styles) => ({
                    ...styles,
                    backgroundColor: 'black',
                    color: 'white',
                  }),
                  option: (styles, { isFocused, isSelected }) => ({
                    ...styles,
                    backgroundColor: isSelected
                      ? 'blue'
                      : isFocused
                      ? 'gray'
                      : 'black',
                    color: isSelected ? 'white' : 'white',
                  }),
                  singleValue: (styles) => ({
                    ...styles,
                    color: 'white',
                  }),
                }}
                onChange={handleCityChange}
              />
            </label>
            <label style={{ marginBottom: '15px' }}>
              state
              <Select
                options={states}
                styles={{
                  control: (styles) => ({
                    ...styles,
                    backgroundColor: 'black',
                    color: 'white',
                  }),
                  option: (styles, { isFocused, isSelected }) => ({
                    ...styles,
                    backgroundColor: isSelected
                      ? 'blue'
                      : isFocused
                      ? 'gray'
                      : 'black',
                    color: isSelected ? 'white' : 'white',
                  }),
                  singleValue: (styles) => ({
                    ...styles,
                    color: 'white',
                  }),
                }}
                onChange={handleStateChange}
              />
            </label>
            <div>
              <h2>Upload file</h2>
              <input type="file" onChange={handleFileChange} />
            </div>
          </div>
        )}
        <p>{error}</p>
        <button
          type="button" // Add this line to explicitly set the button type
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
          onClick={submitHandler}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
