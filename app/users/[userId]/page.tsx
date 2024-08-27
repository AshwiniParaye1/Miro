interface UserIdPageProps {
  params: {
    userId: string;
  };
}

const Page = ({ params }: UserIdPageProps) => {
  return <div>USer ID: {params.userId}</div>;
};

export default Page;
