export default function About() {
  return (
    <section id="about" className="container py-5">
      <div className="row justify-content-center">
        {/* Heading - Always on top */}
        <div className="col-12 text-center mb-4">
          <h2 className="mb-0" style={{ fontSize: "2.5rem" }}>About Me</h2>
        </div>

        {/* Image - 2nd on mobile, 1st on desktop */}
        <div className="col-md-5 order-1 order-md-0 mb-4 mb-md-0 d-flex justify-content-center">
          <img
            src="/src/assets/RedAngel.jpg"
            alt="Parinika"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text - 3rd on mobile, 2nd on desktop */}
        <div className="col-md-7 order-2 order-md-1">
          <p style={{ fontSize: "1rem", lineHeight: "1.8" }}>
            I'm a <strong>web developer</strong> with a strong eye for clean, accessible, and modern UI/UX. Over the past few years, 
            I've built a range of full-stack projects like Caring Hands, a donation website. 
            I have also built various frontend projects like an Admin Dashboard, a weather app, and a simple quiz game. 
            I'm passionate about creating user-friendly and visually appealing interfaces that make a lasting impression 
            and solve real-world problems.
            <br /><br />
            I've also developed my own versions of popular platforms like Quora and WhatsApp (feel free to check out my GitHub 😊).
            <br /><br />
            I'm also an active <strong>problem solver</strong>, with 600+ problems solved across LeetCode and GeeksforGeeks. 
            I actively participate in coding contests and have recently started competing on Codeforces.
          </p>
        </div>
      </div>
    </section>
  );
}
