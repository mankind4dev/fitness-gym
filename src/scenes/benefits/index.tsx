import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import benefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

// const benefits: Array<Object> =[
const benefit: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6 " />,
    title: "State of the Art Facilities for me",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quidem sint voluptatem dolore beatae neque ratione a, maxime sed error veritatis in facilis. Accusantium quod maxime tenetur a esse asperiores?",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 " />,
    title: "1000's of Diverse CLasses",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quidem sint voluptatem dolore beatae neque ratione a, maxime sed error veritatis in facilis. Accusantium quod maxime tenetur a esse asperiores?",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6 " />,
    title: "Efficient and Confident",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quidem sint voluptatem dolore beatae neque ratione a, maxime sed error veritatis in facilis. Accusantium quod maxime tenetur a esse asperiores?",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <>
      <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
          className=""
        >
          {/* {header} */}
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>MORE THAN JUST GYM.</HText>
            <p className="my-5 text-sm">
              We provide world class fitness equipment, trainers and get you to
              your ultimate fitness goals with ease. We care into each and every
              menmber.
            </p>
          </motion.div>
          {/* Benefits */}
          <motion.div
            className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {benefit.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>

          {/* {Graphic AND Description} */}
          <div className="mt-16 items-center justify-between g20 md:mt-28 md:flex">
            {/* Image */}
            <img
              src={benefitsPageGraphic}
              alt="benefit-page-graphic"
              className="mx-auto"
            />

            {/* Deacription  */}
            <div className="mt-16">
              {/* titl e*/}
              <div className="relative">
                <div className="before:absolute before:-top-20 before:left-20 before:z-[1] before:content-abstractwaves">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <HText>
                      MILLIONS OF HAPPY MEMBERS GETTING {""}
                      <span className="text-primary-500">FIT.</span>
                    </HText>
                  </motion.div>
                </div>
              </div>

              {/* Description */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="my-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque iusto consectetur et, sunt aliquam eligendi officiis
                  aliquid reprehenderit earum consequatur minus libero vel eaque
                  corrupti cumque laborum tempora ratione! Rem. Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Atque iusto
                  consectetur et, sunt aliquam eligendi officiis aliquid
                  reprehenderit earum consequatur minus libero vel eaque
                  corrupti cumque laborum tempora ratione! Rem.
                </p>
                <p className="my-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  illum debitis fugit ducimus, facilis temporibus blanditiis
                  fugiat error dignissimos numquam velit laborum excepturi. Odit
                  repellat repellendus consectetur mollitia cupiditate debitis!
                </p>
              </motion.div>

              {/* Button */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now{" "}
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Benefits;
