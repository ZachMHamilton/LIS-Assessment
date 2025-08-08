import type { ConfirmationProps, Submission } from "../types"
import { useState, useEffect } from "react";


function Confirmation({ data, onBack }: ConfirmationProps) {
  const [submissions, setSubmissions] = useState<Submission[]>([{ name: "test", age: "30", title: "fake person" ,hometown: "test town"}]); // fake data to test previous subs
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchSubmissions = async () => {
      setSubmissions((prev) => [data, ...prev]);
      setLoading(false);
    };

    fetchSubmissions();
  }, []);


  return (
    <main className="container">
      <h1>Past Submissions</h1>

      {loading ? (
        <p>Loading...</p>
      ) : submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <div>
          {submissions.map((submission) => (
            <div className="confirmation-card"
              >
              <p>{submission.name}</p>
              <p>{submission.age}</p>
              <p>{submission.title}</p>
              <p>{submission.hometown}</p>
            </div>
          ))}
        </div>
      )}

      <button onClick={onBack}>
        Back to Form
      </button>
    </main>
  );

}

export default Confirmation
