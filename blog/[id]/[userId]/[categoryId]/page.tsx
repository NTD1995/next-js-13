const Page = ({ params }: { params: { id: string[] } }) => {
  console.log(params);
  return <div className="m-4 font-bold">Blog ID: </div>;
};

export default Page;
