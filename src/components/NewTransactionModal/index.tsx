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
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [frequency, setFrequency] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleOnRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
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
        <Input
          type="text"
          placeholder="Title"
          handleChange={(e): void => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <S.FormGroup>
          <span>
            <Input
              type="date"
              placeholder="Date"
              handleChange={(e): void => {
                setDate(e.target.value);
              }}
              value={date}
            />
          </span>
          <span>
            <Input
              type="text"
              placeholder="Frequency"
              handleChange={(e): void => {
                setFrequency(e.target.value);
              }}
              value={frequency}
            />
          </span>
          <span>
            <Input
              type="text"
              placeholder="Category"
              handleChange={(e): void => {
                setCategory(e.target.value);
              }}
              value={category}
            />
          </span>
          <span>
            <Input
              type="number"
              placeholder="Value"
              handleChange={(e): void => {
                setValue(Number(e.target.value));
              }}
              value={value}
            />
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
        <DefaultButton type="submit">Register</DefaultButton>
      </S.Form>
    </Modal>
  );
}
