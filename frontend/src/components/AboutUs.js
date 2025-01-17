import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import TeamMember1 from './assets/shivam.jpg';

function AboutUs() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 200,
          once: true,
        });
      }, []);

    const handleClick = () => {
        navigate("/contactus");
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <main>
                {/* Hero Section */}
                <section className="relative bg-white pt-16 pb-32">
                    <div className="absolute inset-0 bg-transparent opacity-50"></div>
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left relative z-10">
                        {/* About-Us */}
                        <div className="flex flex-col justify-center">
                            <h1 className="text-5xl font-bold text-gray-900 mb-4" data-aos="fade-right">
                                About Us
                            </h1>
                            <p className="mt-4 text-xl text-gray-700" data-aos="fade-right">
                                At <b>FootFolio</b>, we are passionate about creating footwear that combines both style and comfort. Whether you're looking for athletic shoes that give you the support you need during a workout, or casual footwear to keep you stylish all day long, our collection is designed to provide you with the perfect pair for every occasion.
                                <br /><br />
                                With years of experience in the footwear industry, we aim to deliver not only great products but also an exceptional shopping experience. We believe in offering premium quality shoes that not only look great but also feel amazing on your feet. Step into comfort and style with <b>FootFolio.</b>
                            </p>
                        </div>

                        {/* Image */}
                        <div className="flex items-center justify-center">
                            <img
                                src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/a005c6ee-8d75-4115-a42c-6bdd89239a09/men-s-shoes-clothing-accessories.jpg" // Replace this with your actual shoe-related image URL
                                alt="Shoes Collection"
                                className="w-full max-w-md rounded-lg shadow-xl object-cover"
                                data-aos="fade-left"
                            />
                        </div>
                    </div>
                </section>


                {/* Our Journey */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Image */}
                        <div className="flex items-center justify-center">
                            <img
                                src="https://static.nike.com/a/images/w_1920,c_limit/c4381ecb-a293-4406-895d-3d63e7c9f923/the-best-air-force-1s-to-buy-right-now.jpg" // Replace with your journey-related image
                                alt="Our Journey"
                                className="w-full max-w-md rounded-lg shadow-xl object-cover"
                                data-aos="fade-right"
                            />
                        </div>

                        {/* Text */}
                        <div className="flex flex-col justify-center" data-aos="fade-left">
                            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                                Our Journey
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Our story began with a simple yet ambitious dream, to create footwear that doesn't just look good, but feels amazing with every step. From humble beginnings, we started by sourcing the finest materials, combining style with unmatched comfort. Our goal was clear – to revolutionize the way people think about shoes, ensuring that comfort and design are never compromised.
                                <br /><br />
                                Over the years, we’ve grown into a trusted brand known for offering an extensive collection of shoes designed for every occasion. Our journey has been shaped by passion, dedication, and a relentless commitment to quality. From the first prototype to our ever-growing collection, we’ve learned from our customers and refined our craft. Today, we’re proud to be a part of your footwear journey, helping you find the perfect pair for every step of life.
                            </p>
                        </div>
                    </div>
                </section>


                {/* Our Values */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-semibold text-gray-900" data-aos="zoom-in">Why Choose Us?</h2>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                            {/* Free Shipping */}
                            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="500">
                                <div className="mb-4">
                                    <img
                                        src="https://tailwindui.com/plus/img/ecommerce/icons/icon-shipping-simple.svg"
                                        alt="Free Shipping"
                                        className="w-16 h-16"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Free Shipping</h3>
                                <p className="mt-2 text-gray-600">
                                    We ensure that your order reaches you without any extra cost for shipping.
                                </p>
                            </div>

                            {/* 3 Year Warranty */}
                            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="1000">
                                <div className="mb-4">
                                    <img
                                        src="https://tailwindui.com/plus/img/ecommerce/icons/icon-warranty-simple.svg"
                                        alt="Warranty"
                                        className="w-16 h-16"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">3 Year Warranty</h3>
                                <p className="mt-2 text-gray-600">
                                    Our products come with a 3-year warranty to give you peace of mind with your purchase.
                                </p>
                            </div>

                            {/* Easy Exchange */}
                            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="1500">
                                <div className="mb-4">
                                    <img
                                        src="https://tailwindui.com/plus/img/ecommerce/icons/icon-exchange-simple.svg"
                                        alt="Easy Exchange"
                                        className="w-16 h-16"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Easy Exchange</h3>
                                <p className="mt-2 text-gray-600">
                                    If you’re not completely satisfied, we offer an easy and hassle-free exchange policy.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>


                {/* Team Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto text-center px-6">
                        <h2 className="text-3xl font-semibold text-gray-900" data-aos="zoom-in">Meet Our Team</h2>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                            <a href="https://www.linkedin.com/in/shivamdarekar2206/">
                            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="500">
                                <img
                                    className="w-32 h-32 rounded-full"
                                    src={TeamMember1}
                                    alt="Team Member"
                                />
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">Shivam Darekar</h3>
                                <p className="mt-2 text-gray-600">Developer</p>
                            </div>
                            </a>

                            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="1000">
                                <img
                                    className="w-32 h-32 rounded-full"
                                    src="https://img.freepik.com/premium-photo/woman-suit-with-her-arms-crossed_1204495-11609.jpg?w=740"
                                    alt="Team Member"
                                />
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">Ava Mitchell</h3>
                                <p className="mt-2 text-gray-600">Lead Designer</p>
                            </div>

                            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="1500">
                                <img
                                    className="w-32 h-32 rounded-full"
                                    src="https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1737122610~exp=1737126210~hmac=f4768b28ab0bba01013d66a8492be22b3f89a771e43c4429dd2c661252378a15&w=740"
                                    alt="Team Member"
                                />
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">Liam Carter</h3>
                                <p className="mt-2 text-gray-600">Head of Marketing</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Us Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Left Side: Info and Button */}
                        <div className="flex flex-col justify-center text-center md:text-left" data-aos="fade-right">
                            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                            <p className="text-lg text-gray-600 mb-4">
                                Have any questions or need assistance? Our team is here to help you with everything you need.
                                Whether you have inquiries about our products, your order, or any other concerns, we're just a message away.
                            </p>
                                <button
                                    type="button"
                                    onClick={handleClick}
                                    style={{
                                        backgroundColor: "#141619",
                                        color: "white",
                                        border: "none",
                                        padding: "10px 24px",
                                        borderRadius: "100px",
                                        cursor: "pointer",
                                        fontSize: "1rem",
                                        transition: "background-color 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "#292f35";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "#141619";
                                    }}
                                    onFocus={(e) => e.target.style.outline = "none"}
                                >
                                    Contact Us
                                </button>
                        </div>

                        {/* Right Side: Image */}
                        <div className="flex items-center justify-center">
                            <img
                                src="https://static.nike.com/a/images/w_1920,c_limit/81a97e25-6998-43eb-8163-e4f29efae143/what-nike-shoes-are-best-for-long-distance-running.jpg" // Replace with a relevant image for Contact Us (e.g., a customer support image or logo)
                                alt="Contact Us"
                                className="w-full max-w-md rounded-lg shadow-xl object-cover"
                                data-aos="fade-left"
                            />
                        </div>
                    </div>
                </section>



                {/* Footer Section */}
                <footer className="bg-transparent-100 text-gray-700 py-4 text-center">
                    <p>&copy; 2025 <a href="https://www.linkedin.com/in/shivamdarekar2206/" target="_blank" rel="noopener noreferrer">Shivam Darekar</a>. All rights reserved.</p>
                    <p className="mt-2 text-sm"> Images by <a href="https://www.nike.com" target="_blank" rel="noopener noreferrer" className="underline">Nike</a>.</p>
                </footer>
            </main>
        </div>
    );
}

export default AboutUs;
