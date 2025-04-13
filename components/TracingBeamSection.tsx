import { TracingBeam } from "./ui/tracing-beam";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const dummyContent = [
  {
    badge: "Featured",
    title: "Amazing Project",
    description: "This is a description of an amazing project that showcases creativity and skill.",
    image: "/path-to-image.jpg",
  },
  {
    badge: "New",
    title: "Latest Blog Post",
    description: "Read about the latest trends and insights in the industry.",
    image: null,
  },
];

export function TracingBeamSection() {
  return (
    <section className="relative py-16">
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className={twMerge("font-calsans", "text-xl mb-4")}>{item.title}</p>

              <div className="text-sm prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="content thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}