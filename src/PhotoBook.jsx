import React from "react";
import HTMLFlipBook from "react-pageflip";

const photos = [
  { image: "/photos/1.JPG", text: "Every moment with you feels like a beautiful dream I never want to wake up from" },
  { image: "/photos/2.JPG", text: "With you, every day is a new adventure filled with love and laughter." },
  { image: "/photos/3.JPG", text: "You’re not just my girlfriend — you’re my best friend, my favorite hello, and hardest goodbye" },
  { image: "/photos/10.jpg", text: "I fall in love with you a little more every single day" },
  { image: "/photos/11.jpg", text: "Your smile brightens even my darkest days." },
  { image: "/photos/12.jpg", text: "You make my world more colorful just by being in it." },
  {image: "/photos/13.jpg", text: "No matter where life takes us, I’m glad I get to go there with you" },
  { image: "/photos/14.jpg", text: "Holding your hand feels like coming home." },
  { image: "/photos/15.jpg", text: "Forever isn’t long enough when I’m with you" },
  { image: "/photos/16.jpg", text: "Thank you for being my sunshine, my calm in the storm, and my greatest happiness." },
  { image: "/photos/17.jpg", text: "I love the way you laugh, the way you care, and the way you make everything better." },
  { image: "/photos/18.jpg", text: "You are my today and all of my tomorrows" },
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
