import ArchivesGallery from "../components/ArchivesGallery";

export default function Archives() {
  const photos = [
    { src: "/assets/1.jpeg", caption: "The first step into assetsories ✦" },
    { src: "/assets/2.jpeg", caption: "Lights, laughter & friendships" },
    { src: "/assets/3.jpeg", caption: "Unforgettable chaos ✦" },
    // { src: "/assets/4.jpeg", caption: "A night of golden joy" },
    // { src: "/assets/5.jpeg", caption: "Batch vibes forever" },
    // { src: "/assets/6.jpeg", caption: "Captured smiles ✦" },
  ];

  return <ArchivesGallery images={photos} />;
}
