// props
export interface HomeProps {
  onSubmit: (data: any) => void;
};

export interface ConfirmationProps {
  data: Submission;
  onBack: () => void;
}

// submission
export interface Submission {
  name: string
  age: string
  title: string
  hometown: string
}