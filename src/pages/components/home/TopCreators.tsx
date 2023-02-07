import Section from '@layouts/Section';

export default function TopCreators() {
  return (
    <Section className="bg-black-07 relative -mx-3 lg:-mx-[120px]">
      <TopCreatorsText />
      <TopCreatorsDisplay />
    </Section>
  );
}

const TopCreatorsText = () => (
  <article className="px-[120px] font-clash relative  pb-14 lg:pb-[250px] lg:pt-20">
    <h5
      className="max-w-[264px] text-[1.5rem] font-[600] leading-[2.3325rem] uppercase 
      lg:text-[55px] lg:leading-[85.52px] lg:max-w-[535px] "
    >
      Top Creator of the week
    </h5>
    <p
      className="text-[0.8125rem] leading-[1.05625rem] text-black-08 mt-4 
      lg:mt-[170px] lg:text-[2rem] lg:leading-[41.6px] font-[200]"
    >
      “Everything always looked better in black and white. Everything always as
      if it were the first time; there’s always more people in a black and white
      photograph. It just makes it seem that there were more people at a gig,
      more people at a football match, than with colour photography. Everything
      looks more exciting.”– Jack Lowden
    </p>

    <h5
      className="text-[2rem] font-[700] leading-[3.11rem] uppercase text-black-03
      absolute right-0 -bottom-6 text-right lg:bottom-20 lg:text-[48px] 
      lg:leading-[74.64px] lg:right-[120px]"
    >
      Circa
      <span
        className="block text-[4rem] leading-[6.246875rem] line-through
        lg:text-[170px] lg:leading-[264.34px]"
      >
        1985
      </span>
    </h5>
  </article>
);

const TopCreatorsDisplay = () => (
  <div
    className=" w-[240px] h-[240px] absolute right-[20%] -bottom-9 bg-black-09
    lg:h-[90%] lg:w-[826px] lg:right-[120px] lg:-bottom-20"
  >
    <img
      className="w-full h-full object-cover"
      src="https://res.cloudinary.com/yheenca/image/upload/v1669896641/artsy/top-creators/746c75fcb7ff8728e3049c633ac74db1_gy7f8j.png"
      alt=""
    />
  </div>
);
