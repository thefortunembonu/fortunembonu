interface Props {
  children: React.ReactNode;
}

function Heading({ children }: Props) {
  return (
    <h2 className="font-bold my-4 flex justify-center text-xl">{children}</h2>
  );
}

export default Heading;
