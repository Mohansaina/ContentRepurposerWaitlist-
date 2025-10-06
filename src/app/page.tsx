"use client";

export default function Home() {
  const handleJoinWaitlist = () => {
    // Open the specific Google Form in a new tab
    window.open("https://forms.gle/EmzC6BKKVnS5eJYZA", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 py-4">
            Turn any YouTube video into 10 social posts in 1 click 🚀
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Paste your video link → get ready-to-post tweets, LinkedIn posts, and Instagram captions instantly.
          </p>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
          <div className="space-y-4">
            <button
              onClick={handleJoinWaitlist}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-[1.02]"
              aria-label="Join Waitlist"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}