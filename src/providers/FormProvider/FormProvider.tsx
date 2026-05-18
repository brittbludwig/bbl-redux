import { createContext, useContext, useState, type ReactNode } from 'react';

export type FormFields = {
  'section-1': string;
  'section-2': string;
  'section-3': string[];
  'section-4': string;
  'section-5': string;
  'section-6': string;
  'section-7': string;
  [key: string]: string | string[];
};

const initialFormFields: FormFields = {
  'section-1': '',
  'section-2': '',
  'section-3': [],
  'section-4': '',
  'section-5': '',
  'section-6': '',
  'section-7': '',
};

interface FormContextType {
  formFields: FormFields;
  updateField: (section: string, value: string | string[]) => void;
  resetFields: () => void;
}

export const FormContext = createContext<FormContextType>({
  formFields: initialFormFields,
  updateField: () => {},
  resetFields: () => {},
});

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formFields, setFormFields] = useState<FormFields>(initialFormFields);

  const updateField = (section: string, value: string | string[]) => {
    setFormFields((prev) => ({ ...prev, [section]: value }));
  };

  const resetFields = () => setFormFields(initialFormFields);

  return (
    <FormContext.Provider value={{ formFields, updateField, resetFields }}>
      {children}
    </FormContext.Provider>
  );
};

