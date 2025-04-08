import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Links from "./Links";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
  const navbarBackground = isTopPage ? "" : "bg-primary-300 drop-shadow";
  return (
    <>
      <nav>
        <div
          className={`${navbarBackground} ${flexBetween} fixed top-0 z-90 w-full py-6`}
        >
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
              {/* {Left side} */}
              <img
                src="/public/mankind4dev-bg.png"
                alt="logo"
                className="w-[90px] h-[60px]"
              />

              {/* {Left side} */}
              {isAboveMediumScreens ? (
                <>
                  <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                      <Links
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                      <Links
                        page="Benefits"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                      <Links
                        page="Our Classes"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                      <Links
                        page="Contact Us"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                    </div>
                    <div className={`${flexBetween} gap-8`}>
                      <p className="">Sign In</p>
                      <ActionButton setSelectedPage={setSelectedPage}>
                        Become a Member
                      </ActionButton>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <button
                    className="rounded-full bg-secondary-400 p-2 "
                    onClick={() => setIsMenuToggle(!isMenuToggle)}
                  >
                    <Bars3Icon className="w-6 h-6 text-white" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        {/* {Mobile menu display} */}
        {!isAboveMediumScreens && isMenuToggle && (
          <>
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-300 drop-shadow-xl">
              <div className="flex justify-end p-12">
                <button
                  className=""
                  onClick={() => setIsMenuToggle(!isMenuToggle)}
                >
                  <XMarkIcon className="h-6 w-6 text-gray-400" />
                </button>
              </div>
              {/* {Menu Items} */}
              <div className="ml-[33%] flex flex-col space-y-10 text-2xl">
                <Links
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Links
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Links
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Links
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
