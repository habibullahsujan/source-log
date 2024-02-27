
import Header from "./_components/header";
import AllBlogs from "./_components/allBlogs";
import RecentBlog from "./_components/recentBlogs";
import Pagination from "./_components/pagination";
import ContactForm from "./_components/contactForm";
import BlogWriting from "../(components)/blogWriting";

export default function Home() {
  return (
    <div className="py-24">
      <Header />
      <RecentBlog />
      <AllBlogs />
      {/* <Pagination /> */}
      <ContactForm />
      {/* <BlogWriting/> */}
    </div>
  );
}
