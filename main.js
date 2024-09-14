var _a;
// Get elements from the DOM
var form = document.getElementById('form');
var resumeDisplay = document.getElementById('resume-display');
var outputName = document.getElementById('output-name');
var outputEmail = document.getElementById('output-email');
var outputPhone = document.getElementById('output-phone');
var outputAddress = document.getElementById('output-address');
var outputEducation = document.getElementById('output-education');
var outputWorkExperience = document.getElementById('output-work-experience');
var outputSkills = document.getElementById('output-skills');
var outputLinkedIn = document.getElementById('output-linkedin');
var outputGitHub = document.getElementById('output-github');
var outputImage = document.getElementById('output-profile-picture');
var profileImage = document.getElementById('profile-picture');
// Function to handle image preview
profileImage.addEventListener('change', function (event) {
    var _a;
    var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            outputImage.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            outputImage.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }
});
// Form submission handler
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get values from form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var certifications = document.getElementById('certifications').value;
    var linkedIn = document.getElementById('linkedin').value;
    var gitHub = document.getElementById('github').value;
    // Update resume with input values
    outputName.textContent = name;
    outputEmail.textContent = email;
    outputPhone.textContent = phone;
    outputAddress.textContent = address;
    outputEducation.textContent = education;
    outputWorkExperience.textContent = workExperience;
    outputSkills.textContent = skills;
    outputLinkedIn.textContent = linkedIn;
    outputGitHub.textContent = gitHub;
    outputImage.src = URL.createObjectURL(((_a = document.getElementById('profile-picture').files) === null || _a === void 0 ? void 0 : _a[0]) || new Blob());
    // Display the resume
    resumeDisplay.classList.remove('hidden');
});
// Download resume as PDF
(_a = document.getElementById('downloadResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var element = document.getElementById('resume-output');
    if (element) {
        var opt = {
            margin: 1,
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    }
});
