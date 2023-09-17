'use client';

import { Button, Modal,Carousel } from 'flowbite-react';
import Image from 'next/image';
import { Suspense } from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'


export default function DismissableModal({openModal, setOpenModal,project}) {
  

  return (
    <>
      
      <Modal position={'center'} popup dismissible show={openModal === 'dismissible'} onClose={() => setOpenModal('')}>
        <Modal.Header>
          {project.title}
        </Modal.Header>
        <Modal.Body className='h-[50%]'>
          <div className="space-y-6">
            
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              In Development
            </p>
            
          </div>
        </Modal.Body>
        <Modal.Footer>
          
          <Button color="green" className='bg-transparent border-0' onClick={() => setOpenModal('')}>
            <AiFillCloseCircle size={39} color='#000' />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
