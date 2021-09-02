export interface FormInputs {
  email: string;
  message: string;
}

export const isFormInputs = (obj: unknown): obj is FormInputs => {
  return (obj as FormInputs).email !== undefined && (obj as FormInputs).message !== undefined;
};
