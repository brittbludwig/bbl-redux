import { useState, useRef } from 'react';
import { useForm } from '$hooks';
import ContactPrepop from './ContactPrepop';
import ContactForm from './ContactForm';
import { Button } from '../Button';

interface ContactProps {
  header?: string;
  content?: string[];
  sectionId: string;
  fieldContent?: string;
}

const Contact = ({ header = '', content = [], sectionId, fieldContent = '' }: ContactProps) => {
  const { formFields, resetFields } = useForm();
  const [showBlankTemplate, setShowBlankTemplate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const prepopRef = useRef<HTMLDivElement>(null);

  const sendEmail = async () => {
    const message = prepopRef.current?.textContent ?? '';
    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: formFields['section-1'],
          email: formFields['section-7'],
          message,
        }),
      });
      setShowModal(true);
    } catch {
      console.error('Message not sent');
    }
  };

  return (
    <div className="bg-black/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 w-full relative">
      {showModal && (
        <div className="absolute inset-0 bg-white rounded-lg flex flex-col items-center justify-center text-center p-12 z-10">
          <p className="mb-8">Thanks for reaching out!</p>
          <button
            onClick={() => { setShowModal(false); resetFields(); }}
            className="w-50 md:w-75 mx-auto"
          >
            Close
          </button>
        </div>
      )}

      {header && <h2 className="text-2xl font-medium text-white mb-4">{header}</h2>}

      {showBlankTemplate ? (
        <ContactForm />
      ) : (
        <div ref={prepopRef}>
          <ContactPrepop content={content} sectionId={sectionId} fieldText={fieldContent} />
        </div>
      )}

      <div className="mt-8 w-full flex flex-row justify-end gap-4">
        <Button handleClick={sendEmail} theme="primary" label="Send" />
        <Button
          handleClick={() => setShowBlankTemplate(!showBlankTemplate)}
          label={showBlankTemplate ? 'Cancel' : 'Write your own'}
        />
      </div>
    </div>
  );
};

export default Contact;