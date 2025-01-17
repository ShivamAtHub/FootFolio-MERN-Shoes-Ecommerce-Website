import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: true,
    });
  }, []);

  const handleButtonClick = () => {
    navigate("/products");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="welcome-section">
          {/*Gradient Top*/}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          {/*Main Section*/}
          <div data-aos="fade-up">
            <h1>Welcome to FootFolio</h1>
            <p>Discover the best shoes and enjoy a seamless shopping experience.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="1000">
            <button
              onClick={handleButtonClick}
              style={{
                backgroundColor: "#141619",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "100px",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "background-color 0.3s ease",
                marginTop: "20px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#292f35";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#141619";
              }}
              onFocus={(e) => e.target.style.outline = "none"}
            >
              Shop Now
            </button>
          </div>
        </section>

        {/*Promo Section*/}
        <div className="relative overflow-hidden bg-transparent">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg" data-aos="fade-right" data-aos-delay="1000">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Step into Style with Our Latest Collection
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  Discover the perfect pair of shoes for every occasion, combining comfort, quality, and trendsetting design.
                </p>
                <div className="mt-10 relative">
                  <button
                    onClick={handleButtonClick}
                    style={{
                      backgroundColor: "#141619",
                      color: "white",
                      border: "none",
                      padding: "12px 24px",
                      borderRadius: "100px",
                      cursor: "pointer",
                      fontSize: "1rem",
                      transition: "background-color 0.3s ease",
                      marginTop: "20px",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#292f35";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#141619";
                    }}
                    onFocus={(e) => e.target.style.outline = "none"}
                  >
                    Shop Collection
                  </button>
                </div>
              </div>

              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                    data-aos="fade-left"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              alt=""
                              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d77b1543-1e5e-4754-9b31-4c790e6ced8b/LEBRON+XXII+EP.png"
                              className="size-full object-cover"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e863ca32-5f23-49eb-9ee6-da62958650f9/NIKE+DUNK+LOW+RETRO.png"
                              className="size-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/575090dc-4bfb-4b82-a363-9294efb823b5/AIR+FORCE+1+%2707.png"
                              className="size-full object-cover"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8301a11f-4b63-4034-bd1e-ff080dcad33b/PEGASUS+EASYON+FP.png"
                              className="size-full object-cover"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a4bd232d-63c9-479a-98ee-b2349c257a87/W+NIKE+AIR+MAX+PLUS+SE.png"
                              className="size-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5364b8fd-9e81-4ac7-966b-0c0759a921e5/W+NIKE+OFFCOURT+ADJUST+SLIDE.png"
                              className="size-full object-cover"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c10798df-b109-43cf-84aa-af977d21dae5/ZM+VAPOR+16+ACADEMY+MDS+FG%2FMG.png"
                              className="size-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Gradient Bottom*/}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-transparent-100 text-gray-700 py-4 text-center" data-aos="fade-up" data-aos-delay="300">
          <p>&copy; 2025 <a href="https://www.linkedin.com/in/shivamdarekar2206/" target="_blank" rel="noopener noreferrer">Shivam Darekar</a>. All rights reserved.</p>
          <p className="mt-2 text-sm"> Images by <a href="https://www.nike.com" target="_blank" rel="noopener noreferrer" className="underline">Nike</a>.</p>
      </footer>

    </div>
  );
}

export default Home;
