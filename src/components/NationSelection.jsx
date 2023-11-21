import { MenuItem, FormControl, Select } from '@mui/material';

const countriesData = [
  { name: 'India', flagUrl: 'https://www.worldometers.info//img/flags/small/tn_in-flag.gif' },
  { name: 'UnitedStates', flagUrl: 'https://www.worldometers.info//img/flags/small/tn_us-flag.gif' },
  { name: 'United Kingdom', flagUrl: 'https://www.worldometers.info//img/flags/small/tn_uk-flag.gif' },
  { name: 'Italy', flagUrl: 'https://www.worldometers.info//img/flags/small/tn_it-flag.gif' },
  { name: 'Australia', flagUrl: 'https://www.worldometers.info//img/flags/small/tn_as-flag.gif' },
  { name: 'Canada', flagUrl: 'https://www.worldometers.info//img/flags/small/tn_ca-flag.gif' },
  { name: 'New Zealand', flagUrl: 'https://www.worldometers.info//img/flags/small/tn_nz-flag.gif' },
  { name: 'Russia', flagUrl: 'https://www.worldometers.info//img/flags/small/tn_rs-flag.gif' }

];

const CountryDropdown = ({selectedCountry, setSelectedCountry}) => {
  

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
    console.log(event.target.value);
  };

  return (
    <FormControl>
      <Select
        value={selectedCountry}
        onChange={handleChange}
        displayEmpty
        renderValue={(value) => (
          <span>
            {value ? (
              <img
                src={countriesData.find((country) => country.name === value).flagUrl}
                alt={`${value} flag`}
                style={{ width: '24px', height: 'auto', marginRight: '8px' }}
              />
            ) : (
              'Select Country'
            )}
            {value}
          </span>
        )}
      >
        {countriesData.map((country, index) => (
          <MenuItem key={index} value={country.name}>
            <img
              src={country.flagUrl}
              alt={`${country.name} flag`}
              style={{ width: '24px', height: 'auto', marginRight: '8px' }}
            />
            {country.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountryDropdown;