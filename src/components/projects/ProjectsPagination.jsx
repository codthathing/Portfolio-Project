const ProjectsPagination = ({ paginationArray, presentPagination }) => {
  return (
    <aside className="absolute top-full left-0 right-0 mx-auto mt-8 md:mt-16 lg:mt-14 flex gap-x-1.5 md:gap-x-3 justify-center w-3/5 md:w-2/5 lg:w-1/5 overflow-hidden">
      {paginationArray.map((_value, index) => {
        return <i key={index} className={`w-1 h-1 md:w-2.5 md:h-2.5 lg:w-2 lg:h-2 rounded-full ${index === presentPagination ? "bg-gray-400" : "bg-white"}`} />;
      })}
    </aside>
  );
};

export default ProjectsPagination;
