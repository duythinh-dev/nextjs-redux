import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "7xl",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "1.875rem" /* Converts 3xl to equivalent font size */,
          fontWeight: "bold",
          margin: "1rem 0",
        }}
      >
        New Wonders of the World
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(25rem, 1fr))" /* Replicates responsive grid layout */,
          gap: "1rem",
        }}
      >
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              style={{
                width: "100%" /* Equivalent to w-full */,
                height: "100%",
                objectFit: "cover",
                aspectRatio: "1/1" /* Equivalent to aspect-square */,
              }}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
