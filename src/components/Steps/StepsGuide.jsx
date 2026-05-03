import { useState } from "react";
import { createPortal } from "react-dom";
import { steps } from "../../data/electionData";

export default function StepsGuide() {
  const [showModal, setShowModal] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const modalRoot = document.getElementById("modal-root");

  const handleClick = (step) => {
    if (step.id === "register") {
      setShowModal(true);
      setIsEligible(false);
      setAge("");
      setError("");
    }
  };

  const checkAge = () => {
    if (Number(age) >= 18) {
      setIsEligible(true);
      setError("");
    } else {
      setError("❌ You are not 18+");
      setIsEligible(false);
    }
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      alert("Please fill all fields");
      return;
    }

    alert("✅ Registration Successful!");
    setShowModal(false);
  };

  return (
    <>
      {/* 🔥 Modern Steps UI */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
        <h2 className="text-2xl font-semibold mb-5 tracking-tight">
          Election Process
        </h2>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div
              key={i}
              onClick={() => handleClick(step)}
              className="group p-4 rounded-2xl bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-white/10 hover:scale-[1.03] hover:border-indigo-400/40 transition-all duration-300 cursor-pointer"
            >
              <h3 className="font-semibold text-lg group-hover:text-indigo-300">
                {step.title}
              </h3>
              <p className="text-sm opacity-70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 💎 MODAL */}
      {showModal && modalRoot &&
        createPortal(
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            
            <div className="bg-gradielinearnt-to-br from-slate-900 to-slate-800 border border-white/10 p-6 rounded-3xl w-85 text-white shadow-2xl animate-[fadeIn_0.3s_ease]">

              {/* 🔹 Age Check */}
              {!isEligible ? (
                <>
                  <h2 className="text-xl font-semibold mb-4 text-center">
                    Check Eligibility
                  </h2>

                  <input
                    type="number"
                    placeholder="Enter your age"
                    className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-indigo-400 transition mb-3"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />

                  {error && (
                    <p className="text-red-400 text-sm text-center">
                      {error}
                    </p>
                  )}

                  <div className="flex gap-3 mt-5">
                    <button
                      onClick={() => setShowModal(false)}
                      className="flex-1 py-2 rounded-xl bg-gray-600 hover:bg-gray-700 transition hover:scale-105 active:scale-95"
                    >
                      Cancel
                    </button>

                    <button
                      onClick={checkAge}
                      className="flex-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition hover:scale-105 active:scale-95"
                    >
                      Continue
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* 🔹 Registration Form */}
                  <h2 className="text-xl font-semibold mb-4 text-center">
                    Registration Form
                  </h2>

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 mb-3 focus:border-indigo-400 outline-none"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 mb-3 focus:border-indigo-400 outline-none"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />

                  <div className="flex gap-3 mt-5">
                    <button
                      onClick={() => setShowModal(false)}
                      className="flex-1 py-2 rounded-xl bg-gray-600 hover:bg-gray-700 transition hover:scale-105 active:scale-95"
                    >
                      Cancel
                    </button>

                    <button
                      onClick={handleSubmit}
                      className="flex-1 py-2 rounded-xl bg-green-600 hover:bg-green-700 transition hover:scale-105 active:scale-95"
                    >
                      Submit
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>,
          modalRoot
        )}
    </>
  );
}