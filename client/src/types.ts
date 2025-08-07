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
  id: number,
  name: string
  age: number
  title: string
  hometown: string
}