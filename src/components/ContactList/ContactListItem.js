import PropTypes from 'prop-types';
import {
  ContactItem,
  BtnDelete,
  TextWrap,
  ContactText,
  ContactMarker,
} from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDeleteClick }) => {
  return (
    <ContactItem>
      <TextWrap>
        <ContactMarker></ContactMarker>
        <ContactText>
          {name}: {number}
        </ContactText>
      </TextWrap>
      <BtnDelete type="button" onClick={() => onDeleteClick(id)}>
        Delete
      </BtnDelete>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
