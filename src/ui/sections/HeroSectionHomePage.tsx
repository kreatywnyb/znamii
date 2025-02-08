const HeroSectionHomePage = () => {
  return (
    <section className="bg-basicDark text-white">
      <div className="container relative h-full w-full min-h-[720px] flex">
        <div className="relative z-10  w-full items-center justify-center flex flex-1 flex-col">
          <h1 className="text-[103px] leading-[128px]">
            Zbuduj wizerunek marki
          </h1>
          <p className="font-geist uppercase text-center mt-4">
            Znami to studio kreatywne, które zrealizuje dla Twojej firmy <br />
            branding, nagrania wideo i sesje zdjęciowe
          </p>
        </div>
        <div className="absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2">
          <video src="/hero-video.mp4" autoPlay loop muted playsInline />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionHomePage;
