import { useState } from "react";
import Modal from "react-modal";
import { TiArrowUpOutline, TiArrowDownOutline } from "react-icons/ti";

import { DefaultButton } from "../DefaultButton";
import { Input } from "../Input";

import closedImg from "../../assets/close.svg";
import * as S from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  handleOnRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  handleOnRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleOnRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={handleOnRequestClose}
        className="react-modal-close"
      >
        <img src={closedImg} alt="Closed Button" />
      </button>
      <S.Form>
        <h2>New transaction</h2>
        <Input type="text" placeholder="Title" />
        <S.FormGroup>
          <span>
            <Input type="date" placeholder="Date" />
          </span>
          <span>
            <Input type="text" placeholder="Frequency" />
          </span>
          <span>
            <Input type="text" placeholder="Category" />
          </span>
          <span>
            <Input type="number" placeholder="Value" />
          </span>

          <S.RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <TiArrowUpOutline color="#52D987" />
            <span>Deposit</span>
          </S.RadioBox>

          <S.RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <TiArrowDownOutline color="#E83F5B" />
            <span>Withdraw</span>
          </S.RadioBox>
        </S.FormGroup>
        <DefaultButton>Register</DefaultButton>
      </S.Form>
    </Modal>
  );
}
