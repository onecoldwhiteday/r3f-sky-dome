// DOM elements here
const DOM = () => {
  return <></>;
};


export default function Page() {
  return (
    <>
      <DOM />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Welcome!",
    },
  };
}
