import { Section } from './Section/Section';
import { PhoneForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <Section>
      <PhoneForm />
      <Filter />
      <ContactsList />
    </Section>
  );
}
