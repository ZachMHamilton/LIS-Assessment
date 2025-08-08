// props
export interface HomeProps {
  onSuccess: () => void;
};

export interface ConfirmationProps {
  onBack: () => void;
}

// submission
export interface Submission {
  name: string
  age: string
  title: string
  hometown: string
}