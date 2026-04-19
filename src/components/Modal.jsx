import {
  Modal,
  ModalOverlay,
  ModalContent,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function ImageModal({ selected, onClose }) {
  return (
     <Modal isOpen={!!selected} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />

      <ModalContent as={motion.div} initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
        {selected && (
          <Image src={selected.urls.regular} borderRadius="md" />
        )}
      </ModalContent>
    </Modal>
  );
}