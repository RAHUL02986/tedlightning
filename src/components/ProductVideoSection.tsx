import { Play } from "lucide-react";
import { useState } from "react";

interface ProductVideoSectionProps {
  videoUrl?: string;
  thumbnailUrl?: string;
  productName: string;
}

export const ProductVideoSection = ({ videoUrl, thumbnailUrl, productName }: ProductVideoSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube video ID
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const youtubeId = videoUrl ? getYouTubeId(videoUrl) : null;

  if (!videoUrl) return null;

  return (
    <section className="relative w-full h-[500px] lg:h-[700px] overflow-hidden">
      {isPlaying && youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={`${productName} video`}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          {/* Thumbnail or Gradient Background */}
          <div className="absolute inset-0">
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt={`${productName} video thumbnail`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-foreground via-foreground/95 to-primary/20" />
            )}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-foreground/60" />

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-background mb-4">
              Product Video
            </h2>
            <p className="text-background/70 max-w-xl mb-10 text-lg">
              See the {productName} in action and discover its exceptional performance and features.
            </p>

            {/* Play Button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="group"
            >
              <div className="relative">
                {/* Pulse Animation */}
                <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
                
                {/* Play Button */}
                <div className="relative w-24 h-24 lg:w-28 lg:h-28 bg-primary rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-10 w-10 lg:h-12 lg:w-12 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </button>
          </div>
        </>
      )}
    </section>
  );
};
