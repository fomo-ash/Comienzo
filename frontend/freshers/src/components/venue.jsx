// src/components/Venue.jsx

export default function Venue() {
  return (
    <section id="venue" className="py-20 w-full flex justify-center">
      <div className="max-w-4xl w-full px-6">

        <h2 className="text-center text-4xl font-extrabold text-yellow-300 mb-6 tracking-wide">
          Venue 
        </h2>

        <div
          className="
            rounded-3xl overflow-hidden
            shadow-[0_0_30px_rgba(0,0,0,0.4)]
            border border-white/20
            backdrop-blur-xl
          "
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.2591165450294!2d85.81446930000004!3d20.289539100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19096313940f77%3A0xf862b01b8adef757!2sKINGPIN%20RESTRO%20BAR!5e0!3m2!1sen!2sin!4v1763390171010!5m2!1sen!2sin"
            className="w-full h-[450px]"
            style={{ border: 0 }}       // ✔ React-safe style
            allowFullScreen={true}     // ✔ Correct attribute
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"  // ✔ Correct casing
          ></iframe>
        </div>

      </div>
    </section>
  );
}
