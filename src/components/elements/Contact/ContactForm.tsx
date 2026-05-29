import { useForm } from '$hooks';

const ContactForm = () => {
  const { formFields, updateField } = useForm();

  return (
    <div className="flex flex-col gap-2 text-white">
      <div className="pb-2">
        <label htmlFor="name" className="block mb-1">Name</label>
        <input
          id="name"
          value={formFields['section-1']}
          onChange={(e) => updateField('section-1', e.target.value)}
          className="w-full border rounded-lg p-4"
        />
      </div>
      <div className="pb-2">
        <label htmlFor="email" className="block mb-1">Email</label>
        <input
          id="email"
          value={formFields['section-7']}
          onChange={(e) => updateField('section-7', e.target.value)}
          className="w-full border rounded-lg p-4"
        />
      </div>
      <div className="pb-2">
        <label htmlFor="message" className="block mb-1">Message</label>
        <textarea
          id="message"
          className="w-full border rounded-lg p-4 resize-none block"
          rows={6}
        />
      </div>
    </div>
  );
};

export default ContactForm;