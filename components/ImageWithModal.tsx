import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#__next');

const ImageWithModal = ({ src, alt, width, height, maxWidth = '100%' }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer', maxWidth: maxWidth }}>
      &nbsp;
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized={false}
        onClick={openModal}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'transparent',
            border: 'none',
            width: '80%',
            height: '80%',
          },
        }}
      >
        <button
          onClick={closeModal}
          style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            background: 'transparent',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            zIndex: 1,
          }}
        >
          <Image src="/closeicon.png" alt="Close" width={24} height={24} />
        </button>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </Modal>
    </div>
  );
};

export default ImageWithModal;