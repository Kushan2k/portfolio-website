'use client';

import { Button, Modal,Carousel } from 'flowbite-react';
import Image from 'next/image';
import { FaCrosshairs, FaRegRectangleXmark } from 'react-icons/fa6';


export default function DismissableModal({openModal, setOpenModal,project}) {
  

  return (
    <>
      
      <Modal position={'center'} dismissible show={openModal === 'dismissible'} onClose={() => setOpenModal('')}>
        <Modal.Header>
          {project.title}
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <Carousel
              leftControl="left"
              rightControl="right"
            >
              {
                project.images?.map(img => (
                  <Image
                    key={img}
                    fill
                    alt="..."
                    src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
                  />
                ))
              }
            </Carousel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          
          <Button color="green" onClick={() => setOpenModal('')}>
            <FaRegRectangleXmark size={39} color='#000' />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
