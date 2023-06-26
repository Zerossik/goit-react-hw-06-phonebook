import PropTypes from 'prop-types';
import { SectionEl } from './Section.styled';

export function Section({ children }) {
  return (
    <SectionEl>
      <h1>Phonebook</h1>
      {children}
    </SectionEl>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
