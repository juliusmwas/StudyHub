
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateClassPage() {
  const navigate = useNavigate();

  // Form state
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Simple validation
    if (!name || !subject || !level) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      // API call placeholder
      // Replace URL with your backend endpoint later
      const res = await fetch("/api/classes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, subject, level, description }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.msg || "Failed to create class.");
        setLoading(false);
        return;
      }

      // Success: redirect to class details
      navigate(`/tutor/classes/${data._id}`);
    } catch (err) {
      setError("Server error. Please try again.");
      console.error(err);
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
          className="text-sm text-blue-600 hover:underline mb-4"
        >
          ← Back to Dashboard
        </button>

        {/* Header */}
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          Create New Class
        </h1>
        <p className="text-gray-500 mb-6">
          Fill in the details below to create a new class for your students.
        </p>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Class Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Class Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Form 3 Mathematics"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject *
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Mathematics"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Level / Grade */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Level / Grade *
            </label>
            <input
              type="text"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              placeholder="Form 3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Briefly describe the class (optional)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 resize-none"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
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
