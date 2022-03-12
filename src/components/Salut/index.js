import { useSelector } from "react-redux";

const Salut = () => {
  const salut = useSelector((state) => state.salut.hello);

  console.log(salut);
  return (
    <p>{salut}</p>
  );
};

export default Salut;
