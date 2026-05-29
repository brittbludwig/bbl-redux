import { useForm } from '$hooks';
import { Field } from '../Field';
import { FieldBox } from '../FieldBox';

interface ContactPrepopProps {
  content?: string[];
  sectionId: string;
  fieldText?: string;
}

const blank = '_____________';

const check = (val: string | string[] | undefined) => {
  if (Array.isArray(val)) return val.length > 0 ? val.join(', ') : blank;
  return val && val.length > 0 ? val : blank;
};

const ContactPrepop = ({ content = [], sectionId, fieldText = '' }: ContactPrepopProps) => {
  const { formFields } = useForm();

  const skillsArr = Array.isArray(formFields['section-3']) ? formFields['section-3'] : [];
  const skills = skillsArr.join(', ');
  const formattedSkills =
    skills.indexOf(',') > 0
      ? skills.slice(0, skills.lastIndexOf(',')) + ' and' + skills.slice(skills.lastIndexOf(',') + 1)
      : skills;

  return (
    <div className="text-white">
      <div className="pb-6">
        {content[0]} <strong className="text-gray-300 font-bold">{check(formFields['section-1'])}</strong>.
      </div>
      <div className="pb-6">
        {content[1]} <strong className="text-gray-300 font-bold">{check(formFields['section-2'])}</strong>.
      </div>
      <div className="pb-6 leading-8">
        {content[2]}{' '}
        <strong className="text-gray-300 font-bold">{check(formattedSkills)}</strong>{' '}
        {content[3]} {content[4]}{' '}
        <strong className="text-gray-300 font-bold">{check(formFields['section-4'])}</strong>
        {'. '}
        {content[5]}{' '}
        <strong className="text-gray-300 font-bold">{check(formFields['section-5'])}</strong>{' '}
        {content[6]}{' '}
        <span className="inline-block align-middle">
          <Field handleChange={function (value: string, id?: string): void {
            throw new Error('Function not implemented.');
          } }  />
        </span>
        .
      </div>
      <div className="pt-2">
        <div>Sincerely,</div>
        <strong className="text-gray-300 font-bold">{check(formFields['section-1'])}</strong>
      </div>
    </div>
  );
};

export default ContactPrepop;