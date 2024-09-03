type Props = {
  title: string;
}

function CarouselItem(props: Props) {
  return (
    <div>
      <p>{props.title}</p>
    </div>
  );
}

export default CarouselItem;