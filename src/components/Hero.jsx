// SwiperComponent.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
	const slides = [
		{ id: 1, content: "Slide 1", color: "#ff6b6b" },
		{ id: 2, content: "Slide 2", color: "#ffcc5c" },
		{ id: 3, content: "Slide 3", color: "#88d8b0" },
	];

	return (
		<div style={{ width: "100%", height: "500px", margin: "1rem 0rem" }}>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={30}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000 }}
				loop
				style={{ height: "100%" }}
			>
				{slides.map((slide) => (
					<SwiperSlide key={slide.id} style={{ backgroundColor: slide.color }}>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								height: "100%",
								fontSize: "24px",
								color: "#fff",
							}}
						>
							{slide.content}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Hero;
