import AppHeader from "../shared/AppHeader";
import AppFooter from "../shared/AppFooter";
import PagesMetaHead from "../PagesMetaHead";
import ContactForm from "../contact/ContactForm";
const DefaultLayout = ({ children }) => {
  return (
    <>
      <PagesMetaHead />
      <AppHeader />
      <div>{children}</div>
      <ContactForm />
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
