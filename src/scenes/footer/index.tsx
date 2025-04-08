import mankind4devBg from "@/assets/mankind4dev-bg.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary-300 py-3 sm:py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
          <div className="mt-2 sm:mt-16 basis-1/2 md:mt-0">
            <img src={mankind4devBg} alt="logo" className="w-20 h-10" />
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              enim nostrum culpa nobis unde assumenda et iusto aliquid dolorum,
              adipisci totam labore fugiat eum laudantium ut recusandae
              quibusdam maxime ipsa.
            </p>
            <p className="">&copy; Mankind4dev All Right Reserved.</p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Massa orci sentence</p>
            <p className="my-5">Massa orci sentence</p>
            <p className="">Ullamcorper vivamus</p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Massa  orci sentence orci sentence</p>
            <p className="my-5">(+234)903-727-3879</p>
            <p className="">Ullamcorper vivamus</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
