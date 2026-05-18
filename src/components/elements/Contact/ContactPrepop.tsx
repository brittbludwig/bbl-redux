import { useForm } from '$hooks';

interface ContactPrepopProps {
  content?: string[];
}

const blank = '_____________';
const check = (val: string | string[]) =>
  Array.isArray(val) ? (val.length > 0 ? val.join(', ') : blank) : val?.length > 0 ? val : blank;

const ContactPrepop = ({ content = [] }: ContactPrepopProps) => {
  const { formFields } = useForm();

  const skills = Array.isArray(formFields['section-3']) ? formFields['section-3'] : [];
  const formattedSkills = skills.length > 1
    ? skills.slice(0, -1).join(', ') + ' and ' + skills[skills.length - 1]
    : skills[0] ?? blank;

  return (
    <div>
      <div className="pb-2">
        {content[0]} <strong className="text-gray-300 font-bold mr-4">{check(formFields['section-1'])}</strong>.
      </div>
      <div className="pb-2">
        {content[1]} <strong className="text-gray-300 font-bold mr-4">{check(formFields['section-2'])}</strong>.
      </div>
      <div className="pb-2">
        {content[2]} <strong className="text-gray-300 font-bold mr-4">{formattedSkills}</strong>.
      </div>
      <div className="pb-2">
        {content[3]} <strong className="text-gray-300 font-bold mr-4">{check(formFields['section-4'])}</strong>.
      </div>
      <div className="pb-2">
        {content[4]} <strong className="text-gray-300 font-bold mr-4">{check(formFields['section-5'])}</strong>.
      </div>
      <div className="pb-2">
        {content[5]} <strong className="text-gray-300 font-bold mr-4">{check(formFields['section-6'])}</strong>.
      </div>
      <div className="pb-2">
        <div>{check(formFields['section-7'])},</div>
        {check(formFields['section-1'])}
      </div>
    </div>
  );
};

export default ContactPrepop;