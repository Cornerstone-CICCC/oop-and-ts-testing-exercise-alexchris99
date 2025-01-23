// Create two test cases for converting between celsius and fahrenheit
// Test case 1: Converting 30 deg celsius will return 86 deg fahrenheit
// Test case 2: Converting 104 deg fahrenheit will return 40 deg celsius
// Both test cases need to pass

const Converter = require('../src/convertTemp')

const convert = new Converter()

// convert to farenheit
test("convertToFaremheit 30 should be 86",()=>{
    expect(convert.convertToFahrenheit(30)).toBe(86)
})

//convert to celsius
test("convertToCelsius 104 should be 40",() => {
    expect(convert.convertToCelsius(104)).toBe(40)
})
