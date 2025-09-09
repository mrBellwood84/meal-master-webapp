interface IProps {
  params: Promise<{ id: string }>;
}

const RecipeEditPage = async ({ params }: IProps) => {
  const { id } = await params;
  return (
    <div>
      <div>Edit recipe here ...</div>
      <div>{id}</div>
    </div>
  );
};

export default RecipeEditPage;
