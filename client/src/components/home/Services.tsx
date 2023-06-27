import { playfair } from "@/utils/fonts";

const services = [
  {
    heading: "Expert Tutors",
    description: "Discover a diverse pool of expert tutors from various fields, carefully vetted for their knowledge and teaching abilities. Choose the perfect tutor to guide you in your skill acquisition journey.",
  },
  {
    heading: "Wide Range of Skills",
    description: "Explore a comprehensive array of skills available for learning. From academic subjects to practical skills, our platform offers a vast selection to cater to your specific interests and learning goals.",
  },
  {
    heading: "Flexible Scheduling",
    description: "Enjoy the freedom to set your own schedule. Coordinate with tutors based on your availability and find a mutually convenient time for sessions, ensuring a hassle-free learning experience.",
  },
  {
    heading: "Personalized Learning",
    description: "Tailor your learning journey to suit your individual needs. Our platform connects you directly with tutors, allowing for personalized attention, customized lessons, and one-on-one guidance.",
  },
];


export default function Services() {
  return (
    <section className="">
      <h3 className={`text-3xl font-bold text-center mb-10 ${playfair.className}`}>What we <span className="underline decoration-accent-2">offer</span>?</h3>
      <div className="flex flex-wrap xl:justify-between justify-center">
        {services.map((service, index) => (
          <div key={index} className="max-w-[290px] border border-accent-2 bg-accent-2/10 hover:bg-accent-2/20 hover:border-accent-2 transition ease-in-out duration-500 hover:transition hover:ease-in-out hover:duration-500 rounded-lg p-5 mx-2 mb-4 xl:mx-0 xl:mb-0">
            <h4 className="text-xl font-bold mb-1">{service.heading}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
