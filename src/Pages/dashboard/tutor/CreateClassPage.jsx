import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateClassPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!name || !subject || !level) {
      setError("Please fill in all required fields.");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      setError("You must be logged in to create a class.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/classes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          subject,
          level,
          description,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.msg || "Failed to create class.");
        setLoading(false);
        return;
      }

      // ✅ Success
      navigate(`/tutor/classes/${data._id}`);
    } catch (err) {
      console.error("Create class error:", err);
      setError("Cannot connect to server. Is backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
        
        {/* Back Button */}
        <button
          onClick={() => navigate("/tutor/dashboard")}
          className="text-sm text-blue-600 hover:underline mb-6"
        >
          ← Back to Dashboard
        </button>

        {/* Header */}
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          Create New Class
        </h1>
        <p className="text-gray-500 mb-6">
          Fill in the details below to create a new class.
        </p>

        {/* Error */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-5">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Class Name *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Form 3 Mathematics"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject *</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Mathematics"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Level / Grade *
            </label>
            <input
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Form 3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border rounded-lg resize-none"
            />
          </div>

          <button
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold ${
              loading
                ? "bg-gray-400"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Creating Class..." : "Create Class"}
          </button>
        </form>
      </div>
    </div>
  );
}
