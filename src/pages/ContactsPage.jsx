import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectError, selectLoading } from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { Loader } from "../components/Loader/Loader";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // запускаєм її
    dispatch(fetchContacts());
  }, [dispatch]);

  // витягуєм
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isError && <h2>Something went wrong!</h2>}
      {isLoading && <Loader />}
    </div>
  );
};

export default ContactsPage;
