    export default async function ListPage(props: { params: Promise<{ id: string }> }) {
      const params = await props.params;
      const id = params.id
    return (
      <div>
        <h2>{id}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consectetur a assumenda repudiandae repellat unde, nihil, modi quaerat sint repellendus esse! Ea sequi sed vero sit ipsa ullam fugit illo?
        </p>
      </div>
    );
  }