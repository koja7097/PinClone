import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  Image,
} from "@chakra-ui/react";
import { useSwipeable } from "react-swipeable";

export default function ImageModal({ selected, onClose }) {
  const handlers = useSwipeable({
    onSwipedDown: onClose,
    onPinch: onClose,
  });

  return (
    <ChakraModal isOpen={!!selected} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />

      <ModalContent {...handlers}>
        {selected && (
          <Image
            src={selected.urls.regular}
            borderRadius="md"
          />
        )}
      </ModalContent>
    </ChakraModal>
  );
}