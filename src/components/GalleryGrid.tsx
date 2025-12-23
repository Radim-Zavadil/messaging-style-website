export default function GalleryGrid({ images }: { images: string[] }) {
    return (
      <div className="grid grid-cols-2 gap-2 mt-2">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="rounded-lg border"
            alt="portfolio"
          />
        ))}
      </div>
    )
  }
  