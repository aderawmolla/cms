const Modal = ({ onClose, children }) => {
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div
            className="fixed inset-0 transition-opacity"
            onClick={onClose}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden z-20 shadow-xl">
            <div className="px-10 py-2 w-full">{children}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  