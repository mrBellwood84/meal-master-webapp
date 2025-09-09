interface IProps {
  params: Promise<{ id: string }>;
}

const RecipeViewSingle = async ({ params }: IProps) => {
  const { id } = await params;

  return (
    <div>
      <div>View single recipe</div>
      <div>{id}</div>
    </div>
  );
};

export default RecipeViewSingle;
