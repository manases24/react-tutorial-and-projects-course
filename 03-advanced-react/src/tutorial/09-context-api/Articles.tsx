import { articles } from "./api";

export const Articles = () => {
  return (
    <div className="text-left">
      <ul>
        {articles.map((item) => (
          <li key={item.id} className="mb-6">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="mb-1 text-gray-600">{item.snippet}</p>
            <span className="text-sm text-gray-500">
              {new Date(item.date).toDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
