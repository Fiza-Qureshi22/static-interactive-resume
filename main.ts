// Get elements from the DOM
const form = document.getElementById('form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLElement;

const outputName = document.getElementById('output-name') as HTMLElement;
const outputEmail = document.getElementById('output-email') as HTMLElement;
const outputPhone = document.getElementById('output-phone') as HTMLElement;
const outputAddress = document.getElementById('output-address') as HTMLElement;
const outputEducation = document.getElementById('output-education') as HTMLElement;
const outputWorkExperience = document.getElementById('output-work-experience') as HTMLElement;
const outputSkills = document.getElementById('output-skills') as HTMLElement;
const outputLinkedIn = document.getElementById('output-linkedin') as HTMLElement;
const outputGitHub = document.getElementById('output-github') as HTMLElement;
const outputImage = document.getElementById('output-profile-picture') as HTMLImageElement;

const profileImage = document.getElementById('profile-picture') as HTMLInputElement;

// Function to handle image preview
profileImage.addEventListener('change', (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            outputImage.src = e.target?.result as string;
            outputImage.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }
});

// Form submission handler
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Get values from form fields
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const certifications = (document.getElementById('certifications') as HTMLInputElement).value;
    const linkedIn = (document.getElementById('linkedin') as HTMLInputElement).value;
    const gitHub = (document.getElementById('github') as HTMLInputElement).value;

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
    outputImage.src = URL.createObjectURL((document.getElementById('profile-picture') as HTMLInputElement).files?.[0] || new Blob());

    // Display the resume
    resumeDisplay.classList.remove('hidden');
});

// Download resume as PDF
document.getElementById('downloadResume')?.addEventListener('click', () => {
    const element = document.getElementById('resume-output');
    if (element) {
        const opt = {
            margin:       1,
            filename:     'Resume.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    }
});
