import React, { useState } from 'react';

// Updated InputField to include a placeholder
const InputField = ({ id, label, placeholder, type = 'text', value, onChange, required = true }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"
    />
  </div>
);

const AdmissionPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    state: '',
    city: '',
    course: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...formData, formType: 'admission' } as Record<string, string>;

    try {
      setIsSubmitting(true);
      const GAS_URL = 'https://script.google.com/macros/s/AKfycbxDbBpuakZbs0pEewT9nI-zgQZAK4-7zVgU0TNrORs-2VUoGxZQB8NdYxeNY7zbM08UyQ/exec';
      const res = await fetch(GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      let data: any = null;
      const ct = res.headers.get('content-type') || '';
      if (ct.includes('application/json')) {
        data = await res.json();
      } else {
        const text = await res.text();
        try { data = JSON.parse(text); } catch (_e) { data = text; }
      }

      if (res.ok) {
        alert('Application submitted successfully! Our counselors will get in touch with you shortly.');
        console.log('Final Form Data:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', mobile: '', state: '', city: '', course: '' });
      } else {
        console.error('Submit error response:', data);
        alert('Something went wrong. Please try again later.');
      }
    } catch (err) {
      console.error('Submit error', err);
      alert('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
  <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('/assets/Best-colleges-campus.webp')" }}>
        <div className="absolute inset-0 bg-brand-blue bg-opacity-70"></div>
        <div className="relative container mx-auto px-4 py-20 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Admission Form</h1>
          <div className="text-sm text-gray-200">
            <span>Home</span> &gt; <span className="font-semibold">Admission</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-brand-blue mb-2 text-center">Apply Now</h2>
            <p className="text-gray-600 mb-8 text-center">Fill out the form below to start your admission process.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField id="name" label="Name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                <InputField id="email" label="Email" placeholder="Enter your email" type="email" value={formData.email} onChange={handleChange} />
                <InputField id="mobile" label="Mobile Number" placeholder="Enter your mobile number" type="tel" value={formData.mobile} onChange={handleChange} />
                <InputField id="state" label="State" placeholder="Enter Your State" value={formData.state} onChange={handleChange} />
                <InputField id="city" label="City" placeholder="Enter Your City" value={formData.city} onChange={handleChange} />
                <InputField id="course" label="Course Interested In" placeholder="Enter Course Name" value={formData.course} onChange={handleChange} />
              </div>

              {/* Submit Button */}
              <div className="mt-8 text-center">
                <button type="submit" className="bg-brand-orange text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors duration-300">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdmissionPage;