import Image from "next/image";

export default function BlobImage({
  src,
  alt,
  clipPathId,
  className,
}: {
  src: string;
  alt: string;
  clipPathId: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className ?? ""} [clip-path:url(#${clipPathId})]`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}


