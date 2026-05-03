export default function Timeline() {
  const items = [
    "Election Announcement",
    "Nomination Filing",
    "Campaigning",
    "Voting Day",
    "Counting Votes",
    "Result Declaration"
  ];

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
      
      <h2 className="text-2xl font-semibold mb-6">
        Election Timeline
      </h2>

      <div className="relative border-l-2 border-indigo-500/40 ml-4">
        
        {items.map((item, i) => (
          <div key={i} className="mb-6 ml-6 relative">
            
            {/* Dot */}
            <div className="absolute -left-3.25 top-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white"></div>

            {/* Card */}
            <div className="bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-white/10 p-3 rounded-xl hover:scale-[1.02] transition">
  
  <span className="text-xs text-indigo-300">
    Step {i + 1}
  </span>

  <p className="font-medium mt-1">{item}</p>

</div>

          </div>
        ))}

      </div>
    </div>
  );
}