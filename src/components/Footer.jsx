export default function Footer() {
  const date = new Date();
  console.log(date);
  const year = date.getFullYear();
  return (
    <footer>
      <p>copyright {year}</p>
    </footer>
  );
}
