import Header from "../components/header";
import Footer from '../components/footer';
export default function PagesLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
