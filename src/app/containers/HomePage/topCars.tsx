import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Car from "../../components/car";
import Audi from "../../../assets/images/porche.png";
import Mclaren from "../../../assets/images/mclaren-orange-big.png";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";

const TopCarsContainer = styled.div`
  ${tw`
max-w-screen-lg w-full flex flex-col items-center justify-center px-4 md:px-0 mb-10
`}
`;
const Title = styled.h1`
  ${tw`
text-black text-2xl md:text-5xl font-extrabold md:font-black md:leading-normal  
`}
`;

const CarsContainer = styled.div`
  ${tw`
w-full flex flex-wrap justify-center mt-7 md:mt-10
`}
`;
export default function TopCars() {
  const [current, setCurrent] = React.useState(0);
  const isMobile: Boolean = useMediaQuery({ maxWidth: SCREENS.sm });

  const topCar1 = {
    name: "Audi S3 Car",
    milage: "104",
    dailyPrice: "50",
    monthlyPrice: "1500",
    gearType: "Auto",
    gas: "Petrol",
    thumbnail: Audi,
  };

  const topCar3 = {
    name: "Mclaren",
    milage: "105",
    dailyPrice: "50",
    monthlyPrice: "1700",
    gearType: "Auto",
    gas: "Gasolene",
    thumbnail: Mclaren,
  };
  const cars = [
    <Car {...topCar1} />,
    <Car {...topCar3} />,
    <Car {...topCar1} />,
    <Car {...topCar3} />,
    <Car {...topCar1} />,
    <Car {...topCar3} />,
  ];
  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>

      <CarsContainer>
        {
          (
            <Carousel
              value={current}
              onChange={setCurrent}
              slides={cars}
              plugins={[
                "clickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
              ]}
              breakpoints={{
                640: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 1,
                      },
                    },
                  ],
                },
                900: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 2,
                      },
                    },
                  ],
                },
              }}
            />
          ) as any
        }
        <Dots
          value={current}
          onChange={setCurrent}
          number={isMobile ? cars.length : Math.ceil(cars.length / 2)}
        />
      </CarsContainer>
    </TopCarsContainer>
  );
}
