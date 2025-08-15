export default function TestimonialGrid() {
    const testimonials = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    ];
  
    return (
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 p-6">
        {testimonials.map((text, index) => (
          <div
            key={index}
            className="mb-6 break-inside-avoid border border-gray-600 rounded-2xl p-6 bg-[#181818]"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/src/assets/icon.png" // cycle through avatars
                alt="profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-white font-semibold">John Doe</h3>
                <p className="text-gray-400 text-sm">Java Developer</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    );
  }
  