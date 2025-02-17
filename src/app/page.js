import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Video Background */}
      <div className="w-full relative">
        <div className="relative w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/7x-8knpgpn4?si=h3sudtAmSBNbFr54&autoplay=1&controls=0&rel=0&mute=1&start=10&end=60&loop=1&playlist=7x-8knpgpn4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ filter: "brightness(0.35)" }}
          ></iframe>
        </div>

        {/* New Overlay Div */}
        <div className="absolute bottom-0 left-0 w-full h-40 flex flex-row items-center justify-center" style={{ background: "#F4F5FA" }}>
          <img src="/images/jayhawks1.jpg" alt="Jayhawks" className="w-80 h-auto object-contain mr-4" />
          <img src="/images/jayhawks2.jpg" alt="Jayhawks" className="w-80 h-auto object-contain ml-4" />
        </div>

        {/* Logo and Text Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <img
            src="/images/ATO-dark-blue-yellow@2x.webp"
            alt="ATO Logo"
            className="w-80 h-auto object-contain brightness-200 -mt-20"
          />
          <h2 className="text-gray-200 text-xl mt-4">
            At The University of Kansas
          </h2>
        </div>
      </div>

      {/* Letter Section */}
      <div className="w-full py-20 pb-40 bg-white flex flex-col items-center text-center">
        <h1 className="text-black text-4xl">A Letter From Our President</h1>
        <img src="/images/gold-cross.png" alt="Gold Cross" className="mt-8 w-16 h-16" />
        <p className="mt-8 text-black text-sm w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          <br />
          <br />
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <h2 className="mt-8 text-black text-2xl">L&R</h2>
        <br />
        <img src="/images/signature.png" alt="Robert Boersma" className="mt-8 w-80 h-full" />
      </div>
    </div>
  );
}
