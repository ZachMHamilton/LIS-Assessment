import type { HomeProps } from "../types"

function Home({onSubmit} : HomeProps) {

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
      <h1>Home page</h1>
      <button 
        onClick={() => onSubmit({ name: "Zach", age: 24, title: "Software Engineer", hometown: "Columbus" })}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit Data
      </button>
    </div>
  )
}

export default Home
