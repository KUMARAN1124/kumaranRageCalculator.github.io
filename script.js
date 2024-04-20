function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    const birthdate = new Date(birthdateInput);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthdate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInMonths = (currentDate.getMonth() + 1) - (birthdate.getMonth() + 1) +
                        (12 * (currentDate.getFullYear() - birthdate.getFullYear()));
    const ageInYears = currentDate.getFullYear() - birthdate.getFullYear();

    const ageResult = `
        <p>Your Age:</p>
        <p>Years: ${ageInYears}</p>
        <p>Months: ${ageInMonths}</p>
        <p>Days: ${Math.floor(ageInDays)}</p>
        <p>Hours: ${Math.floor(ageInHours)}</p>
        <p>Minutes: ${Math.floor(ageInMinutes)}</p>
        <p>Seconds: ${Math.floor(ageInSeconds)}</p>
    `;

    document.getElementById('result').innerHTML = ageResult;
}