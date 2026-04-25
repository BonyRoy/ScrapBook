import React, { useEffect } from "react";

/**
 * Full-screen lightbox for a single image. Closes on backdrop click, Close, or Escape.
 */
export default function ImagePreview({ src, alt, onClose }) {
  useEffect(() => {
    if (!src) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [src]);

  if (!src) return null;

  return (
    <div
      className="image-preview"
      role="dialog"
      aria-modal="true"
      aria-label={alt || "Image preview"}
      onClick={onClose}
    >
      <button
        type="button"
        className="image-preview__close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close preview"
      >
        ×
      </button>
      <img
        className="image-preview__img"
        src={src}
        alt={alt || ""}
        data-no-preview
        onClick={(e) => e.stopPropagation()}
        draggable={false}
      />
    </div>
  );
}
