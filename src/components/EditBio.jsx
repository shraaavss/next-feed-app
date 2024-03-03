import { useState } from 'react';
import Modal from 'react-modal';

const EditBio = ({ initialBio, onSave }) => {
  const [bio, setBio] = useState(initialBio);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = () => {
    onSave(bio);
    setIsModalOpen(false);
  };

  const customStyles = {
    content: {
      width: '300px', // Set the desired width
      height: '200px', // Set the desired height
      margin: 'auto',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '8px',
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Edit Bio</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Edit Bio Modal"
        style={customStyles}
      >
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={4}
          cols={30}
        />
        <button onClick={handleSave}>Save</button>
      </Modal>
    </div>
  );
};

export default EditBio;
