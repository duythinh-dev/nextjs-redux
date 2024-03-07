import Image from "next/image";
import wondersImages, { WonderImage } from "../../../wonders";
import Modal from "@/app/components/Modal";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <Modal>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "Gray",
        }}
      >
        <Image
          alt={photo.name}
          src={photo.src}
          style={{
            width: "80%", // Equivalent to "w-full"
            height: "80%",
            objectFit: "cover",
            aspectRatio: "1 / 1", // Equivalent to "aspect-square"
          }}
        />
      </div>

      <div style={{ backgroundColor: "white", padding: "16px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 500 }}>{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
