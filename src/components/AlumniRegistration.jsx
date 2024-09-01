import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/colors.scss';
import '../styles/index.css';

const AlumniForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        gender: '',
        maritalStatus: '',
        permanentAddress: '',
        currentAddress: '',
        phoneMobile: '',
        phoneHome: '',
        phoneOffice: '',
        email: '',
        department: '',
        yearOfAdmission: '',
        yearOfGraduation: '',
        degreeEarned: '',
        honors: '',
        certifications: '',
        jobTitle: '',
        companyName: '',
        industry: '',
        location: '',
        jobDescription: '',
        salaryRange: '',
        employmentStatus: '',
        desiredCareerPath: '',
        areasOfExpertise: '',
        skills: '',
        interestInActivities: false,
        preferredCommunication: '',
        willingToMentor: false,
        volunteerInterests: '',
        donationHistory: '',
        socialMediaProfiles: '',
        militaryService: '',
        geographicPreferences: '',
        alumniChapterAffiliation: '',
        givingPreferences: '',
        familyInformation: '',
        technicalSkills: '',
        industrySpecialization: '',
        jobRoles: '',
        companySize: ''
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
        // Handle form submission logic
        console.log('Form submitted:', formData);
    };

    return (
        <div className='bg-[var(--sky-blue)] p-8'>
            <div className="flex items-center justify-center min-h-screen">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-[var(--dull-white)] p-8 rounded-lg shadow-lg w-full max-w-4xl"
                >
                    <h1 className="text-3xl font-bold text-[var(--deep-blue)] mb-6">Alumni Form Submission</h1>
                    <form onSubmit={handleSubmit}>
                        {/* Basic Demographic Information */}
                        <fieldset className="border p-4 rounded-lg mb-4">
                            <legend className="text-2xl font-semibold text-[var(--deep-blue)]">Basic Demographic Information</legend>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Gender</label>
                                    <input
                                        type="text"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Marital Status</label>
                                    <input
                                        type="text"
                                        name="maritalStatus"
                                        value={formData.maritalStatus}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Permanent Address</label>
                                    <input
                                        type="text"
                                        name="permanentAddress"
                                        value={formData.permanentAddress}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Current Address</label>
                                    <input
                                        type="text"
                                        name="currentAddress"
                                        value={formData.currentAddress}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Phone Number (Mobile)</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phoneMobile}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                        
                               
                                <div>
                                    <label className="block text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                            </div>
                        </fieldset>

                        {/* Educational Background */}
                        <fieldset className="border p-4 rounded-lg mb-4">
                            <legend className="text-2xl font-semibold text-[var(--deep-blue)]">Educational Background</legend>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block text-gray-700">Department/Specialization</label>
                                    <input
                                        type="text"
                                        name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Instituion</label>
                                    <input
                                        type="text"
                                        name="instituion"
                                        value={formData.yearOfAdmission}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Year of Graduation</label>
                                    <input
                                        type="text"
                                        name="yearOfGraduation"
                                        value={formData.yearOfGraduation}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Degree Earned</label>
                                    <input
                                        type="text"
                                        name="degreeEarned"
                                        value={formData.degreeEarned}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Honors or Awards Received</label>
                                    <input
                                        type="text"
                                        name="honors"
                                        value={formData.honors}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Relevant Certifications</label>
                                    <input
                                        type="text"
                                        name="certifications"
                                        value={formData.certifications}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                            </div>
                        </fieldset>

                        {/* Professional Information */}
                        <fieldset className="border p-4 rounded-lg mb-4">
                            <legend className="text-2xl font-semibold text-[var(--deep-blue)]">Professional Information</legend>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block text-gray-700">Current Job Title</label>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Company Name</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Industry</label>
                                    <input
                                        type="text"
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Job Description</label>
                                    <textarea
                                        name="jobDescription"
                                        value={formData.jobDescription}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                        rows="4"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block text-gray-700">Salary Range (Optional)</label>
                                    <input
                                        type="text"
                                        name="salaryRange"
                                        value={formData.salaryRange}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Employment Status</label>
                                    <input
                                        type="text"
                                        name="employmentStatus"
                                        value={formData.employmentStatus}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Desired Career Path</label>
                                    <input
                                        type="text"
                                        name="desiredCareerPath"
                                        value={formData.desiredCareerPath}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Areas of Expertise</label>
                                    <input
                                        type="text"
                                        name="areasOfExpertise"
                                        value={formData.areasOfExpertise}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Skills</label>
                                    <input
                                        type="text"
                                        name="skills"
                                        value={formData.skills}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                            </div>
                        </fieldset>

                        {/* Engagement and Preferences */}
                        <fieldset className="border p-4 rounded-lg mb-4">
                            <legend className="text-2xl font-semibold text-[var(--deep-blue)]">Engagement and Preferences</legend>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block text-gray-700">Interest in Alumni Activities</label>
                                    <input
                                        type="checkbox"
                                        name="interestInActivities"
                                        checked={formData.interestInActivities}
                                        onChange={handleChange}
                                        className="mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Preferred Communication Channels</label>
                                    <input
                                        type="text"
                                        name="preferredCommunication"
                                        value={formData.preferredCommunication}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Willingness to Mentor Students</label>
                                    <input
                                        type="checkbox"
                                        name="willingToMentor"
                                        checked={formData.willingToMentor}
                                        onChange={handleChange}
                                        className="mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Volunteer Interests</label>
                                    <input
                                        type="text"
                                        name="volunteerInterests"
                                        value={formData.volunteerInterests}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Donation History (if applicable)</label>
                                    <input
                                        type="text"
                                        name="donationHistory"
                                        value={formData.donationHistory}
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

                        {/* Additional Fields (Optional) */}
                        <fieldset className="border p-4 rounded-lg mb-4">
                            <legend className="text-2xl font-semibold text-[var(--deep-blue)]">Additional Fields (Optional)</legend>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block text-gray-700">Military Service</label>
                                    <input
                                        type="text"
                                        name="militaryService"
                                        value={formData.militaryService}
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
                                <div>
                                    <label className="block text-gray-700">Alumni Chapter Affiliation</label>
                                    <input
                                        type="text"
                                        name="alumniChapterAffiliation"
                                        value={formData.alumniChapterAffiliation}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Giving Preferences</label>
                                    <input
                                        type="text"
                                        name="givingPreferences"
                                        value={formData.givingPreferences}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Family Information</label>
                                    <input
                                        type="text"
                                        name="familyInformation"
                                        value={formData.familyInformation}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                            </div>
                        </fieldset>

                        {/* Technical Education Alumni Specific */}
                        <fieldset className="border p-4 rounded-lg mb-4">
                            <legend className="text-2xl font-semibold text-[var(--deep-blue)]">Technical Education Alumni Specific</legend>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block text-gray-700">Technical Skills</label>
                                    <input
                                        type="text"
                                        name="technicalSkills"
                                        value={formData.technicalSkills}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Industry Specialization</label>
                                    <input
                                        type="text"
                                        name="industrySpecialization"
                                        value={formData.industrySpecialization}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Job Roles</label>
                                    <input
                                        type="text"
                                        name="jobRoles"
                                        value={formData.jobRoles}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Company Size</label>
                                    <input
                                        type="text"
                                        name="companySize"
                                        value={formData.companySize}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                            </div>
                        </fieldset>

                        <div className="text-center mt-6">
                        <button className='primary-btn'>
                            Submit
                        </button>
                    </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default AlumniForm;
