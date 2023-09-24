import AppHeader from "../shared/AppHeader";
import AppFooter from "../shared/AppFooter";
import PagesMetaHead from "../PagesMetaHead";
import ContactForm from "../contact/ContactForm";
const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <PagesMetaHead />
      <AppHeader />
      <div>{children}</div>
      {/* <ContactForm /> */}
      <AppFooter />
    </div>
  );
};

export default DefaultLayout;
