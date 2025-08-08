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
      <h1>Submissions</h1>

      {loading ? (
        <p>Loading...</p>
      ) : submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
      <table className="confirmation-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Title</th>
            <th>Hometown</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.name}</td>
              <td>{submission.age || ''}</td>
              <td>{submission.title}</td>
              <td>{submission.hometown || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>

      )}

      <button onClick={onBack}>
        Back to Form
      </button>
    </main>
  );

}

export default Confirmation
