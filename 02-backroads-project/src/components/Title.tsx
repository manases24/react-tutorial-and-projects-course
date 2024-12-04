interface Props {
  title: string;
  subTitle: string;
}

export const Title = ({ title, subTitle }: Props) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  );
};
