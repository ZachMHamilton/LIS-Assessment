import type { ConfirmationProps, Submission } from "../types"
import { useState, useEffect } from "react";


function Confirmation({ data, onBack }: ConfirmationProps) {
  const [submissions, setSubmissions] = useState<Submission[]>([{id: 1, name: "test", age: 30, title: "fake person" ,hometown: "test town"}]); // fake data to test previous subs
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchSubmissions = async () => {
      setSubmissions((prev) => [data, ...prev]);
      setLoading(false);
    };

    fetchSubmissions();
  }, []);


  return (
    <main className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Past Submissions</h1>

      {loading ? (
        <p>Loading...</p>
      ) : submissions.length === 0 ? (
        <p className="text-gray-500">No submissions yet.</p>
      ) : (
        <div className="space-y-4">
          {submissions.map((submission) => (
            <div
              key={submission.id}
              className="border p-4 rounded shadow-sm bg-white"
            >
              <p className="text-sm text-gray-600">{submission.name}</p>
              <p className="text-sm text-gray-600">{submission.age}</p>
              <p className="text-sm text-gray-600">{submission.title}</p>
              <p className="text-sm text-gray-600">{submission.hometown}</p>
            </div>
          ))}
        </div>
      )}

      <button onClick={onBack} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Back to Form
      </button>
    </main>
  );

}

export default Confirmation
