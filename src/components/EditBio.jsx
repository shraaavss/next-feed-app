import { useState } from 'react';
import Modal from 'react-modal';
import edit from '../assets/EditIcon.svg'
import Image from 'next/image';

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
      <span className='pen-cont' onClick={() => setIsModalOpen(true)}>
        <Image className='pen' src={edit} width={'0.2rem'} alt="pen" />
      </span>

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
