export default function NotFound() {
  return (
    <div className="flex flex-col text-center pt-12">
      <div className="text-5xl text-orange pb-8">No breweries found</div>
      <div className="text-2xl">
        Adjust your filters to try again or refresh
      </div>
    </div>
  );
}
