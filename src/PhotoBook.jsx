import React from "react";
import HTMLFlipBook from "react-pageflip";

const photos = [
  { image: "/photos/1.JPG", text: "Sakura memories 🌸 – April 2023" },
  { image: "/photos/2.JPG", text: "Sunset at the beach – July 2023" },
  { image: "/photos/3.JPG", text: "Snowfall magic – December 2023" },
  { image: "/photos/1.JPG", text: "Sakura memories 🌸 – April 2023" },
  { image: "/photos/2.JPG", text: "Sunset at the beach – July 2023" },
  { image: "/photos/2.JPG", text: "Sunset at the beach – July 2023" },
];

// Cover page component
const CoverPage = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className="w-full h-full flex flex-col justify-center items-center px-6 py-4 rounded-lg shadow-xl text-white"
    style={{
      background: "linear-gradient(135deg, #7e22ce, #ec4899)", // Purple to pink gradient
      minHeight: "100%", // ensure it takes full height
      minWidth: "100%",
    }}
  >
    <h1 className="text-4xl font-bold mb-4 select-none">My Photo Book</h1>
    <p className="text-lg font-semibold select-none">Memories & Moments</p>
  </div>
));

const Page = React.forwardRef(({ image, text }, ref) => (
  <div
    ref={ref}
    className="w-full h-full bg-white flex flex-col justify-center items-center px-6 py-4"
  >
    <div className="w-full h-[80%] overflow-hidden mb-4">
      <img
        src={image}
        alt="page"
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
    </div>
    <p className="text-center text-base font-medium text-gray-700">{text}</p>
  </div>
));

export default function PhotoBook() {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100"
      style={{ overflow: "hidden" }}
    >
      <HTMLFlipBook
        width={400}
        height={550}
        size="fixed"
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="shadow-2xl"
        flippingTime={700}
      >
        {/* Cover page */}
        <CoverPage />

        {/* Photo pages */}
        {photos.map((p, i) => (
          <Page key={i} image={p.image} text={p.text} />
        ))}

        {/* Remove blank page for now */}
      </HTMLFlipBook>
    </div>
  );
}
