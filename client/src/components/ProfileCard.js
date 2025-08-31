export default function ProfileCard() {
  return (
    <div className="p-4 bg-white rounded-smaller shadow-sm">
      <p className="text-gray-500 font-semibold mb-4">Profile</p>
      <div className="flex items-center space-x-10">
        <div className="relative w-32 h-32 flex-shrink-0">
          <svg className="w-32 h-32">
            <circle
              cx="64"
              cy="64"
              r="58"
              stroke="#E5E7EB"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="58"
              stroke="#22C55E"
              strokeWidth="8"
              fill="none"
              strokeDasharray="364"
              strokeDashoffset="255"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
            30%
          </span>
        </div>
        <div className="flex-1">
          <p className="text-gray-700 font-medium text-lg">
            Complete your profile
          </p>
          <ul className="text-sm text-gray-500 mt-2 space-y-1">
            <li>• Personal KYC</li>
            <li>• Company KYC</li>
            <li>• Onboarding details</li>
          </ul>
        </div>
      </div>
      <button className="mt-6 bg-background-primary text-white px-6 py-2 rounded-lg w-full">
        Next
      </button>
    </div>
  );
}
