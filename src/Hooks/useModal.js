import { addClass } from 'Format/classNameModif';
import {useLayoutEffect} from 'react';

export default function useModal() {
    useLayoutEffect(() => {
        const openModal = (element) => {
            const modalWrapper = document.createElement("div")
            const modalOverlay = document.createElement("div")
            const modalWrapperClassName = "fixed inset-0 bg-black opacity-35";

            modalOverlay.addEventListener("click", function() {
                modalWrapper.remove();
            })

            addClass(modalWrapper, "fixed inset-0 z-40 flex items-center justify-center w-100 min-h-screen")
            addClass(modalOverlay, modalWrapperClassName)
            const modalContent = document.createElement("div")
            modalContent.innerHTML = element.target.attributes?.["data-content"].value;
            addClass(modalContent, "bg-blue-900 p-0 md:p-6 z-10");
            modalWrapper.append(modalOverlay);
            modalWrapper.append(modalContent);
            document.body.append(modalWrapper);
        }

        const ModalTriggers = document.getElementsByClassName("modal-trigger");
        for (const e of ModalTriggers) {
            e.addEventListener("click", openModal);
        }

        return () => {
            for (const e of ModalTriggers) {
                e.addEventListener("click", openModal);
            }
        };
    });
}
