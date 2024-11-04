'use client'
import React from "react";

interface Params {
  item: string;
}

interface PageProps {
  params: Promise<Params>;
}

export default function ItemPage({ params }: PageProps) {
  const [resolvedParams, setResolvedParams] = React.useState<Params | null>(null);

  React.useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  if (!resolvedParams) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className='text-3xl font-semibold capitalize'>{resolvedParams.item} Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente
        tenetur animi excepturi tempora aperiam, fugit in architecto, iusto
        magni placeat obcaecati voluptatem soluta labore similique reiciendis
        non a harum autem id provident omnis corrupti consequuntur velit?
        Architecto repellat maiores quam ducimus nobis veritatis delectus
        molestias, inventore corrupti modi minima commodi quos fugit odit
        ratione tempore iure ipsam soluta harum sequi quas excepturi! Tenetur
        laboriosam laborum quibusdam enim dicta adipisci, nostrum ipsa provident
        odio nemo dolore optio, ad doloremque ducimus praesentium iure neque
        voluptas. Aliquid eveniet incidunt facere qui itaque reiciendis labore
        est, facilis, iusto ex iste. Eos, ducimus iure!
      </p>
    </div>
  );
}