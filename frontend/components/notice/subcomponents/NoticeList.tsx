type NoticeListProps = {
  title: string;
  category: string;
};

const NoticeList = ({ title, category }: NoticeListProps) => {
  return (
    <div>
      <span>{title}</span>
      <span>{category}</span>
    </div>
  );
};

export default NoticeList;
