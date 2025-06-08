import React from 'react';

const InfiniteCarousel = ({
    images = [],
    speed = 10, // seconds for one complete cycle
    pauseOnHover = true,
    height = 'h-96'
}) => {
    // Default images if none provided
    const defaultImages = [
        "/rhodapic.jpg",
        "/caislogo.jpg",
        "/teachingimg1.jpg",
        "/teachingimg1.jpg",
    ];

    const displayImages = images.length > 0 ? images : defaultImages;

    return (
        <div className="w-full overflow-hidden bg-gray-100">
            <div
                className={`flex ${height} ${pauseOnHover ? 'hover:pause' : ''}`}
                style={{
                    animation: `scroll ${speed}s linear infinite`,
                    width: `${displayImages.length * 1 * 100}%`,
                    backgroundColor: "oklch(88.2% 0.059 254.128)" // Double width for seamless loop
                }}
            >
                {/* First set of images */}
                {/* First set of images */}
                {displayImages.map((src, index) => (
                    <div
                        key={`first-${index}`}
                        className={`flex-shrink-0 mr-4`}
                        style={{ width: `${100 / (displayImages.length * 2)}%` }}
                    >
                        <img
                            src={src}
                            alt={`Carousel image ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ))}


                {displayImages.map((src, index) => (
                    <div
                        key={`second-${index}`}
                        className={`flex-shrink-0 mr-4`}
                        style={{ width: `${100 / (displayImages.length * 2)}%` }}
                    >
                        <img
                            src={src}
                            alt={`Carousel image ${index + 1} duplicate`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ))}

            </div>

            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .hover::pause:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

// Example usage component
const CarouselDemo = () => {

    return (
        <div className="space-y-8 p-8">
            <div>
                <h2 className="text-2xl font-bold mb-4">Default Carousel</h2>
                <InfiniteCarousel />
            </div>
        </div>
    );
};

export default CarouselDemo;