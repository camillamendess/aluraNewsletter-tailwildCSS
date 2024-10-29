const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="alura-card">
      <h3 className="mb-2 text-xl text-alura-200 dark:text-gray-200 font-bold">
        {title}
      </h3>
      <div className="w-full justify-end gap-2 pr-5 hidden sm:flex">
        {tags.map((tag, index) => (
          <span className="alura-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="grid gap-1">
        {text.map((content, index) => (
          <p className="text-alura-200 dark:text-gray-300" key={index}>
            {content}
          </p>
        ))}
      </div>
      {image && <img className="sm:p-4 " src={image} />}
      {image && alt && <span className="sr-only">{alt}</span>}
    </div>
  );
};

export default Article;
