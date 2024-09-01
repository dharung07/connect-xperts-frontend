import React, { useState } from 'react';
import '../styles/colors.scss';
import '../styles/index.css';

const StudentForm = () => {
    const [formData, setFormData] = useState({
        studentID: '',
        fullName: '',
        dob: '',
        gender: '',
        department: '',
        yearOfAdmission: '',
        email: '',
        phoneNumber: '',
        currentYear: '',
        cgpa: '',
        honors: '',
        interests: '',
        researchProjects: '',
        internships: '',
        desiredJobRole: '',
        preferredIndustry: '',
        careerAspirations: '',
        skills: '',
        placementStatus: '',
        alumniMentorship: false,
        industryVisits: false,
        workshops: false,
        communicationChannels: '',
        socialMediaProfiles: '',
        extracurricular: '',
        volunteerWork: '',
        hobbies: '',
        languageProficiency: '',
        geographicPreferences: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., sending data to an API or processing it)
        console.log('Form submitted:', formData);
    };

    return (
        <div className='bg-[var(--sky-blue)] p-8'>
            <div className="max-w-3xl mx-auto p-6 bg-[var(--white)] rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-[var(--deep-blue)] mb-6">Student Registration Form</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <fieldset className="border p-4 rounded-lg">
                        <legend className="text-2xl font-semibold text-[var(--deep-blue)]">Basic Information</legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-gray-700">Student ID</label>
                                <input
                                    type="text"
                                    name="studentID"
                                    value={formData.studentID}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Gender</label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700">Institution</label>
                                <input
                                    type="text"
                                    name="institution"
                                    value={formData.department}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Department/Specialization</label>
                                <input
                                    type="text"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Year of Admission</label>
                                <input
                                    type="number"
                                    name="yearOfAdmission"
                                    value={formData.yearOfAdmission}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    required
                                />
                            </div>
                        </div>
                    </fieldset>

                    {/* Academic Information */}
                    <fieldset className="border p-4 rounded-lg">
                        <legend className="text-2xl font-semibold text-[var(--deep-blue)]">Academic Information</legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            
                            <div>
                                <label className="block text-gray-700">Current Year of Study</label>
                                <input
                                    type="text"
                                    name="currentYear"
                                    value={formData.currentYear}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">CGPA/Percentage</label>
                                <input
                                    type="text"
                                    name="cgpa"
                                    value={formData.cgpa}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Academic Honors or Awards</label>
                                <input
                                    type="text"
                                    name="honors"
                                    value={formData.honors}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Areas of Interest</label>
                                <input
                                    type="text"
                                    name="interests"
                                    value={formData.interests}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Research Projects</label>
                                <textarea
                                    name="researchProjects"
                                    value={formData.researchProjects}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    rows="3"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Internships</label>
                                <textarea
                                    name="internships"
                                    value={formData.internships}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    rows="3"
                                />
                            </div>
                        </div>
                    </fieldset>

                    {/* Career Goals and Aspirations */}
                    <fieldset className="border p-4 rounded-lg">
                        <legend className="text-2xl font-semibold text-[var(--deep-blue)]">Career Goals and Aspirations</legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-gray-700">Desired Job Role</label>
                                <input
                                    type="text"
                                    name="desiredJobRole"
                                    value={formData.desiredJobRole}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Preferred Industry</label>
                                <input
                                    type="text"
                                    name="preferredIndustry"
                                    value={formData.preferredIndustry}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Career Aspirations</label>
                                <textarea
                                    name="careerAspirations"
                                    value={formData.careerAspirations}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    rows="3"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Skills and Competencies</label>
                                <textarea
                                    name="skills"
                                    value={formData.skills}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    rows="3"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Placement Status</label>
                                <input
                                    type="text"
                                    name="placementStatus"
                                    value={formData.placementStatus}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                />
                            </div>
                        </div>
                    </fieldset>

                    {/* Engagement and Preferences */}
                    <fieldset className="border p-4 rounded-lg">
                        <legend className="text-2xl font-semibold text-[var(--deep-blue)]">Engagement and Preferences</legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-gray-700">
                                    <input
                                        type="checkbox"
                                        name="alumniMentorship"
                                        checked={formData.alumniMentorship}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Interested in Alumni Mentorship
                                </label>
                            </div>
                            <div>
                                <label className="block text-gray-700">
                                    <input
                                        type="checkbox"
                                        name="industryVisits"
                                        checked={formData.industryVisits}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Interested in Industry Visits
                                </label>
                            </div>
                            <div>
                                <label className="block text-gray-700">
                                    <input
                                        type="checkbox"
                                        name="workshops"
                                        checked={formData.workshops}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Interested in Workshops and Seminars
                                </label>
                            </div>
                            <div>
                                <label className="block text-gray-700">Preferred Communication Channels</label>
                                <input
                                    type="text"
                                    name="communicationChannels"
                                    value={formData.communicationChannels}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Social Media Profiles</label>
                                <input
                                    type="text"
                                    name="socialMediaProfiles"
                                    value={formData.socialMediaProfiles}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                />
                            </div>
                        </div>
                    </fieldset>

                    {/* Additional Fields */}
                    <fieldset className="border p-4 rounded-lg">
                        <legend className="text-2xl font-semibold text-[var(--deep-blue)]">Additional Information (Optional)</legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-gray-700">Extracurricular Activities</label>
                                <textarea
                                    name="extracurricular"
                                    value={formData.extracurricular}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    rows="3"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Volunteer Work</label>
                                <textarea
                                    name="volunteerWork"
                                    value={formData.volunteerWork}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    rows="3"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Hobbies</label>
                                <textarea
                                    name="hobbies"
                                    value={formData.hobbies}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    rows="3"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Language Proficiency</label>
                                <input
                                    type="text"
                                    name="languageProficiency"
                                    value={formData.languageProficiency}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Geographic Preferences</label>
                                <input
                                    type="text"
                                    name="geographicPreferences"
                                    value={formData.geographicPreferences}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                />
                            </div>
                        </div>
                    </fieldset>

                    {/* Submit Button */}
                    <div className="text-center mt-6">
                        <button className='primary-btn'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentForm;
