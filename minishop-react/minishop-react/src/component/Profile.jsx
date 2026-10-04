function Profile({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold text-xl cursor-pointer"
        >
          ✕
        </button>
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 text-3xl rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
            👤
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Student Profile</h2>
          <p className="text-gray-500 mt-1">MiniShop Developer</p>
        </div>
        <div className="mt-6 border-t pt-4 space-y-3 text-sm text-gray-600">
          <div className="flex justify-between">
            <span className="font-semibold">Name:</span>
            <span>นักศึกษา MiniShop</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Role:</span>
            <span>Frontend Developer</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Status:</span>
            <span className="text-green-600 font-semibold">Active Student</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Profile