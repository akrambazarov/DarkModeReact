
const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="w-16 h-16 border-4 border-green-500 border-dashed rounded-full animate-spin" />
    </div>
  );
};

export default Preloader;
