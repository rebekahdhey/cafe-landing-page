type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

function Button({ children, href, variant = "primary" }: ButtonProps) {
  return (
    <a href={href} className={`btn btn-${variant}`}>
      {children}
    </a>
  );
}

export default Button;