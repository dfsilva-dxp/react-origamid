import * as S from "./styles";

interface FilterControllersProps {
  title: string;
}

export function FilterControllers({ title }: FilterControllersProps) {
  return (
    <S.FilterControllerContent>
      <h1>{title}</h1>
      <input type="month" />
    </S.FilterControllerContent>
  );
}
