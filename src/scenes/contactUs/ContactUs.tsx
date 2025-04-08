import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyle = `mb5 w-full rounded-lg bg-primary-300 p-3 placeholder-white outline-none focus:shadow`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <>
      <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32 ">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
          className=""
        >
          {/* {header} */}
          <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>
              <span className="text-primary-500">JOIN NOW</span>
            </HText>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              corrupti minus iste voluptate ipsum. Quos cum necessitatibus
              similique illum ut magnam totam? Quibusdam, quam. Amet nostrum
              fuga repellendus delectus rerum.
            </p>
          </motion.div>

          {/* form and image */}
          <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
              className="mt-10 basis-3/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <form
                action="https://formsubmit.co/60f285a13ca9333244432db7907d1616"
                target="_blank"
                onSubmit={onSubmit}
                method="POST"
                className=""
              >
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="NAME"
                    className={inputStyle}
                    {...register("name", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-primary-500">
                      {errors.name.type === "required" &&
                        "This field is required."}
                      {errors.name.type === "maxLength" &&
                        "MAX lenght is 100 character."}
                    </p>
                  )}
                </div>
                <div className="mb-5">
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className={inputStyle}
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-primary-500">
                      {errors.email.type === "required" &&
                        "This field is required."}
                      {errors.email.type === "pattern" &&
                        "Invalid email address."}
                    </p>
                  )}
                </div>
                <div className="">
                  <textarea
                    rows={4}
                    cols={50}
                    placeholder="MESSAGE"
                    className={inputStyle}
                    {...register("message", {
                      required: true,
                      maxLength: 2000,
                    })}
                  />
                  {errors.message && (
                    <p className="mt- text-primary-500">
                      {errors.message.type === "required" &&
                        "This field is required."}
                      {errors.message.type === "maxLength" &&
                        "MAX lenght is 2000 char."}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 hover:shadow transition-shadow duration-500 hover:text-white uppercase"
                >
                  Submit
                </button>
              </form>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="relative mt-16 basis-2/5 md:mt-0"
            >
              <div className="md:before:content-[url('./assets/EvolveText.png')] w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                <img src={ContactUsPageGraphic} alt="conatct-page-grapgic" className="w-full"/>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ContactUs;
