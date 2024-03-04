
import Header from "./_components/header";
import AllBlogs from "./_components/allBlogs";
import RecentBlog from "./_components/recentBlogs";
import Pagination from "./_components/pagination";
import ContactForm from "./_components/contactForm";


export default function Home() {
  return (
    <div className="py-24 mx-1 md:mx-6">
      <Header />
      <RecentBlog />
      <AllBlogs />
      {/* <Pagination /> */}
      <ContactForm />
    </div>
  );
}
