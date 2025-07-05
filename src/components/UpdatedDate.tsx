type Props = {
  date: string;
};

export default function UpdatedDate({ date }: Props) {
  const formatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <p className="text-sm text-gray-500 italic mt-2">
      Last updated on {formatted}
    </p>
  );
}
