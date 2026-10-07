import Button from "./Button";

function Hero() {
  return (
    <section id="home" className="hero">
      <span className="eyebrow">☕ Est. 2024</span>
      <h1>Little Hearth Cafe</h1>
      <p>Slow mornings, warm cups. Come in, get comfy, and stay a while.</p>

      <div className="hero-actions">
        <Button href="#menu">See the menu</Button>
        <Button href="#hours" variant="secondary">
          Visit us
        </Button>
      </div>
    </section>
  );
}

export default Hero;