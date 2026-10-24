import Card from "../components/ui/Card";
import { links } from "../data";

function Contact() {
  return (
    <Card className="max-w-md mx-auto w-full">
      <h2 className="page-title">Contact</h2>
      <p className="text-body leading-relaxed">
        Interested in my projects or want to collaborate on something data- or
        React-related? Reach out through any of the channels below.
      </p>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <li key={link.id}>
            <span className="text-muted">{link.label}: </span>
            <a href={link.url} className="text-link" target="_blank" rel="noreferrer">
              {link.url.replace("mailto:", "")}
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Contact;
