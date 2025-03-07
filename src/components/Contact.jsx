import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

// DATA SOCIAL LINKS
const SOCIAL_LINKS = [
  {
    href: 'mailto:sunanjayairmawan@gmail.com',
    icon: MdEmail,
    label: 'Email',
  },
  {
    href: 'https://linkedin.com/in/sunan-jaya-irmawan',
    icon: FaLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/sunan-jaya',
    icon: FaGithub,
    label: 'GitHub',
  },
  {
    href: 'https://instagram.com/sunanjy',
    icon: FaInstagram,
    label: 'Instagram',
  },
];

const Contact = () => {
  // STATE UNTUK STATUS PENGIRIMAN
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm();

  // FUNGSI UNTUK PENGIRIMAN FORM
  const onSubmit = (formData) => {
    setIsSubmitting(true);

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://api.web3forms.com/submit';

    const nameInput = document.createElement('input');
    nameInput.type = 'hidden';
    nameInput.name = 'name';
    nameInput.value = formData.name;
    form.appendChild(nameInput);

    const emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = 'email';
    emailInput.value = formData.email;
    form.appendChild(emailInput);

    const messageInput = document.createElement('input');
    messageInput.type = 'hidden';
    messageInput.name = 'message';
    messageInput.value = formData.message;
    form.appendChild(messageInput);

    const accessKeyInput = document.createElement('input');
    accessKeyInput.type = 'hidden';
    accessKeyInput.name = 'access_key';
    accessKeyInput.value = 'f9970ca6-353c-49d8-90c7-ebd4bb6b656f'; // ACCESS KEY WEB3FORMS
    form.appendChild(accessKeyInput);

    document.body.appendChild(form);

    setTimeout(() => {
      form.submit();
      reset();
    }, 500);
  };

  return (
    <section id="contact" className="section mb-10">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        {/* INFORMASI KONTAK + (SOCIAL LINKS) */}
        <div className="space-y-6 mb-10">
          <h2 className="text-4xl font-bold text-white">
            Let's work together!
          </h2>
          <p className="text-neutral-400 max-w-md">
            Open to collaboration, exciting projects, and innovative ideas. 
            Reach out and let's create something amazing together.
          </p>

          {/* BUTTON SOCIAL LINKS */}
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Icon size={30} />
              </a>
            ))}
          </div>
        </div>

        {/* FORM CONTACT */}
        <form onSubmit={handleSubmit(onSubmit)} className="xl:pl-10 2xl:pl-20">
          
          {/* FLEX KOLOM NAMA & EMAIL */}
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">           
            {/* NAME */}
            <div className="mb-4">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                {...register('name', { 
                  required: 'Name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters',
                  },
                })}
                type="text"
                id="name"
                autoComplete="name"
                placeholder="Sunan Jaya"
                className={`text-field ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div className="mb-4">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                id="email"
                autoComplete="email"
                placeholder="sunan@yourmail.com"
                className={`text-field ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* MESSAGE */}
          <div className="mb-4">
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              {...register('message', { 
                required: 'Message is required',
              })}
              id="message"
              placeholder="Write your message..."
              className={`text-field resize-y min-h-32 max-h-80 ${errors.message ? 'border-red-500' : ''}`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* BUTTON SUBMIT */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-contact [&]:max-w-full w-full justify-center disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form> 
      </div>
    </section>
  );
};

export default Contact;