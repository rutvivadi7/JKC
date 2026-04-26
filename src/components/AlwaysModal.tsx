import React from 'react';
import { X } from 'lucide-react';

interface AlwaysModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AlwaysModal: React.FC<AlwaysModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
        
        <div className="p-8">
          {/* PDF Viewer */}
          <iframe 
            src="/images/Saftey/ALWAYS-1.pdf" // Here is the image 
            className="w-full h-[80vh] border-0 rounded-lg"
            title="A.L.W.A.Y.S. Safety Guidelines"
          />
        </div>
      </div>
    </div>
  );
};

export default AlwaysModal;