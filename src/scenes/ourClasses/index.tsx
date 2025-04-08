import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const ourClasses: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, ipsam quis nihil distinctio recusandae blanditiis nobis, debitis laboriosam, illum esse dolore consequuntur quaerat rerum beatae? Enim minima maxime sint culpa! dolor sit amet consectetur adipisicing elit. Eveniet, ipsam quis nihil distinctio recusandae blanditiis nobis, debitis laboriosam, illum esse dolore consequuntur quaerat rerum beatae? Enim minima maxime sint culpa",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, ipsam quis nihil distinctio recusandae blanditiis nobis, debitis laboriosam, illum esse dolore consequuntur quaerat rerum beatae? Enim minima maxime sint culpa! dolor sit amet consectetur adipisicing elit. Eveniet, ipsam quis nihil distinctio recusandae blanditiis nobis, debitis laboriosam, illum esse dolore consequuntur quaerat rerum beatae? Enim minima maxime sint culpa",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, ipsam quis nihil distinctio recusandae blanditiis nobis, debitis laboriosam, illum esse dolore consequuntur quaerat rerum beatae? Enim minima maxime sint culpa! dolor sit amet consectetur adipisicing elit. Eveniet, ipsam quis nihil distinctio recusandae blanditiis nobis, debitis laboriosam, illum esse dolore consequuntur quaerat rerum beatae? Enim minima maxime sint culpa",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, ipsam quis nihil distinctio recusandae blanditiis nobis, debitis laboriosam, illum esse dolore consequuntur quaerat rerum beatae? Enim minima maxime sint culpa! dolor sit amet consectetur adipisicing elit. Eveniet, ipsam quis nihil distinctio recusandae blanditiis nobis, debitis laboriosam, illum esse dolore consequuntur quaerat rerum beatae? Enim minima maxime sint culpa",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, ipsam quis nihil distinctio recusandae blanditiis nobis, debitis laboriosam, illum esse dolore consequuntur quaerat rerum beatae? Enim minima maxime sint culpa! dolor sit amet consectetur adipisicing elit. Eveniet, ipsam quis nihil distinctio recusandae blanditiis nobis, debitis laboriosam, illum esse dolore consequuntur quaerat rerum beatae? Enim minima maxime sint culpa",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, ipsam quis nihil distinctio recusandae blanditiis nobis, debitis laboriosam, illum esse dolore consequuntur quaerat rerum beatae? Enim minima maxime sint culpa! dolor sit amet consectetur adipisicing elit. Eveniet, ipsam quis nihil distinctio recusandae blanditiis nobis, debitis laboriosam, illum esse dolore consequuntur quaerat rerum beatae? Enim minima maxime sint culpa",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <>
      <section id="ourclasses" className="w-full bg-primary-300 pt-10 sm:pt20`">
        <motion.div
          className=""
          onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
          <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="">
              <HText>OUR CLASSES</HText>
              <p className="py-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                aliquid quas minus odit voluptates tempore natus quia, alias,
                pariatur beatae ipsam consequatur consectetur obcaecati tenetur
                corporis, maiores enim placeat provident! corporis, maiores enim
                placeat provident!
              </p>
            </div>
          </motion.div>
          <div className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
              {ourClasses.map((item, index) => (
                <Class
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </ul>
          </div>
        </motion.div> 
      </section>
    </>
  );
};

export default OurClasses;
