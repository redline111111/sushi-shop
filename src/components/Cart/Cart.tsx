"use client"

import React, { useEffect, useState } from 'react'
import styles from './Cart.module.scss'
import Image from 'next/image'
import cart from 'public/icons/cart.png'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectCount, selectIds } from '@/redux/features/cartSlice'
import Modal from 'react-modal';
import { getAllByIds, getById } from '@/services/getItems'
import { ModalContent } from '../ModalContent/ModalContent'


  
export const Cart = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const count = useAppSelector(selectCount);

    const openModal = () => {
        Modal.setAppElement('body');
        setModalIsOpen(true);
    };
      
    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
    <div className={styles.cart}>
        <Image
            className={styles.cart_image}
            src={cart} 
            alt='cart'
            onClick={openModal}
        />
        <span>{count}</span>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{
            overlay: {zIndex: 1000},
            content: {
            background: 'rgb(42, 42, 42)',
            minWidth: '450px',
            maxWidth: '1000px',
            margin: '0 auto',
            height:'600px',
            borderRadius: '15px',
            zIndex: 100
            }
        }}>
            <ModalContent closeModal={closeModal}/>
        </Modal>
    </div>
    )
}