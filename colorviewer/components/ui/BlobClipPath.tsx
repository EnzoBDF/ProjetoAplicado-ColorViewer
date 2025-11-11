export default function BlobClipPath({
  id,
  path,
}: {
  id: string;
  path: string;
}) {
  return (
    <svg width="0" height="0">
      <defs>
        <clipPath id={id} clipPathUnits="objectBoundingBox">
          <path d={path} />
        </clipPath>
      </defs>
    </svg>
  );
}


