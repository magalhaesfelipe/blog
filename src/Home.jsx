const Home = () => {
  const x = 'something';

  return (
    <div className='flex h-screen items-center justify-center bg-slate-800 text-white'>
      {x}

      <div className='text-center'>
        <h1 className='text-4-1 mb-4 bg-red-600 font-bold'>
          Welcome to my Blog!
        </h1>
        <div className='bg-yellow-500'>
          <p className='font-serif text-lg font-semibold'>
            This is the Home page !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
