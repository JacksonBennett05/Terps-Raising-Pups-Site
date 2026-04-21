import "./Resources.css";

const currentLinks = [
  { label: "Puppy Raiser Manual Online", href: "https://www.guidedog.org/PuppyRaising/PuppyRaiserManual/PuppyRaiserManual.aspx" },
  { label: "Chronic Diarrhea Protocol", href: "https://docs.google.com/document/d/1O-XRxtcQUa5-IbN3FTHuFjGSkz_qEtDEeGtKg4JcOYE/edit?usp=sharing" },
  { label: "Emergency Vet List", href: "https://docs.google.com/document/d/1XopBrg7MsKGFUTLn-2pOwcPXCi-wXwqzObz6P614RMo/edit?usp=sharing" },
  { label: "Flying with your Pup", href: "https://docs.google.com/document/d/1dTxq261x3DVNLy8WaPC55jODP0EF0jEO6wS1mS4NVTk/edit?tab=t.0" },
  { label: "12 month YODA", href: "/resources/12_month_YODA.docx" },
  { label: "15 month YODA", href: "/resources/15_month_YODA.docx" },
  { label: "PG County License Instructions", href: "/resources/PG_County_Dog_License.docx" },
  { label: "GDF Vet Schedule", href: "https://2a123e74-17ae-45d6-b4d9-34ea912854aa.filesusr.com/ugd/0d6247_5a03f51d06df4308b8a2876486ec11c1.pdf" },
  { label: "Letter to Professors", href: "" },
];

const prospectiveLinks = [
  { label: "Approved Vet List", href: "https://2a123e74-17ae-45d6-b4d9-34ea912854aa.filesusr.com/ugd/0d6247_8a6db57afb674cff89de7f38c394bc16.pdf" },
  { label: "Things to Buy", href: "https://2a123e74-17ae-45d6-b4d9-34ea912854aa.filesusr.com/ugd/0d6247_31935abe14b5425baec6e6ad48ea0d2c.pdf" },
  { label: "On-Campus Housing Instructions", href: "https://2a123e74-17ae-45d6-b4d9-34ea912854aa.filesusr.com/ugd/0d6247_1499d30fb6614ac38c352f391efb8ae8.pdf" },
  { label: "Commons/Courtyards Housing Instructions", href: "https://2a123e74-17ae-45d6-b4d9-34ea912854aa.filesusr.com/ugd/0d6247_ddbb863444f847f9afe91ede973eecc3.pdf" },
];


function Resources() {
  return (
    <main className="resources-page">

      <section className="section section--yellow">
        <h1 className="section_heading">Current and New Raisers</h1>
        <div className="section_body">
          <div className="useful-links-label">Useful links</div>
          <ul className="link-list">
            {currentLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href || "#"}>{label}</a>
              </li>
            ))}
          </ul>

          <div className="video-placeholder">
            <iframe
              width="260"
              height="150"
              src="https://www.youtube.com/embed/jI0FynLlHgc"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="section section--black">
        <h2 className="section_heading">Prospective Raisers</h2>
        <ul className="link-list">
          {prospectiveLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href || "#"}>{label}</a>
            </li>
          ))}
        </ul>
      </section>


    </main>
  );
}

export default Resources;