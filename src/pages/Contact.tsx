import { links } from "../data";

function Contact() {
  return (
    <section className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-slate-800">Contact</h2>
      <p className="text-sm text-slate-600 leading-relaxed">
        Interested in my projects or want to collaborate on something data- or
        React-related? Reach out through any of the channels below.
      </p>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <li key={link.id}>
            <span className="text-slate-500">{link.label}: </span>
            <a
              href={link.url}
              className="text-sky-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {link.url.replace("mailto:", "")}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contact;
