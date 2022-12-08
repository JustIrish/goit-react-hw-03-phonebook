import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactMarker = styled.span`
  width: 5px;
  height: 5px;
  background-color: #000;
  border-radius: 50%;
`;

export const ContactText = styled.p`
  margin-left: 7px;
  font-size: 18px;
  font-weight: 500;
`;

export const BtnDelete = styled.button`
  width: 60px;
  font-size: 14px;
  border-radius: 4px;
  border: 0.5px solid #000;
  background-color: transparent;
  transition: backround-color 250ms linear;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #408dadb5;
    border-color: transparent;
  }
`;
