import { useState } from "react";

export interface GalleryProps {}

const data = [
  {
    title: "Flower 01",
    image:
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste magnam officiis, non quod, amet est earum possimus nam optio temporibus cumque nemo architecto molestiae laborum officia animi modi recusandae eum!",
  },
  {
    title: "Flower 02",
    image:
      "https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste magnam officiis, non quod, amet est earum possimus nam optio temporibus cumque nemo architecto molestiae laborum officia animi modi recusandae eum!",
  },
  {
    title: "Flower 03",
    image:
      "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=2843&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste magnam officiis, non quod, amet est earum possimus nam optio temporibus cumque nemo architecto molestiae laborum officia animi modi recusandae eum!",
  },
];

export default function Gallery(_props: GalleryProps) {
  const [index, setIndex] = useState(0);
  console.log("Gallery re-rendering");

  const sliderItem = data[index];

  function handleNextSlider() {
    if (index >= data.length - 1) return;
    setIndex((index) => index + 1);
  }
  function handlePrevSlider() {
    if (index <= 0) return;
    setIndex((index) => index - 1);
  }

  return (
    <div className="flex flex-col gap-5 p-5">
      <button
        type="button"
        className="w-[120px] h-12 rounded-sm bg-orange-400 text-white font-normal"
        onClick={handlePrevSlider}
      >
        Prev
      </button>
      <div className="max-w-5xl p-5 mx-auto flex flex-col gap-3">
        <h2>{sliderItem.title}</h2>
        <img src={sliderItem.image} className="size-60 object-cover" />
        <p>{sliderItem.description}</p>
      </div>
      <button
        type="button"
        className="w-[120px] h-12 rounded-sm bg-green-400 text-white font-normal"
        onClick={handleNextSlider}
      >
        Next
      </button>
      {/* <Image/> -> <Photo/> -> <User/> */}
    </div>
  );
}
