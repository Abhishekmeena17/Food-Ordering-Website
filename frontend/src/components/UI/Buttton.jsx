export default function Button({ children, className, textOnly, ...props }) {
  let CssClass = textOnly ? "text-button" : "button";
  CssClass += " " + className;

  return (
    <button className={CssClass} {...props}>
      {children}
    </button>
  );
}
