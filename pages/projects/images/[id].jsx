import { useRouter } from 'next/router';

const HighResImageView = () => {
  const router = useRouter();
  const { id } = router.query; // Notice the use of id here
  
  return <div>Hello World, this is image: {id}</div>;
};

export default HighResImageView;