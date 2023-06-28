import { playfair } from "@/utils/fonts";
import Image from "next/image";
import { HiOutlineArrowLongRight } from 'react-icons/hi2'

const tutors = [
  {
    name: "John Smith",
    profile: "Experienced Math Tutor with a passion for helping students understand complex mathematical concepts. Dedicated to providing personalized guidance and fostering a positive learning environment.",
    rate: "$30/hour",
    ratings: "4.8/5",
    imgURL: "/assets/tutor_1.png",
  },
  {
    name: "Emma Johnson",
    profile: "English Language Specialist offering comprehensive language skills development. Skilled in improving students' reading, writing, and speaking abilities through engaging and interactive lessons.",
    rate: "$40/hour",
    ratings: "4.9/5",
    imgURL: "/assets/tutor_2.png",
  },
  {
    name: "Michael Brown",
    profile: "Programming Guru with extensive experience in multiple programming languages. Committed to guiding students in mastering coding fundamentals and problem-solving techniques.",
    rate: "$50/hour",
    ratings: "4.7/5",
    imgURL: "/assets/tutor_5.png",
  },
  {
    name: "Sophia Davis",
    profile: "Art and Design Mentor passionate about nurturing creativity and helping students explore their artistic potential. Offering guidance in various art mediums and techniques.",
    rate: "$35/hour",
    ratings: "4.6/5",
    imgURL: "/assets/tutor_3.png",
  },
  {
    name: "David Wilson",
    profile: "Science Enthusiast dedicated to making science engaging and accessible for students. Experienced in explaining complex scientific concepts in a simplified manner.",
    rate: "$45/hour",
    ratings: "4.5/5",
    imgURL: "/assets/tutor_6.png",
  },
  {
    name: "Olivia Thompson",
    profile: "Music Theory Maestro offering comprehensive music theory lessons tailored to individual student needs. Skilled in helping students grasp music notation and develop their musicality.",
    rate: "$40/hour",
    ratings: "4.8/5",
    imgURL: "/assets/tutor_4.png",
  },
  {
    name: "Daniel Anderson",
    profile: "History Aficionado passionate about bringing history to life through engaging storytelling and interactive lessons. Committed to helping students develop a deep appreciation for the past.",
    rate: "$35/hour",
    ratings: "4.6/5",
    imgURL: "/assets/tutor_7.png",
  },
  {
    name: "Ava Martinez",
    profile: "Language Tutor experienced in teaching multiple languages, including Spanish, French, and German. Dedicated to helping students build language skills through interactive and immersive lessons.",
    rate: "$30/hour",
    ratings: "4.7/5",
    imgURL: "/assets/tutor_8.png",
  },
  {
    name: "Grace Lee",
    profile: "Science and Biology Tutor with a strong background in biological sciences. Committed to helping students understand complex scientific concepts and excel in their science studies.",
    rate: "$35/hour",
    ratings: "4.7/5",
    imgURL: "/assets/tutor_9.png",
  },
];



export default function TutorCards() {
  return (
    <section>
      <h3 className={`text-3xl font-bold text-center mb-10 ${playfair.className}`}>Meet our <span className="underline decoration-accent-1">tutors</span>?</h3>
      <div className="flex flex-wrap justify-center">
      {tutors.map((tutor, index) => {
        return (
          <div key={index} className="flex flex-col justify-between w-[350px] h-[400px] border border-accent-1 bg-accent-1/0 hover:bg-accent-1/10 hover:border-accent-1 transition ease-in-out duration-500 hover:transition hover:ease-in-out hover:duration-500 rounded-lg mx-2 mb-4">
            <div className="pt-5 px-5">
              <div className="flex justify-between mb-2">
                <Image className="w-20 h-20 rounded-full" src={tutor.imgURL} alt="Tutor Image" width={100} height={100}/>
                {/* <div className="bg-accent-1 rounded-full w-min p-10"></div> */}
                <p className="text-md font-semibold">Rating: <span className="text-lg">{tutor.ratings}</span></p>
              </div>
              <h4 className="text-xl font-bold">{tutor.name}</h4>
              <p className="text-md font-medium mt-2">{tutor.profile}</p>
            </div>
            <div>
              <div className="flex justify-between items-end px-5 pb-1">
                <p className="text-lg">Hourly Rate</p>
                <p className="text-lg font-bold">{tutor.rate}</p>
              </div>
              <div className="flex justify-between items-center bg-accent-1/20 text-accent-1text-lg font-bold rounded-b-md w-full px-5 py-2">
                Hire Tutor 
                <span className="text-3xl">
                  <HiOutlineArrowLongRight/> 
                </span>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </section>
  )
}
