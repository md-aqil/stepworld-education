import React from 'react';

const contactDetails = [
  { icon: 'fa-map-marker-alt', title: 'Our Address', line1: 'Office No - 3, D- 34, Sector 44, Noida', line2: 'Uttar Pradesh 201301' },
  { icon: 'fa-phone-alt', title: 'Call Us', line1: '+918709386056', line2: 'Mon-Fri, 9am-6pm' },
  { icon: 'fa-envelope', title: 'Email Us', line1: 'support@stepworldeducation.com', line2: 'We reply within 24 hours' },
];

const InputField = ({ id, placeholder, type = 'text', required = true }) => (
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"
    />
);

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    // Build payload with explicit sheet routing and column names expected by the sheet
    const payload: Record<string, string> = {
      formType: 'contact',
      sheetName: 'ContactUs',
      // map to the exact headers requested
      Name: String(formData.get('name') || ''),
      Email: String(formData.get('email') || ''),
      Mobile: String(formData.get('mobile') || ''),
      Subject: String(formData.get('subject') || ''),
      Message: String(formData.get('message') || ''),
    };
    // keep original keys too (optional)
    formData.forEach((v, k) => { if (!(k in payload)) payload[k] = String(v); });

    try {
      setIsSubmitting(true);
      // Send directly to Google Apps Script endpoint to write to Google Sheets
      const GAS_URL = 'https://script.google.com/macros/s/AKfycbxDbBpuakZbs0pEewT9nI-zgQZAK4-7zVgU0TNrORs-2VUoGxZQB8NdYxeNY7zbM08UyQ/exec';
      const res = await fetch(GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Try to parse JSON, fall back to text to avoid JSON parse errors when server returns HTML
      let data: any = null;
      const ct = res.headers.get('content-type') || '';
      if (ct.includes('application/json')) {
        data = await res.json();
      } else {
        const text = await res.text();
        try { data = JSON.parse(text); } catch (_e) { data = text; }
      }

      if (res.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
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
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Contact Us</h1>
          <div className="text-sm text-gray-200">
            <span>Home</span> &gt; <span className="font-semibold">Contact</span>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-brand-blue mb-2">Send us a Message</h2>
                    <p className="text-gray-600 mb-6">Have a question? We'd love to hear from you.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <InputField id="name" placeholder="Your Name" />
                            <InputField id="email" placeholder="Your Email" type="email" />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <InputField id="mobile" placeholder="Your Mobile" type="tel" />
                            <InputField id="subject" placeholder="Subject" />
                        </div>
                        <div>
                           <textarea id="message" name="message" rows={5} placeholder="Your Message" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-brand-orange text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-300">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Details */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-brand-blue mb-6">Get in Touch</h2>
                    {contactDetails.map((detail) => (
                        <div key={detail.title} className="flex items-start">
                            <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-full bg-brand-orange text-white text-2xl mr-5">
                                <i className={`fas ${detail.icon}`}></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-brand-dark">{detail.title}</h3>
                                <p className="text-gray-600">{detail.line1}</p>
                                <p className="text-sm text-gray-500">{detail.line2}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">Our Location</h2>
            <div className="rounded-lg overflow-hidden shadow-2xl">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.4280351300827!2d77.3416538!3d28.556906800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5cf02902e7f%3A0xd6544a39f18aa38b!2sStep%20World%20Education!5e0!3m2!1sen!2sin!4v1759822173186!5m2!1sen!2sin" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    // FIX: The `allowFullScreen` attribute expects a boolean value. Passing it without a value defaults to `true`.
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;