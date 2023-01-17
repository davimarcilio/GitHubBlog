export function SearchForm() {
  return (
    <form className="w-full flex flex-col gap-3 mt-16 mb-12 ">
      <div className="flex justify-between">
        <h1 className="text-base-subtitle font-bold text-lg">Publicações</h1>
        <p className="text-sm text-base-span">6 publicações</p>
      </div>
      <input
        className="w-full text-base-text py-3 focus:outline-none px-4 focus:border-blue placeholder:text-base-label text-base bg-base-input border border-base-border rounded-md"
        type="text"
        placeholder="Buscar conteúdo "
      />
    </form>
  );
}
